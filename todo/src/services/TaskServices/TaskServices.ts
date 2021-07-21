type Task = {
  title: string;
  categoryId?: number;
  description: string;
};

class TaskServices {
  db: IDBDatabase;
  request: IDBOpenDBRequest;
  storeName = "taskStore";

  constructor() {
    this.request = window.indexedDB.open("taskdb");

    this.request.onupgradeneeded = (event: any) => {
      this.db = event.target.result;
      this.db.createObjectStore(this.storeName, { keyPath: "id" , autoIncrement: true});
    };
    this.request.onerror = (error) => {
      console.log("Initialize error", {error});
    };
  }

  initialize(){
    
  }
  

  getObjectStore(){
    console.log(this.db);
    const transaction = this.db.transaction(this.storeName, "readwrite");
    transaction.onerror = () => {
      console.log("GetObjectStore error", transaction.error);
    };
    return transaction.objectStore(this.storeName);
  };

  getAllTasks = () => {
    const objectStore = this.getObjectStore();

    const cursor = objectStore.openCursor();
    const tasksList = [];

    cursor.onsuccess = (event: any) => {
      const innerCursor = event.target.result;
      if (innerCursor) {
        tasksList.push(innerCursor.value);
        innerCursor.continue();
      }
    };
  };

  insert(task: Task) {
    const objectStore = this.getObjectStore();
    const addRequest = objectStore.add(task);
    addRequest.onsuccess = () => {
      //...
    };
    addRequest.onerror = (error) => {
      console.log("Insert error",{error});
    };
  }

  delete(id: number) {
    const objectStore = this.getObjectStore();
    const delRequest = objectStore.delete(id);
    delRequest.onsuccess = () => {
      //...
    };
    delRequest.onerror = (error) => {
      console.log("Delete error",{error});
    };
  }

  update(id: number, newTask: Task) {
    const objectStore = this.getObjectStore();
    const keyRange = IDBKeyRange.only(id);
    const cursor = objectStore.openCursor(keyRange);

    cursor.onsuccess = () => {
      const cursorWithValue = cursor?.result;
      const value  = cursorWithValue?.value;

      const updateTo = { ...value, ...newTask };

      if(cursorWithValue === null){
        return;
      }

      const update = cursorWithValue.update(updateTo);

      update.onsuccess = () => {
        //...
      };
      update.onerror = (error) => {
        console.log({ error });
      };
    };
    cursor.onerror = (error) => {
      console.log("Check error", { error });
    };
  }
}

export default TaskServices;
