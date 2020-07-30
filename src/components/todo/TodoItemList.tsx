import React from "react";
import { Todo } from "../../modules/todo";
import TodoItem from "./TodoItem";

interface TodoItemList {
  todos: Todo[];
  handleToggle: (id: number) => void;
  handleRemove: (id: number) => void;
}

function TodoItemList({ todos, handleToggle, handleRemove }: TodoItemList) {
  console.log(todos);
  if (todos.length === 0) return <div>할일 목록이 없습니다.</div>;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleToggle={handleToggle}
          handleRemove={handleRemove}
        />
      ))}
    </ul>
  );
}

export default TodoItemList;
