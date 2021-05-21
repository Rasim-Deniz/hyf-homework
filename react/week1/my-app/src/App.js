import React, { useState } from "react";
import "./App.css";
import data from "./components/data.json";
import Header from "./components/header";
import TodoList from "./components/todoList";

function App() {
  const [todoList] = useState(data);

  return (
    <div className="App">
      <div className="todoListWrapper">
        <Header />
        <TodoList todoList={todoList} />
      </div>
    </div>
  );
}

export default App;
