import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState: {
    list: []
  },
  reducers: {
    delTask(state, action: PayloadAction<any>) {  //сделать по id
      // let elementToDelete = action.payload;
      // state.list = state.list.filter((currentElement) => {
      //   // if (
      //   //   elementToDelete.itemTitle.props.name !== currentElement.itemTitle.props.name ||
      //   //   elementToDelete.description !== currentElement.description 
      //   // ) {
      //   //   return currentElement;
      //   // }
      // });
    },
    addTask(state, action: PayloadAction<any>) {
    },
    change(state, action: PayloadAction<number>) {
      
    },
  },
});

export const { delTask, addTask, change } = tasksSlice.actions;
export default tasksSlice.reducer;
