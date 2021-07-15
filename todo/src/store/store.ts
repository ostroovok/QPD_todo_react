import { combineReducers, configureStore } from "@reduxjs/toolkit";
import * as categorySlices from './categorySlices'
import tasksSlices from "./tasksSlices";


export const setStore = configureStore({
    reducer: {
        todos: tasksSlices
    }
});

export type RootState = ReturnType<typeof tasksSlices>