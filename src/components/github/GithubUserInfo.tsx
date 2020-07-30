import React from "react";
import { GithubUserProfile } from "../../modules/github/github";

interface GithubUserInfoProps {
  userData: GithubUserProfile | null;
}

function GithubUserInfo({ userData }: GithubUserInfoProps) {
  if (userData === null) return <p>유저 정보가 없습니다.</p>;
  const { avatar_url, name, bio } = userData;
  return (
    <div>
      <img src={avatar_url} alt={name} />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
}

export default GithubUserInfo;
