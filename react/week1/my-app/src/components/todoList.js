import React from "react";
import Todo from "./todo";

const TodoList = ({ todoList }) => {
  return (
    <div>
      {todoList.map((todo) => {
        return <Todo todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
