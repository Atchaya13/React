import React from "react";
import { TaskProps, Status } from "../Interface/Interface";
import "./TasksStyle.scss";
const Tasks = (props: TaskProps) => {
  const editStatus = (status: Status, taskId: number) => {
    props.editTaskStatus(status, taskId);
  };
  return (
    <>
      {/* <div className="row">
        <div className="column">
          {props.allTask.map((item) => (
            <li key={item.id} style={{ listStyleType: "none" }}>
              {item.status === Status.NEW && (
                <>
                  <br />
                  <h6>{item.status}</h6>
                  <p className="taskText">{item.allTask}</p>
                  <br />
                  <div className="buttonsBox">
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
                </>
              )}
            </li>
          ))}
        </div>
        <div className="column">2
           {props.allTask.map((item) => (
            <li key={item.id} style={{ listStyleType: "none" }}>
              {item.status === Status.ACTIVE && (
                <>
                  <br />
                  <h6>{item.status}</h6>
                  <p className="taskText">{item.allTask}</p>
                  <br />
                  <div className="buttonsBox">
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
                </>
              )}
            </li>
          ))} 
        </div>
        <div className="column">3
           {props.allTask.map((item)=>(
                 <li key={item.id} style={{ listStyleType: "none" }}>
                 {item.status === Status.RESOLVED && (
                   <>
                     <br />
                     <h6>{item.status}</h6>
                     <p className="taskText">{item.allTask}</p>
                     <br />
                     <div className="buttonsBox">
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
                   </>
                 )}
               </li>
            ))} 
        </div>
        <div className="column">4
        {props.allTask.map((item)=>(
             <li key={item.id} style={{ listStyleType: "none" }}>
                 {item.status === Status.CLOSED && (
                      <>
                        <br />
                        <h6>{item.status}</h6>
                        <p className="taskText">{item.allTask}</p>
                        <br />
                        <div className="buttonsBox">
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
                      </>
                    )}
             </li>
         ))} 
        </div>
      </div> */}
      {/* <div className="row">
        <div className="column">
          <h2>Column 1</h2>
          <p>Some text..</p>
        </div>
        <div className="column">
          <h2>Column 2</h2>
          <p>Some text..</p>
        </div>
        <div className="column">
          <h2>Column 3</h2>
          <p>Some text..</p>
        </div>
        <div className="column">
          <h2>Column 4</h2>
          <p>Some text..</p>
        </div>
      </div> */}

      {/* <ul>
        {props.allTask.map((item) => (
          <li key={item.id} style={{ listStyleType: "none" }}>
            <div className="gridContainer">
              <div className="row">
                <div
                  className="col-sm-3 taskCard"
                  //id={item.status === Status.NEW ? "taskCard" : "item"}
                  id="taskCard"
                >
                  <li key={item.id} style={{ listStyleType: "none" }}>
                    {item.status === Status.NEW && (
                      <>
                        <br />
                        <h6>{item.status}</h6>
                        <p className="taskText">{item.allTask}</p>
                        <br />
                        <div className="buttonsBox">
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
                      </>
                    )}
                  </li>
                </div>
                <div
                  className="col-sm-3 taskCard"
                  //id={item.status === Status.ACTIVE ? "taskCard" : "item"}
                  id="taskCard"
                >
                  <li key={item.id} style={{ listStyleType: "none" }}>
                    {item.status === Status.ACTIVE && (
                      <>
                        <br />
                        <h6>{item.status}</h6>
                        <p className="taskText">{item.allTask}</p>
                        <br />
                        <div className="buttonsBox">
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
                      </>
                    )}
                  </li>
                </div>
                <div
                  className="col-sm-3 taskCard"
                  //id={item.status === Status.RESOLVED ? "taskCard" : "item"}
                  id="taskCard"
                >
                  <li key={item.id} style={{ listStyleType: "none" }}>
                    {item.status === Status.RESOLVED && (
                      <>
                        <br />
                        <h6>{item.status}</h6>
                        <p className="taskText">{item.allTask}</p>
                        <br />
                        <div className="buttonsBox">
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
                      </>
                    )}
                  </li>
                </div>
                <div
                  className="col-sm-3 taskCard"
                  //id={item.status === Status.CLOSED ? "taskCard" : "item"}
                  id="taskCard"
                >
                  <li key={item.id} style={{ listStyleType: "none" }}>
                    {item.status === Status.CLOSED && (
                      <>
                        <br />
                        <h6>{item.status}</h6>
                        <p className="taskText">{item.allTask}</p>
                        <br />
                        <div className="buttonsBox">
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
                      </>
                    )}
                  </li>
                </div>
              </div>
            </div>

            <br />
          </li>
        ))}
      </ul> */}

      <ul>
        {props.allTask.map((item) => (
          <li key={item.id} style={{ listStyleType: "none" }}>
            {/* <div id="grid">
              <div id={item.status === Status.NEW ? "item1" : "item"}>
                {item.status === Status.NEW && (
                  <>
                    <br />
                    <h6>{item.status}</h6>
                    <p className="taskText">{item.allTask}</p>
                    <br />
                    <div className="buttonsBox">
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
                  </>
                )}
              </div>
              <div id={item.status === Status.ACTIVE ? "item1" : "item"}>
                {item.status === Status.ACTIVE && (
                  <>
                    <br />
                    <h6>{item.status}</h6>
                    <p className="taskText">{item.allTask}</p>
                    <br />
                    <div className="buttonsBox">
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
                  </>
                )}
              </div>
              <div id={item.status === Status.RESOLVED ? "item1" : "item"}>
                {item.status === Status.RESOLVED && (
                  <>
                    <br />
                    <h6>{item.status}</h6>
                    <p className="taskText">{item.allTask}</p>
                    <br />
                    <div className="buttonsBox">
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
                  </>
                )}
              </div>
              <div id={item.status === Status.CLOSED ? "item1" : "item"}>
                {item.status === Status.CLOSED && (
                  <>
                    <br />
                    <h6>{item.status}</h6>
                    <p className="taskText">{item.allTask}</p>
                    <br />
                    <div className="buttonsBox">
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
                  </>
                )}
              </div>
            </div> */}

            <div className="gridContainer">
              <div className="row">
                <div
                  className="col-sm-3 taskCard"
                  id={item.status === Status.NEW ? "taskCard" : "item"}
                >
                  {item.status === Status.NEW && (
                    <>
                      <br />
                      <h6>{item.status}</h6>
                      <p className="taskText">{item.allTask}</p>
                      <br />
                      <div className="buttonsBox">
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
                    </>
                  )}
                </div>
                <div
                  className="col-sm-3 taskCard"
                  id={item.status === Status.ACTIVE ? "taskCard" : "item"}
                >
                  {item.status === Status.ACTIVE && (
                    <>
                      <br />
                      <h6>{item.status}</h6>
                      <p className="taskText">{item.allTask}</p>
                      <br />
                      <div className="buttonsBox">
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
                    </>
                  )}
                </div>
                <div
                  className="col-sm-3 taskCard"
                  id={item.status === Status.RESOLVED ? "taskCard" : "item"}
                >
                  {item.status === Status.RESOLVED && (
                    <>
                      <br />
                      <h6>{item.status}</h6>
                      <p className="taskText">{item.allTask}</p>
                      <br />
                      <div className="buttonsBox">
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
                    </>
                  )}
                </div>
                <div
                  className="col-sm-3 taskCard"
                  id={item.status === Status.CLOSED ? "taskCard" : "item"}
                >
                  {item.status === Status.CLOSED && (
                    <>
                      <br />
                      <h6>{item.status}</h6>
                      <p className="taskText">{item.allTask}</p>
                      <br />
                      <div className="buttonsBox">
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
                    </>
                  )}
                </div>
              </div>
            </div>

            <br />
          </li>
        ))}
      </ul>
    </>
  );
};
export default Tasks;
