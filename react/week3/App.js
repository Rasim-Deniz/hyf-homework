import React, { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/todoList";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
  const [userInput, setUserInput] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const addInput = (e) => {
    e.preventDefault();
    addTodo(userInput, selectedDate);
    setUserInput("");
  };

  return (
    <form onSubmit={addInput}>
      <div>
        <label>Todo description</label>
        <input
          value={userInput}
          type="text"
          onChange={(e) => setUserInput(e.currentTarget.value)}
        />
      </div>
      <div>
        <label>Deadline</label>
        <DatePicker
          value={selectedDate}
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="yyyy/MM/dd"
          minDate={new Date()}
        />
      </div>
      <button>Add todo</button>
    </form>
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
