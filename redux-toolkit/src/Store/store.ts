import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./task";
import searchReducer from "./search";
export const store = configureStore({
  reducer: {
    task: taskReducer,
    search: searchReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
