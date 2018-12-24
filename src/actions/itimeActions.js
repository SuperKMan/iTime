import axios from "axios";

import {
  GET_EMPLOYEE,
  GET_EMPLOYEES,
  EMPLOYEES_LOADING,
  GET_PWDSTATUS
} from "./types";

// Get employee
export const getEmployees = locked => dispatch => {
  dispatch(setLoading());
  axios
    .get(`/itime/employees/locked/${locked}`)
    .then(res => dispatch({ type: GET_EMPLOYEES, payload: res.data }))
    .catch(err => dispatch({ type: GET_EMPLOYEES, payload: {} }));
};

// Set selected employee
export const setSelectedEmployee = emp => dispatch => {
  dispatch({ type: GET_EMPLOYEE, payload: emp });
};

// Get Password status
export const getPasswordStatus = () => dispatch => {
  dispatch(setLoading());
  axios
    .get(`/itime/pwdstatus`)
    .then(res => dispatch({ type: GET_PWDSTATUS, payload: res.data }))
    .catch(err => dispatch({ type: GET_PWDSTATUS, payload: {} }));
};

// Reset password
export const resetPassword = empID => dispatch => {
  axios
    .get(`/itime/resetpwd/emp/${empID}`)
    .then(res => dispatch(getEmployees()))
    .catch(err => console.log(err));
};

// Loading
export const setLoading = () => {
  return {
    type: EMPLOYEES_LOADING
  };
};
