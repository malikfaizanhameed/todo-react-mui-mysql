import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./GetTodo.css";

const GetTodo = () => {
  const [todo, setTodo] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(todo);
    setTodo("");
  };
  return (
    <div className="input__container">
      <Box>
        <form>
          <TextField
            autoFocus
            label="Add Task"
            className="text__input"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button
            disabled={todo === "" ? true : false}
            type="submit"
            variant="outlined"
            className="button"
            onClick={(e) => handleSumbit(e)}
          >
            ADD
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default GetTodo;
