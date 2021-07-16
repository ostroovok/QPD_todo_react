import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IListElement } from "../components/ItemList/IListElement";

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState: {
    list: [
      { title: "Задача21", description: "Описание", attachment: "Категория1" },
      { title: "Задача2", description: "Описание", attachment: "" },
      { title: "Задача4", description: "Описание", attachment: "Категория1" },
      { title: "Задача12", description: "Описание", attachment: "" },
      { title: "Задача9", description: "Описание", attachment: "" },
    ] as IListElement[],
  },
  reducers: {
    del(state, action: PayloadAction<IListElement>) {
      let elementToDelete = action.payload;
      state.list = state.list.filter((currentElement) => {
        if (
          elementToDelete.title !== currentElement.title ||
          elementToDelete.description !== currentElement.description ||
          elementToDelete.attachment !== currentElement.attachment
        ) {
          return currentElement;
        }
      });
    },
    addTask(state, action: PayloadAction<IListElement>) {
      console.log(1);
      
      state.list.push(action.payload);
    },
    change(state, action: PayloadAction<number>) {
      state = state;
    },
  },
});

export const { del, addTask, change } = tasksSlice.actions;
export default tasksSlice.reducer;
