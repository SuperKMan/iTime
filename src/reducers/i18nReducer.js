import { SET_CURRENT_LANGUAGE } from "../actions/types";

const initialState = {
  currentLanguage: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_LANGUAGE:
      return {
        ...state,
        currentLanguage: action.payload
      };
    default:
      return state;
  }
}
