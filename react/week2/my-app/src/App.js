import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./components/data.json";
import TodoList from "./components/todoList";

function Header() {
  return (
    <header>
      <h1>ToDo List</h1>
    </header>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const counter = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearTimeout(counter);
    };
  }, [count]);

  return (
    <p>
      You have used <span id="count">{count}</span> seconds on this website
    </p>
  );
}

function AddTodo({ addTodo }) {
  return <button onClick={addTodo}>Add Todo</button>;
}

function App() {
  const [todoList, setTodoList] = useState(data);

  const checkDone = (id) => {
    let mappedList = todoList.map((todo) => {
      return todo.id === parseInt(id)
        ? { ...todo, done: !todo.done }
        : { ...todo };
    });
    setTodoList(mappedList);
  };

  const addTodo = () => {
    setTodoList([
      ...todoList,
      { id: todoList.length + 1, title: "random text", done: false },
    ]);
  };

  const removeTodo = (id) => {
    let filteredList = todoList.filter((todo) => todo.id !== id);
    setTodoList(filteredList);
  };

  return (
    <div className="App">
      <div className="todoListWrapper">
        <Header />
        <Counter />
        <AddTodo addTodo={addTodo} />
        <TodoList
          todoList={todoList}
          checkDone={checkDone}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
}

export default App;
