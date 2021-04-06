import React, { useEffect, useContext } from "react";
import { UserSearchContext } from "./userSearch.js";

const UserRepos = () => {
  const userContext = useContext(UserSearchContext);

  const api = "https://api.github.com/users/HackYourFuture-CPH/repos";
  useEffect(() => {
    userContext.setIsload(!userContext.isLoad);
    fetch(api)
      .then((res) => res.json())
      .then((data) => userContext.setRepos(data));
  }, []);
  return (
    <div>
      <h1>Names of Repos in HackYourFuture-CPH</h1>
      {userContext.isLoad && <div>Loading...</div>}
      <ul>
        {userContext.repos &&
          userContext.repos.map((repo) => <li key={repo.id}> {repo.name}</li>)}
      </ul>
    </div>
  );
};
export default UserRepos;
