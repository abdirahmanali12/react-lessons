import React from "react";
import "./todo-style.css";
import Task from "./task";
import HeaderTask from "./header-task";
import Footer from "./footer";

function TodoApp() {
  return (
    <div className="todo-container">
      <div className="sub-container">
        <HeaderTask />
        <div className="task-container">
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default TodoApp;
