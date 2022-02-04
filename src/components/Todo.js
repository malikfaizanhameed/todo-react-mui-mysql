import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import EditIcon from "@mui/icons-material/Edit";
import "./Todo.css";

const Todo = ({ todo }) => {
  return (
    <div className="todo__container">
      <div className="todo__text">{todo.text}</div>
      <div className="todo__icons">
        <EditIcon />
        <DeleteIcon />
        <DoneOutlineIcon />
      </div>
    </div>
  );
};

export default Todo;
