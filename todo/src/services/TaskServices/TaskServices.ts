type Task = {
  title: string;
  categoryId?: number;
  description: string;
};

class TaskServices {
  private db?: IDBDatabase;
  private request: IDBOpenDBRequest;
  private storeName: string;
  private dbName: string;

  constructor(dbName: string, storeName: string) {
    this.dbName = dbName;
    this.storeName = storeName;

    this.request = indexedDB.open(this.dbName);

    this.request.onsuccess = () => {
      this.db = this.request.result;
    };

    this.request.onupgradeneeded = () => {
      this.db = this.request.result;
      this.db.createObjectStore(this.storeName, {
        keyPath: "id",
        autoIncrement: true,
      });
    };
    this.request.onerror = (error) => {
      console.log("Initialize error", { error });
    };
  }

  initialize() {}

  createStore() {
    if (!this.db) {
      return;
    }
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
    return new Promise((resolve, reject) => {
      const objectStore = this.getObjectStore();
      if (!objectStore) {
        return reject("store or db is undefined");
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

  insert(task: Task) {
    return new Promise((resolve, reject) => {
      const objectStore = this.getObjectStore();
      if (!objectStore) {
        return reject("store or db is undefined");
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
        return reject("store or db is undefined");
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

  update(id: number, newTask: Task) {
    return new Promise((resolve, reject) => {
      const objectStore = this.getObjectStore();
      if (!objectStore) {
        return reject("store or db is undefined");
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
