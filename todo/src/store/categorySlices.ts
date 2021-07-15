import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IListElement } from "../components/ItemList/IListElement";

const initialState = {
  list: [
    // { title: "Категория1", description: "Описание" },
    // { title: "Категория2", description: "Описание" },
    // { title: "Категория13", description: "Описание" },
    // { title: "Категория11", description: "Описание" },
    // { title: "Категория1", description: "Описание" },
    // { title: "Категория1", description: "Описание" },
    // { title: "Категория2", description: "Описание" },
    // { title: "Категория2", description: "Описание" },
    // { title: "Категория13", description: "Описание" },
    // { title: "Категория11", description: "Описание" },
    // { title: "Категория1", description: "Описание" },
    // { title: "Категория1", description: "Описание" },
    // { title: "Категория2", description: "Описание" },
    // { title: "Категория2", description: "Описание" },
  ] as IListElement[],
  fetchingState: "none",
  creatingState: "none",
  loadingState: "none",
  error: null,
};

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    // categoryFetching: (state) => {
    //   state.fetchingState = "requesting";
    // },
    // categoryFetched: (state, action) => {
    //   state.list = action.payload.list;
    //   state.fetchingState = "success";
    // },
    // categoryFetchingError: (state, action) => {
    //   state.fetchingState = "failed";
    //   state.error = action.payload.error;
    // },

    del(state, action: PayloadAction<number>) {
      state = state;
    },
    add(state, action: PayloadAction<number>) {
      state = state;
    },
    change(state, action: PayloadAction<number>) {
      state = state;
    },
  },
});

export const { del, add, change } = categorySlice.actions;
export default categorySlice.reducer;
