import React from "react";
import { MdOutlineClose } from "react-icons/md";

export default function Todo({ todo, deleteTodo, toggleTodoStatus }) {
  return (
    <div className={"Todo " + (todo.isComplete && "completed")}>
      <h4 className="todoIndex">{todo.index + 1}</h4>
      <p className="todoTask" onClick={() => toggleTodoStatus(todo.id)}>
        {todo.task}
      </p>
      <MdOutlineClose
        className="todoDeleteBtn"
        onClick={() => deleteTodo(todo.id)}
      />
    </div>
  );
}
