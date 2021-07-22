import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Category {
  id: number;
  title: string;
  description: string;
}

const initialState: {
  list: Category[];
} = {
  list: [],
};

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    init(state, action: PayloadAction<Category[]>){
      state.list = action.payload;
    }, 
    delCategory(state, action: PayloadAction<number>) {
      state.list = state.list.filter((c) => c.id !== action.payload);
    },
    addCategory(
      state,
      action: PayloadAction<{ title: string; description: string, id: number }>
    ) {
      const { description, title, id } = action.payload;
      state.list.push({ id, description, title });
    },
    changeCategory(state, action: PayloadAction<Category>) {
      const { description, id, title } = action.payload;

      const category = state.list.find((c) => c.id === id);
      if (category) {
        category.description = description;
        category.title = title;
      }
    },
  },
});

export const { delCategory, addCategory, changeCategory, init } =
  categorySlice.actions;
export default categorySlice.reducer;
