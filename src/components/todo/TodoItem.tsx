import React from "react";
import { Todo } from "../../modules/todo/todo";
import styled from "styled-components";

interface TodoItemProps {
  todo: Todo;
  handleToggle: (id: number) => void;
  handleRemove: (id: number) => void;
}

interface SCprops {
  toggle?: boolean;
}

function TodoItem({ todo, handleToggle, handleRemove }: TodoItemProps) {
  return (
    <li>
      <Toggle toggle={todo.done} onClick={() => handleToggle(todo.id)}>
        {todo.text}
      </Toggle>
      <span onClick={() => handleRemove(todo.id)}>(X)</span>
    </li>
  );
}

export default TodoItem;

const Toggle = styled.span<SCprops>`
  text-decoration: ${(props) => (props.toggle ? "line-through" : "none")};
`;
