import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import itimeReducer from "./itimeReducer";
import i18nReducer from "./i18nReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  itime: itimeReducer,
  i18n: i18nReducer
});
