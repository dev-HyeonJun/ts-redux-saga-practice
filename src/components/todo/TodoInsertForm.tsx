import React, { useState, ChangeEvent, FormEvent, useRef } from "react";

interface TodoAppInsertFormProps {
  handleSubmit: (text: string) => void;
}

function TodoAppInsertForm({ handleSubmit }: TodoAppInsertFormProps) {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(value);
    setValue("");
    inputRef.current?.focus();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        ref={inputRef}
        value={value}
        onChange={onChange}
        placeholder="할일을 입력하세요."
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default TodoAppInsertForm;
