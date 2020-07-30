import React, { useState, ChangeEvent, FormEvent } from "react";

interface GithubInsertFormProps {
  handleSubmit: (username: string) => void;
}

function GithubInsertForm({ handleSubmit }: GithubInsertFormProps) {
  const [value, setValue] = useState<string>("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(value);
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        value={value}
        onChange={onChange}
        placeholder="username을 적어주세요."
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default GithubInsertForm;
