import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  id: number;
  title: string;
  description: string;
  category?: number;
}

const initialState: {
  list: Task[];
} = {
  list: [],
};

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    init(state, action: PayloadAction<Task[]>){
      state.list = action.payload;
    },
    delTask(state, action: PayloadAction<number>) {
      state.list = state.list.filter((t) => t.id !== action.payload);
    },
    addTask(
      state,
      action: PayloadAction<{
        title: string;
        description: string;
        category?: number;
      }>
    ) {
      const { description, title, category } = action.payload;
      state.list.push({
        id: state.list.length + 1,
        description,
        title,
        category,
      });
    },
    changeTask(state, action: PayloadAction<Task>) {
      const { description, id, title, category } = action.payload;

      const task = state.list.find((c) => c.id === id);
      if (task) {
        task.description = description;
        task.title = title;
        task.category = category;
      }
    },
  },
});

export const { delTask, addTask, changeTask, init } = tasksSlice.actions;
export default tasksSlice.reducer;
