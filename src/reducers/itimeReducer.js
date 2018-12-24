import {
  GET_EMPLOYEE,
  GET_EMPLOYEES,
  EMPLOYEES_LOADING,
  CLEAR_CURRENT_EMPLOYEE,
  GET_PWDSTATUS
} from "../actions/types";

const initialState = {
  employee: null,
  employees: null,
  pwdstatus: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case EMPLOYEES_LOADING:
      return { ...state, loading: true };
    case GET_EMPLOYEE:
      return { ...state, employee: action.payload, loading: false };
    case GET_EMPLOYEES:
      return { ...state, employees: action.payload, loading: false };
    case GET_PWDSTATUS:
      return { ...state, pwdstatus: action.payload, loading: false };
    case CLEAR_CURRENT_EMPLOYEE:
      return { ...state, employee: null };
    default:
      return state;
  }
}
