import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface CounterState {
  value: string;
}
const initialState: CounterState = {
  value: "",
};
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchTask: (state, action: PayloadAction<string>) => {
        state.value=action.payload
    },
  },
});
export const { searchTask } = searchSlice.actions;
export default searchSlice.reducer;
