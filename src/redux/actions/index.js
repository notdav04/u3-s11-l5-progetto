import { useDispatch } from "react-redux";

export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const CHANGE_SONG = "CHANGE_SONG";

export const addfavAction = (data) => {
  return {
    type: ADD_FAV,
    payload: data
  };
};

export const removefavAction = (element) => {
  return {
    type: REMOVE_FAV,
    payload: element
  };
};

export const changeSong = (element) => {
  return {
    type: CHANGE_SONG,
    payload: element
  };
};
