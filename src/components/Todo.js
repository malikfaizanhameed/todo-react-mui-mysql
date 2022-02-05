import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import EditIcon from "@mui/icons-material/Edit";
import UpdateTodo from "./UpdateTodo";
import "./Todo.css";

const Todo = ({ todo, editTodo, deleteTodo, completeTodo }) => {
  const [edit, setEdit] = useState({
    key: null,
    text: "",
  });

  if (edit.key) {
    return (
      <UpdateTodo editTodo={editTodo} todoId={edit.key} setEdit={setEdit} />
    );
  }
  return (
    <div
      className="todo__container"
      style={{
        backgroundColor: todo.isComplete ? "green" : "",
      }}
    >
      <div
        className="todo__text"
        style={{
          color: todo.isComplete ? "black" : "",
        }}
      >
        {todo.text}
      </div>
      <div className="todo__icons">
        <EditIcon
          className="edit__icon"
          onClick={() => setEdit({ key: todo.key })}
        />
        <DeleteIcon
          className="delete__icon"
          onClick={() => deleteTodo(todo.key)}
        />
        <DoneOutlineIcon
          className="done__icon"
          onClick={() => completeTodo(todo.key)}
        />
      </div>
    </div>
  );
};

export default Todo;
