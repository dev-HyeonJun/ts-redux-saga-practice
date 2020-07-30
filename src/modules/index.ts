import { combineReducers } from "redux";
import todo from "./todo";

const rootReducer = combineReducers({
  todo,
});

// container 컴포넌트의 useSelector에서 쓸 rootReducer의 type.
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
