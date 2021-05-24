import React from "react";

const Todo = ({ todo }) => {
  return (
    <li className="todoWrapper">
      {todo.title}, {todo.deadline}
    </li>
  );
};

export default Todo;
