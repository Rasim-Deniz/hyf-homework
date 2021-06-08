import React, { createContext, useState } from "react";

export const StateContext = createContext();

const StateProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = (query) => {
    setLoading(true);
    fetch(`https://api.github.com/search/users?q=${query}`)
      .then(handleErrors)
      .then((res) => res.json())
      .then((data) => setUsers(data.items))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleErrors = (response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  };
  return (
    <StateContext.Provider value={{ users, loading, fetchUsers }}>
      {props.children}
    </StateContext.Provider>
  );
};

export default StateProvider;
