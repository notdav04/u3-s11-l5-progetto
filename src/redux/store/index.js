import { configureStore, combineReducers } from "@reduxjs/toolkit";

import FavReducer from "../reducers/FavReducer";
import PlayerReducer from "../reducers/PlayerReducer";

const rootStore = combineReducers({
  fav: FavReducer,
  playerbar: PlayerReducer
});
const store = configureStore({
  reducer: rootStore
});
export default store;
