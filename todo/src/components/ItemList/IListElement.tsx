export interface IListElement {
    title: string;
    description?: string;
    attachment?: string; // впоследствии - объект !
    type?: string;
    // type: string (нужен ли?)
}