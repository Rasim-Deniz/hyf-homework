import React from "react";
import Todo from "./todo";

const TodoList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

export default TodoList;
