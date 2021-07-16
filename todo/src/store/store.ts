import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categorySlices from "./categorySlices";
import tasksSlices from "./tasksSlices";

const rootReducer = combineReducers({
  tasks: tasksSlices,
  categories: categorySlices,
});

export const store = configureStore({
  reducer: {
    todos: rootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default rootReducer;
