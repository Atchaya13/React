import React from "react";
import { ITasks } from "./Interface/Interface";
import Task from "./Task";
const Tasks = (props: ITasks) => {

  return (
    <>
      <ul className="allRow">
        {props.task.map((tasks, index) => (
          <li className="singleRow" key={index}>
            <Task task={tasks} index={index} delete={props.delete} edit={props.edit}/>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Tasks;
