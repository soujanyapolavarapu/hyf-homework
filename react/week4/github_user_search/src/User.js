import React, { useContext, useEffect } from "react";
import { UserSearchContext } from "./userSearch.js";

const Api_url = "https://api.github.com/search/users?q=";

const User = () => {
  const userContext = useContext(UserSearchContext);
  console.log(userContext);

  useEffect(() => {
    if (userContext.input) {
      userContext.setIsload(userContext.isLoad);
      fetch(Api_url + userContext.input)
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            return userContext.setUserFound(data.message);
          } else if (data.items) {
            userContext.setUserData(data.items);
          }
        });
    }
  }, [userContext.input]);

  return (
    <div>
      <h1>Github User Searcher </h1>
      <input
        id="userInput"
        type="text"
        value={userContext.input}
        placeholder="Enter User Name"
        onChange={userContext.onChange}
      />
      {userContext.isLoad && <div>Loading...</div>}

      {userContext.userFound !== "" && <h3>{userContext.userFound}</h3>}
      <ul>
        {userContext.userData.length > 0 ? (
          userContext.userData.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))
        ) : (
          <h3>No results...</h3>
        )}
      </ul>
    </div>
  );
};

export default User;
