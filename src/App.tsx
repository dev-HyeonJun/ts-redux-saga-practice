import React from "react";
import logo from "./logo.svg";
import "./App.css";
/* import TodoContainer from "./components/todo/TodoContainer"; */
import { RootState } from "./modules";
import { useSelector } from "react-redux";
import GithubContainer from "./components/github/GithubContainer";

function App() {
  const userProfile = useSelector(
    ({ github }: RootState) => github.userProfile
  );
  return <GithubContainer />;
}

export default App;
