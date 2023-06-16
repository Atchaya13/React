import React, { useState, useRef, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../Store/store";
import { deleteTask, editTask } from "../Store/task";
const Tasks = () => {
  const updatedTaskNameRef = useRef<HTMLInputElement>(null);

  const tasks = useSelector((state: RootState) => {
    return state.task.value.filter((item) => {
      return item.taskTittle.includes(state.search.value);
    });
  });

  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [editPos, setEditPos] = useState(-1);
  const [updatedTaskName, setupdatedTask] = useState("");
  const Delete = (id: number, taskName: string) => {
    dispatch(deleteTask(id));
  };
  const update = (id: number, taskName: string) => {
    setupdatedTask(taskName);
    setEditMode(true);
    setEditPos(id);
  };
  const edit = (id: number, taskStatus: boolean) => {
    const inputTask = updatedTaskNameRef.current?.value;
    if (!inputTask) {
      alert("Enter your task");
    } else {
      dispatch(
        editTask({ id: id, taskTittle: inputTask, isComplete: taskStatus })
      );
    }
    setEditMode(false);
  };
  return (
    <>
      <ul className="allRow">
        {tasks?.map((tasks) => (
          <li className="singleRow" key={tasks.id}>
            {editMode && tasks.id === editPos ? (
              <>
                <input
                  type="text"
                  value={updatedTaskName}
                  onChange={(event) => setupdatedTask(event.target.value)}
                  ref={updatedTaskNameRef}
                />
                <div>
                  <button
                    className="btn btn-success"
                    onClick={() => edit(tasks.id, tasks.isComplete)}
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
                {tasks.taskTittle}
                <div>
                  <i
                    className="fa fa-trash"
                    onClick={() => Delete(tasks.id, tasks.taskTittle)}
                  ></i>
                  &nbsp;
                  <i
                    className="fas fa-edit fa-2x"
                    onClick={() => update(tasks.id, tasks.taskTittle)}
                  ></i>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
export default Tasks;
