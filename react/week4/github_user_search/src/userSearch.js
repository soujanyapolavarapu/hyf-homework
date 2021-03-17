import React, { createContext, useState } from "react";

export const UserSearchContext = createContext();

const FetchedData = ({ children }) => {
  const [input, setInput] = useState("");
  const [isLoad, setIsload] = useState(true);
  const [userFound, setUserFound] = useState("");
  const [userData, setUserData] = useState([]);
  const [repos, setRepos] = useState([]);

  const userContext = {
    input,
    onChange: (e) => {
      let value = e.target.value;
      setInput(value);
    },
    userData,
    setUserData,
    isLoad,
    setIsload,
    userFound,
    setUserFound,
    repos,
    setRepos,
  };

  return (
    <div>
      <UserSearchContext.Provider value={userContext}>
        {children}
      </UserSearchContext.Provider>
    </div>
  );
};
export default FetchedData;
