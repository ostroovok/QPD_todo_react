export class DbConnection{
    // private db: IDBDatabase;

    // async connect(dbName: string, storeName: string){
    //     if(this.db){
    //         return this.db;
    //     }

    //     const request = indexedDB.open(dbName, 1);

    //     return new Promise<IDBDatabase>((resolve, reject) => {
    //         request.onupgradeneeded = () => {
    //             this.db = request.result;
                
    //         };
    //         request.onsuccess = () => {};
    //         request.onerror = () => {};
    //     });
    // }
}