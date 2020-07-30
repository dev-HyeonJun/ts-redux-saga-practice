import { createAction, ActionType, createReducer } from "typesafe-actions";
import produce from "immer";

// action
const ADD_TODO = "todo/ADD_TODO";
const TOGGLE_TODO = "todo/TOGGLE_TODO";
const REMOVE_TODO = "todo/REMOVE_TODO";

let nextId = 1;

export const addTodo = createAction(ADD_TODO, (text: string) => ({
  id: nextId++,
  text,
  done: false,
}))<Todo>();
export const toggleTodo = createAction(TOGGLE_TODO)<number>();
export const removeTodo = createAction(REMOVE_TODO)<number>();

const actions = {
  addTodo,
  toggleTodo,
  removeTodo,
};

// type & interface

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

type TodoAction = ActionType<typeof actions>;

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

// reducer
const todo = createReducer<TodoState, TodoAction>(initialState, {
  [ADD_TODO]: (state, { payload: todo }) =>
    produce(state, (draft) => {
      draft.todos = state.todos.concat(todo);
    }),
  [TOGGLE_TODO]: (state, { payload: id }) =>
    produce(state, (draft) => {
      draft.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      );
    }),
  [REMOVE_TODO]: (state, { payload: id }) =>
    produce(state, (draft) => {
      draft.todos = draft.todos.filter((todo) => todo.id !== id);
    }),
});

export default todo;
