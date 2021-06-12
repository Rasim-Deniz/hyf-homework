import React, { useContext } from "react";
import { UserSearchContext } from "./context.js";

export default function UsersDisplay() {
  const { users } = useContext(UserSearchContext);

  return (
    <div className="App">
      {users.length === 0 || !users ? (
        <h2>No results</h2>
      ) : (
        users.map((user) => <div key={user.id}> {user.login}</div>)
      )}
    </div>
  );
}
