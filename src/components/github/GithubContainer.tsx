import React from "react";
import GithubInsertForm from "./GithubInsertForm";
import { getUserProfileAsync } from "../../modules/github/github";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules";
import GithubUserInfo from "./GithubUserInfo";

function GithubContainer() {
  const { userProfile } = useSelector(({ github }: RootState) => github);
  const dispatch = useDispatch();
  const handleSubmit = (username: string) => {
    dispatch(getUserProfileAsync.request(username));
  };
  return (
    <div>
      <GithubInsertForm handleSubmit={handleSubmit} />
      <GithubUserInfo userData={userProfile.data} />
    </div>
  );
}

export default GithubContainer;
