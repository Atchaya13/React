import React, { useRef} from "react";
import { IAddTask } from "./Interface/Interface";
export const AddTask = (props: IAddTask) => {
  const taskName = useRef<HTMLInputElement>(null);
  const AddNewTask = () => {
    const inputTask = taskName.current?.value;
    if (!inputTask) {
      alert("Enter your task");
    } else {
      props.addTask(inputTask);
      if (taskName.current?.value) {
        taskName.current.value = "";
      }
    }
  };

  return (
    <>
      <div className="card-body">
        <div className="d-flex flex-row align-items-center">
          <input
            type="text"
            className="form-control"
            placeholder="Add new task..."
            ref={taskName}
          ></input>
          <span id="my-span"></span>
          <div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={AddNewTask}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
