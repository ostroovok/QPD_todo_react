import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Category {
  id: number;
  title: string;
  description: string;
}

const initialState: {
  list: Category[];
} = {
  list: [
    { id: 1, title: "category1", description: "description1" },
    { id: 2, title: "category2", description: "description2" },
    { id: 3, title: "category3", description: "description3" },
  ],
};

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    delCategory(state, action: PayloadAction<number>) {
      state.list = state.list.filter((c) => c.id !== action.payload);
    },
    addCategory(
      state,
      action: PayloadAction<{ title: string; description: string }>
    ) {
      const { description, title } = action.payload;
      state.list.push({ id: state.list.length + 1, description, title });
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

export const { delCategory, addCategory, changeCategory } =
  categorySlice.actions;
export default categorySlice.reducer;
