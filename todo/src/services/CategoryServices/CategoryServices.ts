import {Category} from '../../store/categorySlices';

class CategoryServices {
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

        if (!this.db.objectStoreNames.contains(this.storeName))
          this.db.createObjectStore(this.storeName, {
            keyPath: "id",
            autoIncrement: true,
          });
          resolve(dbReq);
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
    if(!this.db){
        return;
    }
    const transaction = this.db.transaction([this.storeName], "readwrite");
    transaction.onerror = () => {
      console.log("GetObjectStore error", transaction.error);
    };
    return transaction.objectStore(this.storeName);
  }

  getAllCategories = () => {
    return new Promise<Category[]>((resolve, reject) => {
      const objectStore = this.getObjectStore();
      if (!objectStore) {
        return reject("#1 store or db is undefined");
      }
      const cursor = objectStore.openCursor();
      const items: Category[] = [];

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

  insert(category: { title: string; description: string;}) {
    return new Promise((resolve, reject) => {
      const objectStore = this.getObjectStore();
      if (!objectStore) {
        return reject("#2 store or db is undefined");
      }
      const addRequest = objectStore.add(category);
      addRequest.onsuccess = () => {
        resolve(addRequest.result);
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
        const allItems = this.getAllCategories();
        resolve(allItems);
      };
      delRequest.onerror = (error) => {
        reject(error);
      };
    });
  }

  update(id: number, newTask: Category) {
    return new Promise((resolve, reject) => {
      const objectStore = this.getObjectStore();
      if (!objectStore) {
        return reject("#4 store or db is undefined");
      }
      console.log(id);
      const keyRange = IDBKeyRange.only(id);
      const cursor = objectStore.openCursor(keyRange);
      console.log(cursor);

      cursor.onsuccess = () => {
        const cursorWithValue = cursor?.result;
        const value = cursorWithValue?.value;
        console.log(cursorWithValue);

        const updateTo = { ...value, ...newTask };

        if (cursorWithValue === null) {
          return reject("cursorWithValue is undefined");
        }

        const update = cursorWithValue.update(updateTo);
        update.onsuccess = () => {
          const allItems = this.getAllCategories();
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

export const categoryServices = new CategoryServices("categoriesdb", "categoriesStore");
export default CategoryServices;
