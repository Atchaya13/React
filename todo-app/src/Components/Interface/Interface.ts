import React from "react";
export interface ITask {
  taskName: string;
  isComplete: boolean;
}
export interface IAddTask {
  addTask: (taskName: string) => void;
}
export interface ITasks {
  task: ITask[];
  delete:(index:number,taskName:string)=>void;
  edit:(index: number, oldtask: ITask, updatedValue: string)=>void;
}
export interface ISingleTask {
  task: ITask;
  index: number;
  delete:(index:number,taskName:string)=>void;
  edit:(index: number, oldtask: ITask, updatedValue: string)=>void;
}
export interface ISearch{
    search:(searchTerm:string)=>void;
}
