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
    console.log(todos);
  };
  return (
    <div>
      <GetTodo addTodo={addTodo} />
      {todos.map((todo) => {
        return <Todo key={todo.key} todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
