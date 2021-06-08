import React, { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/todoList";
import "react-datepicker/dist/react-datepicker.css";
import Counter from "./Counter.js";
import AddTodo from "./addTodo.js";

function Header() {
  return (
    <header>
      <h1>ToDo List</h1>
    </header>
  );
}

const url =
  "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

function App() {
  const [todoList, setTodoList] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((todoList) => {
        setTodoList(todoList);
      });
  }, []);

  const addTodo = (userInput, selectedDate) => {
    if (!userInput) {
      alert("Please enter a description");
    } else if (!selectedDate) {
      alert("Please enter a deadline");
    } else {
      setTodoList([
        ...todoList,
        {
          id: todoList.length + 1,
          description: userInput,
          deadline: selectedDate.toISOString().slice(0, 10),
        },
      ]);
    }
  };

  const updateText = (id, editingText, setEditingState) => {
    if (!editingText) {
      alert("Please enter a text to update");
    } else {
      const updatedTodos = todoList.map((todo) => {
        if (todo.id === id) {
          todo.description = editingText;
        }
        return todo;
      });
      setTodoList(updatedTodos);
      setEditingState(null);
    }
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
          updateText={updateText}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
}

export default App;
