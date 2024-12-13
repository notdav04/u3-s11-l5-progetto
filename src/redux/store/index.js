import { configureStore, combineReducers } from "@reduxjs/toolkit";
import MainReducer from "../reducers/MainReducer";
import FavReducer from "../reducers/FavReducer";
import PlayerReducer from "../reducers/PlayerReducer";

const rootStore = combineReducers({
  main: MainReducer,
  jobs: FavReducer,
  playerbar: PlayerReducer
});
const store = configureStore({
  reducer: rootStore
});
export default store;
