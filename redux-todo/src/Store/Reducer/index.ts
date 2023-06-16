import { ITask } from "../type";
import { AddTaskAction, ActionType } from "../Action";
import {actionTypes} from '../Action/index';
const initialState = <ITask[]>[];
export const taskReducer = (
   state = initialState,
  //state:ITask[]=[],
  action: actionTypes
): ITask[] => {
  switch (action.type) {
    case ActionType.ADDTASK:
      return [...state, action.payload];
    case ActionType.DELETETASK:
      return state.filter((task) => task.id != action.payload);
    case ActionType.EDITTASK:
      const newArr = [...state];
      for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].id === action.payload.id) {
          newArr[i].id = action.payload.id;
          newArr[i].taskTittle = action.payload.taskTittle;
          newArr[i].isComplete = action.payload.isComplete;
        }
      }
      return newArr;
    // for(let i=0;i<state.length;i++){
    //   if(state[i].id===action.payload.id){
    //     state[i].taskTittle=action.payload.taskTittle;
    //   }
    // }

    // state.map((i)=>{
    //   if(i.id==action.payload.id){
    //     return i.id=action.payload.id,i.taskTittle=action.payload.taskTittle,i.isComplete=action.payload.isComplete
    //   }
    //   return i;
    // })
    //return state;
    default:
      return state;
  }
};
