import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@mui/material";
import "./UpdateTodo.css";

const UpdateTodo = ({ todoId, editTodo, setEdit }) => {
  const [todo, setTodo] = useState("");

  return (
    <div className="update__container">
      <TextField
        autoFocus
        label="Update Task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button
        type="submit"
        variant="outlined"
        disabled={todo === "" ? true : false}
        onClick={() => {
          setEdit({
            key: null,
            text: "",
          });
          editTodo(todoId, todo);
        }}
      >
        Update
      </Button>
    </div>
  );
};

export default UpdateTodo;
