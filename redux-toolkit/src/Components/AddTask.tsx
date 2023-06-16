import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Store/task";
export const AddTask = () => {
  const taskName = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const AddNewTask = () => {
    const inputTask = taskName.current?.value;
    if (!inputTask) {
      alert("Enter your task");
    } else {
      dispatch(addTask({id:Date.now(),taskTittle:inputTask,isComplete:false}));
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
