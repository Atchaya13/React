import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./AppStyle.scss";
import Search from "./Components/Search";
import { AddTask } from "./Components/AddTask";
import Tasks from "./Components/Tasks";

function App() {
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
                      <Search />
                    </div>
                    <div>
                      <AddTask />
                    </div>
                  </div>
                  <Tasks />
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
