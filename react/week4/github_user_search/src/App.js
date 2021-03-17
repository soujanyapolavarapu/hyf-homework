import "./App.css";
import User from "./consumeUser.js";
import UserRepos from "./githubApi.js";

function App() {
  return (
    <div className="App">
      <User />
      <UserRepos />
    </div>
  );
}

export default App;
