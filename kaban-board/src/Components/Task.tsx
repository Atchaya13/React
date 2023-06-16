import React from "react";
import { TaskProps, Status } from "../Interface/Interface";
import "./TaskStyle.scss";
const Task = (props: TaskProps) => {
  const editStatus = (status: Status, taskId: number) => {
    props.editTaskStatus(status, taskId);
  };
  return (
    <>
      <div className="columns">
        <div className="column" style={{ backgroundColor: "#aaa" }}>
          New
          <br />
          {props.allTask.map((item) => (
            <ul>
              {item.status === Status.NEW && (
                <>
                  <li key={item.id}>
                    <div className="taskCard">
                      <p className="taskText"> {item.allTask}</p>
                      <div className="buttonBox">
                        <button
                          className="btn btn-success"
                          onClick={() => editStatus(Status.ACTIVE, item.id)}
                        >
                          Active
                        </button>
                        <button
                          className="btn btn-warning"
                          onClick={() => editStatus(Status.RESOLVED, item.id)}
                        >
                          Resolved
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => editStatus(Status.CLOSED, item.id)}
                        >
                          Closed
                        </button>
                      </div>
                    </div>
                  </li>
                </>
              )}
            </ul>
          ))}
        </div>
        <div className="column" style={{ backgroundColor: "#bbb" }}>
          Active
          <br />
          <br />
          {props.allTask.map((item) => (
            <ul>
              {item.status === Status.ACTIVE && (
                <>
                  <li key={item.id}>
                    <div className="taskCard">
                      <p className="taskText"> {item.allTask}</p>
                      <div className="buttonBox">
                        <button
                          className="btn btn-primary"
                          onClick={() => editStatus(Status.NEW, item.id)}
                        >
                          New
                        </button>
                        <button
                          className="btn btn-warning"
                          onClick={() => editStatus(Status.RESOLVED, item.id)}
                        >
                          Resolved
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => editStatus(Status.CLOSED, item.id)}
                        >
                          Closed
                        </button>
                      </div>
                    </div>
                  </li>
                </>
              )}
            </ul>
          ))}
        </div>
        <div className="column" style={{ backgroundColor: "#ccc" }}>
          Resolved
          <br />
          {props.allTask.map((item) => (
            <ul>
              {item.status === Status.RESOLVED && (
                <>
                  <li key={item.id}>
                    <div className="taskCard">
                      <p className="taskText"> {item.allTask}</p>
                      <div className="buttonBox">
                        <button
                          className="btn btn-primary"
                          onClick={() => editStatus(Status.NEW, item.id)}
                        >
                          New
                        </button>
                        <button
                          className="btn btn-success"
                          onClick={() => editStatus(Status.ACTIVE, item.id)}
                        >
                          Active
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => editStatus(Status.CLOSED, item.id)}
                        >
                          Closed
                        </button>
                      </div>
                    </div>
                  </li>
                </>
              )}
            </ul>
          ))}
        </div>
        <div className="column" style={{ backgroundColor: "#ddd" }}>
          Closed
          <br />
          {props.allTask.map((item) => (
            <ul>
              {item.status === Status.CLOSED && (
                <>
                  <li key={item.id}>
                    <div className="taskCard">
                      <p className="taskText"> {item.allTask}</p>
                      <div className="buttonBox">
                        <button
                          className="btn btn-primary"
                          onClick={() => editStatus(Status.NEW, item.id)}
                        >
                          New
                        </button>
                        <button
                          className="btn btn-success"
                          onClick={() => editStatus(Status.ACTIVE, item.id)}
                        >
                          Active
                        </button>
                        <button
                          className="btn btn-warning"
                          onClick={() => editStatus(Status.RESOLVED, item.id)}
                        >
                          Resolved
                        </button>
                      </div>
                    </div>
                  </li>
                </>
              )}
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};
export default Task;
