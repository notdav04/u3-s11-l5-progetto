import { CHANGE_SONG } from "../actions";

const initialstate = {
  playerSong: {}
};

const PlayerReducer = (state = initialstate, action) => {
  switch (action.type) {
    case CHANGE_SONG:
      return {
        ...state,
        playerSong: action.payload
      };
    default:
      return state;
  }
};

export default PlayerReducer;
