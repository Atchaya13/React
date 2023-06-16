import React, { useState } from "react";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import AddTask from "./Components/AddTask";
import { ITask, Status } from "./Interface/Interface";
function App() {
  const [allTask, setAllTask] = useState<ITask[]>([]);
  const addTask = (taskTitle: string) => {
    const newList = [
      ...allTask,
      { id: Date.now(), allTask: taskTitle, status: Status.NEW },
    ];
    setAllTask(newList);
  };
  const editTaskStatus = (currentStatus: Status, taskId: number) => {
    const newList = [...allTask];
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].id === taskId) {
        newList[i].status = currentStatus;
      }
    }
    setAllTask(newList);
  };
  const deleteAllTask=()=>{
    setAllTask([]);
  }
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home allTask={allTask} editTaskStatus={editTaskStatus} deleteAllTask={deleteAllTask}/>}
        ></Route>
        <Route path="/GetTask" element={<AddTask addTask={addTask} />}></Route>
      </Routes>
    </div>
  );
}
export default App;
