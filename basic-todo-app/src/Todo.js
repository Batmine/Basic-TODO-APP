import React from "react";
import "./Todo.css";

function Todo(props) {
  return (
    // the props.text, gonna take the text in the App.js
    <div className="todo">
      <h2>{props.text}</h2>
    </div>
  );
}

export default Todo;
