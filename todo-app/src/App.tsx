import React, { useState } from "react";
import "./TodoAppStyle.scss";
import Search from "./Components/Search";
import { AddTask } from "./Components/AddTask";
import { ITask } from "./Components/Interface/Interface";
import Tasks from "./Components/Tasks";
function App() {
  const [task, setTask] = useState<ITask[]>([]);
  const [currentValue, setCurrentValue] = useState<ITask[]>([]);

  const AddNewTask = (taskName: string) => {
    let flagDuplicateTask = false;
    for (let i: number = 0; i <= task.length - 1; i++) {
      if (task[i].taskName === taskName) {
        flagDuplicateTask = true;
      }
    }
    if (flagDuplicateTask) {
      alert("The task already present");
    } else {
      const newList = [
        ...currentValue,
        { taskName: taskName, isComplete: false },
      ];
      setTask(newList);
      setCurrentValue(newList);
    }
  };
  const Delete = (index: number, taskName: string) => {
    const newTask = [...task];
    newTask.splice(index, 1);
    setTask(newTask);
    for (let i = 0; i < currentValue.length; i++) {
      if (taskName === currentValue[i].taskName) {
        const newTasks = [...currentValue];
        newTasks.splice(i, 1);
        setCurrentValue(newTasks);
      }
    }
  };
  const Searching = (searchTerm: string) => {
    if (searchTerm.length >= 1) {
      console.log("current");
      console.log(currentValue);
      let fetchData = currentValue.filter((todo) =>
        todo.taskName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setTask(fetchData);
    } else {
      setTask(currentValue);
    }
  };
  const Edit = (index: number, oldtask: ITask, updatedValue: string) => {
    const newTask = [...task];
    newTask[index].taskName = updatedValue;
    newTask[index].isComplete = oldtask.isComplete;
    setTask(newTask);
    for (let i = 0; i < currentValue.length; i++) {
      if (oldtask.taskName === currentValue[i].taskName) {
        const newTasks = [...currentValue];
        newTasks[i].taskName = updatedValue;
        newTasks[i].isComplete = oldtask.isComplete;
        setCurrentValue(newTasks);
      }
    }
  };
  return (
    <div className="App">
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col box1">
              <div className="card box" id="list1">
                <div className="card-body py-4 px-4 px-md-5">
                  <p className="h1 text-center   heading">TODO LIST</p>
                  <div>
                    <div className="searchDiv">
                      <Search search={Searching} />
                    </div>
                    <div>
                      <AddTask addTask={AddNewTask} />
                    </div>
                  </div>
                  <Tasks task={task} delete={Delete} edit={Edit} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
