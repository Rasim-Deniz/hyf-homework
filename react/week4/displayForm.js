import React, { useContext } from "react";
import { Context } from "./context.js";

export default function UsersForm() {
  const { users, loading } = useContext(Context);

  return (
    <div className="App">
      {loading && <div>Loading... </div>}
      {users.length === 0 || !users ? (
        <h2>No results</h2>
      ) : (
        users.map((user) => <div key={user.id}> {user.login}</div>)
      )}
    </div>
  );
}
