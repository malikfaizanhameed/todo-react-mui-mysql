import React, { useState } from "react";
import GetTodo from "./GetTodo";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    const newTodo = {
      key: Math.floor(Math.random() * 10000),
      text: todoText,
      isComplete: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const editTodo = (key, newText) => {
    const newTodo = {
      key: key,
      text: newText,
    };
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.key === key ? newTodo : todo))
    );
  };

  const deleteTodo = (key) => {
    const newTodos = todos.filter((todo) => todo.key !== key);
    setTodos(newTodos);
  };

  const completeTodo = (key) => {
    const newTodos = todos.map((todo) => {
      if (todo.key === key) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div>
      <GetTodo addTodo={addTodo} />
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.key}
            todo={todo}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
