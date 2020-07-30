import { combineReducers } from "redux";
import todo from "./todo/todo";
import github from "./github/github";
import { githubSaga } from "../modules/github/github";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  todo,
  github,
});

// container 컴포넌트의 useSelector에서 쓸 rootReducer의 type.
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

export function* rootSaga() {
  yield all([githubSaga()]);
}
