import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "../Interface/Interface";
interface TaskState {
  value: ITask[];
}
const initialState: TaskState = {
  value: [],
};
interface edit {
  id: number;
  taskTittle: string;
  isComplete: boolean;
}
export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.value.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action: PayloadAction<edit>) => {
      const newList = [...state.value];
      for (let i = 0; i < newList.length; i++) {
        if (newList[i].id === action.payload.id) {
          newList[i].taskTittle = action.payload.taskTittle;
        }
      }
      state.value = newList;
    },
  },
});
export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
