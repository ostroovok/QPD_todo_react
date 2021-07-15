import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IListElement } from "../components/ItemList/IListElement";

const initialState = {
  tasks: [
  { title: "Задача21", description: "Описание", attachment: "Категория1" },
  { title: "Задача2", description: "Описание", attachment: "" },
  { title: "Задача4", description: "Описание", attachment: "Категория1" },
  { title: "Задача12", description: "Описание", attachment: "" },
  { title: "Задача9", description: "Описание", attachment: "" },
] as IListElement[],
  fetchingState: "none",
  creatingState: "none",
  loadingState: "none",
  error: null,
};

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    // tasksFetching: (state) => {
    //   state.fetchingState = "requesting";
    // },
    // tasksFetched: (state, action) => {
    //   state.list = action.payload.list;
    //   state.fetchingState = "success";
    // },
    // tasksFetchingError: (state, action) => {
    //   state.fetchingState = "failed";
    //   state.error = action.payload.error;
    // },
    del(state, action: PayloadAction<IListElement>) {
      let elementToDelete = action.payload;
      state.tasks = state.tasks.filter((currentElement) => {
        if (
          elementToDelete.title !== currentElement.title ||
          elementToDelete.description !== currentElement.description ||
          elementToDelete.attachment !== currentElement.attachment
        ) {
          return currentElement;
        }
      });
    },
    add(state, action: PayloadAction<IListElement>) {
      state.tasks.push(action.payload);
    },
    change(state, action: PayloadAction<number>) {
      state = state;
    },
  },
});

export const { del, add, change } = tasksSlice.actions;
export default tasksSlice.reducer;

// { title: "Задача21", description: "Описание", attachment: "Категория1" },
// { title: "Задача2", description: "Описание", attachment: "" },
// { title: "Задача4", description: "Описание", attachment: "Категория1" },
// { title: "Задача12", description: "Описание", attachment: "" },
// { title: "Задача9", description: "Описание", attachment: "" },
