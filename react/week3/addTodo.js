import DatePicker from "react-datepicker";
import React, { useState } from "react";

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

export default AddTodo;
