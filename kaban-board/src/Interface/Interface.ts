export enum Status {
  NEW = "NEW",
  ACTIVE = "ACTIVE",
  RESOLVED = "RESOLVED",
  CLOSED = "CLOSED",
}
export interface ITask {
  id: number;
  allTask: String;
  status: Status;
}
export interface HomeProps {
  allTask: ITask[];
  editTaskStatus: (currentStatus: Status, taskId: number) => void;
  deleteAllTask: () => void
}
export interface AddTaskProps {
  addTask: (taskTitle: string) => void;
}
export interface TaskProps {
  allTask: ITask[];
  editTaskStatus: (currentStatus: Status, taskId: number) => void;
}
