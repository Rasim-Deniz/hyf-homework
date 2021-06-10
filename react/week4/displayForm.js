import React, { useContext } from "react";
import { Context } from "./context.js";

export default function SearchForm() {
  const { fetchUsers } = useContext(Context);

  return (
    <div className="App">
      <h1>Github user searcher</h1>
      <div>
        <input
          placeholder="Search for user"
          onKeyUp={(e) => {
            fetchUsers(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
