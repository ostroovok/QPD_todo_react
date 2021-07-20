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
  list: [
    { id: 1, title: "task", description: "description1", category: 1 },
    { id: 2, title: "task", description: "description2", category: 2 },
    { id: 3, title: "task", description: "description3", category: 3 },
  ],
};

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
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
      state.list.push({ id: state.list.length, description, title, category });
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

export const { delTask, addTask, changeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
