import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IListElement } from "../components/ItemList/IListElement";

const initialState = {
  list: [] as IListElement[],
};

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    del(state, action: PayloadAction<number>) {
      state = state;
    },
    addCategory(state, action: PayloadAction<IListElement>) {
      state.list.push(action.payload);
    },
    change(state, action: PayloadAction<number>) {
      state = state;
    },
  },
});

export const { del, addCategory, change } = categorySlice.actions;
export default categorySlice.reducer;
