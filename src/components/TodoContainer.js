import React from "react";
import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export default function TodoContainer() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    const newTodo = {
      id: Date.now(),
      task: task,
      isComplete: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (todoId) => {
    setTodos([...todos].filter((todo) => todo.id !== todoId));
  };

  const toggleTodoStatus = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      })
    );
  };

  return (
    <div className="TodoContainer">
      <h1 className="todoHeader">Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <div className="todoHolder">
        {todos.map((todo, index) => {
          return (
            <Todo
              key={todo.id}
              todo={{ ...todo, index }}
              deleteTodo={deleteTodo}
              toggleTodoStatus={toggleTodoStatus}
            />
          );
        })}
      </div>
    </div>
  );
}
