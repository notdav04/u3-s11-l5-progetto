import { ADD_FAV } from "../actions";
import { REMOVE_FAV } from "../actions";
const initialState = {
  favourites: [],
  nFavourites: 0
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      if (!state.favourites.includes(action.payload)) {
        return {
          ...state,

          favourites: [...state.favourites, action.payload],
          nFavourites: state.nFavourites + 1
        };
      } else {
        return state;
      }
    case REMOVE_FAV:
      const updatedFavourites = state.favourites.filter(
        (fav) => fav !== action.payload
      );
      return {
        ...state,
        favourites: updatedFavourites,
        nFavourites: state.nFavourites - 1
      };
    default:
      return state;
  }
};

export default MainReducer;
