import React from "react";
import "./App.css";
import UsersProvider from "./context.js";
import SearchForm from "./inputForm.js";
import UsersForm from "./displayForm.js";

function App() {
  return (
    <UsersProvider>
      <SearchForm />
      <UsersForm />
    </UsersProvider>
  );
}

export default App;
