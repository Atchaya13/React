import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { AddTaskProps } from "../Interface/Interface";
import "./AddTaskStyle.scss";
const AddTask = (props: AddTaskProps) => {
  const taskName = useRef<HTMLInputElement>(null);
  const addNewTask = () => {
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
      <div className="container">
        <br />
        <div className="box">
          <h2 style={{ color: "skyblue", textAlign: "center" }}>Add Task</h2>
          <div>
            <input
              type="text"
              placeholder="Add Task here"
              className="form-control"
              ref={taskName}
            ></input>
          </div>
          <br />
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "5rem",
            }}
          >
            <button className=" btn btn-primary" onClick={addNewTask}>
              submit
            </button>

            <Link
              to="/"
              className="btn btn-warning"
              style={{ marginLeft: "1rem" }}
            >
              Back
            </Link>
          </div>
        </div>
        {/* <div style={{ display: "flex" }}>
          <div>
            <input
              type="text"
              placeholder="Add Task here"
              className="form-control"
              ref={taskName}
            ></input>
          </div>
          <div>
            <button className=" btn btn-primary" onClick={addNewTask}>
              submit
            </button>
            <Link to="/" className="btn btn-warning">
              Back
            </Link>
          </div>
        </div> */}
      </div>
    </>
  );
};
export default AddTask;
