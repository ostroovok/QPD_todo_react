import { Task } from "../../store/tasksSlices";

class TaskServices {
  private db?: IDBDatabase;
  private request?: IDBOpenDBRequest;
  private storeName: string;
  private dbName: string;

  constructor(dbName: string, storeName: string) {
    this.dbName = dbName;
    this.storeName = storeName;
  }

  init() {
    return new Promise<IDBOpenDBRequest>((resolve, reject) => {
      let dbReq = indexedDB.open(this.dbName);
      dbReq.onupgradeneeded = () => {
        this.db = dbReq.result;

        if (!this.db.objectStoreNames.contains(this.storeName)) {
          const objectStore = this.db.createObjectStore(this.storeName, {
            keyPath: "id",
            autoIncrement: true,
          });
          
          objectStore.createIndex('category_idx', 'category');
          resolve(dbReq);
        }
      };
      dbReq.onsuccess = () => {
        this.db = dbReq.result;
        resolve(dbReq);
      };
      dbReq.onerror = (error) => {
        reject(error);
      };
    });
  }

  getObjectStore() {
    if (!this.db) {
      return;
    }
    const transaction = this.db.transaction([this.storeName], "readwrite");
    transaction.onerror = () => {
      console.log("GetObjectStore error", transaction.error);
    };
    return transaction.objectStore(this.storeName);
  }

  getAllTasks = () => {
    return new Promise<Task[]>((resolve, reject) => {
      const objectStore = this.getObjectStore();
      if (!objectStore) {
        return reject("#1 store or db is undefined");
      }
      const cursor = objectStore.openCursor();
      const items: Task[] = [];

      cursor.onsuccess = (event: any) => {
        const innerCursor = event.target.result;
        if (innerCursor) {
          items.push(innerCursor.value);
          innerCursor.continue();
        } else {
          resolve(items);
        }
      };
    });
  };

  insert(task: { title: string; description: string; category?: number }) {
    return new Promise((resolve, reject) => {
      const objectStore = this.getObjectStore();
      if (!objectStore) {
        return reject("#2 store or db is undefined");
      }
      const addRequest = objectStore.add(task);
      addRequest.onsuccess = () => {
        const allItems = this.getAllTasks();
        resolve(allItems);
      };
      addRequest.onerror = (error) => {
        reject(error);
      };
    });
  }

  delete(id: number) {
    return new Promise((resolve, reject) => {
      const objectStore = this.getObjectStore();
      if (!objectStore) {
        return reject("#3 store or db is undefined");
      }
      const delRequest = objectStore.delete(id);
      delRequest.onsuccess = () => {
        const allItems = this.getAllTasks();
        resolve(allItems);
      };
      delRequest.onerror = (error) => {
        reject(error);
      };
    });
  }

  delCategoryId(id: number) {
    return new Promise((resolve, reject) => {
      const objectStore = this.getObjectStore();
      if (!objectStore) {
        return reject("#3.2 store or db is undefined");
      }
      const categoryindex = objectStore.index("category_idx");

      const request = categoryindex.getAll(id);

      request.onsuccess = () => {
        const item = request.result[0];
        if(!item){
          reject('no items found with the given id');
        }
        this.update(item.id, {
          title: item.title,
          description: item.description,
          id: item.id,
          category: NaN,
        });
        const allItems = this.getAllTasks();
        resolve(allItems);
      };
    });
  }

  update(id: number, newTask: Task) {
    return new Promise((resolve, reject) => {
      const objectStore = this.getObjectStore();
      if (!objectStore) {
        return reject("#4 store or db is undefined");
      }
      const keyRange = IDBKeyRange.only(id);
      const cursor = objectStore.openCursor(keyRange);

      cursor.onsuccess = () => {
        const cursorWithValue = cursor?.result;
        const value = cursorWithValue?.value;

        const updateTo = { ...value, ...newTask };

        if (cursorWithValue === null) {
          return reject("cursorWithValue is undefined");
        }

        const update = cursorWithValue.update(updateTo);
        update.onsuccess = () => {
          const allItems = this.getAllTasks();
          resolve(allItems);
        };
        update.onerror = (error) => {
          reject(error);
        };
      };
      cursor.onerror = (error) => {
        console.log("Check error", { error });
      };
    });
  }
}

export const taskServices = new TaskServices("tasksdb", "tasksStore");
export default TaskServices;
