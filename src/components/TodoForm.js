import React from "react";
import { useRef } from "react";

export default function TodoForm({ addTodo }) {
  const todo = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(todo.current.value.toString());
    todo.current.value = "";
  };

  return (
    <form className="TodoForm">
      <input type="text" placeholder="Add a Todo" ref={todo} name="todo" />
      <button className="submitBtn" type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
}
