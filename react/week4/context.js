import React, { createContext, useState } from "react";

export const Context = createContext();

const UsersProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const handleErrors = (response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  };

  const fetchUsers = async (query) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.github.com/search/users?q=${query}`
      );
      handleErrors(response);
      const data = await response.json();
      const usersData = await data.items;
      setUsers(usersData);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Context.Provider value={{ users, loading, fetchUsers }}>
      {props.children}
    </Context.Provider>
  );
};

export default UsersProvider;
