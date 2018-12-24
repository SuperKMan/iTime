import { SET_CURRENT_LANGUAGE } from "./types";

export const changeLanguage = language => dispatch => {
  dispatch(setCurrentLanguage(language));
};

export const setCurrentLanguage = language => {
  return {
    type: SET_CURRENT_LANGUAGE,
    payload: language
  };
};
