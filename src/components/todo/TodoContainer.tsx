import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules";
import { addTodo, toggleTodo, removeTodo } from "../../modules/todo";
import TodoInsertForm from "./TodoInsertForm";
import TodoItemList from "./TodoItemList";

function TodoContainer() {
  const { todos } = useSelector(({ todo }: RootState) => todo);
  const dispatch = useDispatch();
  const handleSubmit = (text: string) => {
    dispatch(addTodo(text));
  };

  const handleToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleRemove = (id: number) => {
    dispatch(removeTodo(id));
  };
  return (
    <div>
      <TodoInsertForm handleSubmit={handleSubmit} />
      <TodoItemList
        todos={todos}
        handleToggle={handleToggle}
        handleRemove={handleRemove}
      />
    </div>
  );
}

export default TodoContainer;
