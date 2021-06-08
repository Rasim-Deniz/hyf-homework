import React, { useState } from "react";
import PropTypes from "prop-types";

const Todo = ({ todo, updateText, removeTodo }) => {
  const [done, setDone] = useState(false);
  const [editingState, setEditingState] = useState(null);
  const [editingText, setEditingText] = useState("");

  return (
    <li
      id={todo.id}
      key={todo.id}
      name="todo"
      value={todo.id}
      className={done ? "todoWrapper strike" : "todoWrapper"}
    >
      {todo.id === editingState ? (
        <input
          type="text"
          onChange={(e) => setEditingText(e.currentTarget.value)}
        />
      ) : (
        <div>
          {todo.description} | {todo.deadline}
          <input
            type="checkbox"
            checked={done}
            id={todo.id}
            onChange={() => setDone(!done)}
          />
        </div>
      )}
      {todo.id === editingState ? (
        <button
          onClick={() => updateText(todo.id, editingText, setEditingState)}
        >
          Update
        </button>
      ) : (
        <button onClick={() => setEditingState(todo.id)}>Edit</button>
      )}
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </li>
  );
};

const TodoList = ({ todoList, updateText, removeTodo }) => {
  return (
    <ul>
      {todoList.length === 0 ? (
        <h2>No items</h2>
      ) : (
        todoList.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              updateText={updateText}
              removeTodo={removeTodo}
            />
          );
        })
      )}
    </ul>
  );
};

TodoList.propTypes = {
  id: PropTypes.number,
  todo: PropTypes.arrayOf(PropTypes.object),
  updateText: PropTypes.func,
  removeTodo: PropTypes.func,
};

export default TodoList;
