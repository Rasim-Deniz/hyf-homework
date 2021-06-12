import React, { useContext } from "react";
import { UserSearchContext } from "./context.js";

export default function SearchForm() {
  const { userInput, setUserInput } = useContext(UserSearchContext);

  return (
    <div className="App">
      <h1>Github user searcher</h1>
      <div>
        <input
          placeholder="Search for user"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
