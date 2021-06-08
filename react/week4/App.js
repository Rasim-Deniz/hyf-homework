import React from "react";
import "./App.css";
import StateProvider from "./context.js";
import MainForm from "./mainForm.js";

function App() {
  return (
    <div>
      <StateProvider>
        <MainForm />
      </StateProvider>
    </div>
  );
}

export default App;
