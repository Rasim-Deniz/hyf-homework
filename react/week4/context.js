import React, { createContext, useEffect, useState } from "react";
import SearchForm from "./searchForm";
import UsersDisplay from "./usersDisplay";

export const UserSearchContext = createContext();

const UsersSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleErrors = (response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.github.com/search/users?q=${userInput}`
        );
        handleErrors(response);
        const data = await response.json();
        const usersData = await data.items;
        setUsers(usersData);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [userInput]);

  return (
    <UserSearchContext.Provider value={{ users, userInput, setUserInput }}>
      <SearchForm />
      {isLoading ? <Loading /> : <UsersDisplay />}
    </UserSearchContext.Provider>
  );
};
function Loading() {
  return <div>Loading... </div>;
}
export default UsersSearch;
