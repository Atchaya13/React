import React, { useState, useRef } from "react";
import { ISingleTask, ITask } from "./Interface/Interface";
const Task = (props: ISingleTask) => {
  const [editMode, setEditMode] = useState(false);
  const [updatedTask, setupdatedTask] = useState("");
  const updatedTaskName = useRef<HTMLInputElement>(null);
  const Delete = (index: number, taskName: string) => {
    props.delete(index, taskName);
  };
  const Update = (index: number, taskName: string) => {
    setupdatedTask(props.task.taskName);
    setEditMode(true);
  };
  const Edit = (index: number, task: ITask) => {
    const inputTask = updatedTaskName.current?.value;
    if (!inputTask) {
      alert("Enter your task");
    } else {
        props.edit(index,task,inputTask)
    }
    setEditMode(false);
  };
  return (
    <>
      {editMode ? (
        <>
          <input
            type="text"
            value={updatedTask}
            onChange={(event) => setupdatedTask(event.target.value)}
            ref={updatedTaskName}
          />
          <div>
            <button
              className="btn btn-success"
              onClick={() => Edit(props.index, props.task)}
            >
              update
            </button>
            &nbsp;
            <button
              className="btn btn-warning"
              onClick={() => setEditMode(false)}
            >
              cancel
            </button>
          </div>
        </>
      ) : (
        <>
          {props.task.taskName}
          <div>
            <i
              className="fa fa-trash"
              onClick={() => Delete(props.index, props.task.taskName)}
            ></i>
            &nbsp;
            <i
              className="fas fa-edit fa-2x"
              onClick={() => Update(props.index, props.task.taskName)}
            ></i>
          </div>
        </>
      )}
    </>
  );
};
export default Task;
