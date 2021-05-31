import React from "react";

const Todo = ({ todo, checkDone, removeTodo }) => {
  return (
    <li
      id={todo.id}
      key={todo.id}
      className={todo.done ? "todoWrapper strike" : "todoWrapper"}
    >
      {todo.title}
      <input
        type="checkbox"
        id={todo.id}
        onChange={(e) => checkDone(e.target.id)}
        defaultChecked={todo.done}
      />
      <button id="delete" onClick={() => removeTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
};

const TodoList = ({ todoList, checkDone, removeTodo }) => {
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
              checkDone={checkDone}
              removeTodo={removeTodo}
            />
          );
        })
      )}
    </ul>
  );
};

export default TodoList;
