import { taskReducer } from "./Reducer";
import { searchReducer } from "./Reducer/SearchReducer";
import { combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { legacy_createStore as createStore } from "redux";
import { ITask } from "./type";
const rootReducer = combineReducers({
  todo: taskReducer,
  search: searchReducer,
});
// const todoInitialState:ITask[]=[{id:1,taskTittle:"Wake Up",isComplete:false}];
// const initialState={
//   todo:todoInitialState,
//   search:"a"
// }
const store = createStore(
  rootReducer,
  //initialState,
  composeWithDevTools(applyMiddleware())
);
//console.log(store.getState());
export default store;
