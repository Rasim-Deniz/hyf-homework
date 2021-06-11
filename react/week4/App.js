import React from "react";
import "./App.css";
import UsersSearch from "./context.js";
import SearchForm from "./searchForm";
import UsersDisplay from "./usersDisplay";

function App() {
  return (
    <div className="App">
      <UsersSearch>
        <SearchForm />
        <UsersDisplay />
      </UsersSearch>
    </div>
  );
}

export default App;
