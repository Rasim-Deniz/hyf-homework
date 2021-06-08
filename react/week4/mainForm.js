import React, { useContext } from "react";
import { StateContext } from "./context.js";

export default function MainForm() {
  const { users, loading, fetchUsers } = useContext(StateContext);

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
      <div>
        {loading && <div>Loading... </div>}
        {users.length === 0 || !users ? (
          <h2>No results</h2>
        ) : (
          users.map((user) => <div key={user.id}> {user.login}</div>)
        )}
      </div>
    </div>
  );
}
