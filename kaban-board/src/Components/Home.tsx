import React from "react";
import { Link } from "react-router-dom";
import { HomeProps } from "../Interface/Interface";
// import Tasks from "./Tasks";
import Task from "./Task";
const Home = (props: HomeProps) => {
  const deleteAllTask = () => {
    props.deleteAllTask();
  };
  return (
    <>
      <div className="container">
        <br/>
        <Link to="/GetTask" className="btn btn-primary" style={{marginBottom:"2rem"}}>
          Add Item
        </Link>
        <button className="btn btn-danger" onClick={deleteAllTask} style={{marginLeft:"2rem",marginBottom:"2rem"}}>
          Delete All
        </button>
       
        {/* <Tasks allTask={props.allTask} editTaskStatus={props.editTaskStatus} /> */}
        <Task allTask={props.allTask} editTaskStatus={props.editTaskStatus} />
      </div>
    </>
  );
};
export default Home;
