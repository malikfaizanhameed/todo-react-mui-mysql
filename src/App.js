import React from "react";
import GetTodo from "./components/GetTodo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Fozzy's To-Do List</h1>
      </header>
      <GetTodo />
    </div>
  );
}

export default App;
