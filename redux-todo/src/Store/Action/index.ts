import { ITask } from "../type";
export enum ActionType {
  ADDTASK = "ADDTASK",
  DELETETASK = "DELETETASK",
  EDITTASK = "EDITTASK",
}
export interface AddTaskAction {
  type: ActionType.ADDTASK|ActionType.EDITTASK;
  payload: ITask;
}
export interface DeleteTaskAction {
  type: ActionType.DELETETASK;
  payload: number;
}
export type actionTypes=AddTaskAction|DeleteTaskAction;
export const addTask = (text: string): AddTaskAction => ({
  type: ActionType.ADDTASK,
  payload: { id: Date.now(), taskTittle: text, isComplete: false },
});
export const deleteTask = (id: number):DeleteTaskAction => ({
  type: ActionType.DELETETASK,
  payload: id,
});
export const editTask = (
  id: number,
  taskTittle: string,
  isComplete: boolean
):AddTaskAction => ({
  type: ActionType.EDITTASK,
  payload: { id: id, taskTittle: taskTittle, isComplete: isComplete },
});

