import React from "react";

const Todo = ({ todo }) => {
  return (
    <div className="todoWrapper">
      {todo.title}, {todo.deadline}
    </div>
  );
};

export default Todo;
