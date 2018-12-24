import React from "react";
import Loadable from "react-loadable";

import DefaultLayout from "./containers/DefaultLayout";

function Loading() {
  return <div>Loading...</div>;
}

const Dashboard = Loadable({
  loader: () => import("./views/Dashboard"),
  loading: Loading
});

const Employee = Loadable({
  loader: () => import("./views/iTime/Employee"),
  loading: Loading
});

const PasswordReset = Loadable({
  loader: () => import("./views/iTime/PasswordReset"),
  loading: Loading
});

const ForgotPasswordReset = Loadable({
  loader: () => import("./views/iTime/ForgotPasswordReset"),
  loading: Loading
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/", exact: true, name: "Home", component: DefaultLayout },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/itime/employee", name: "Employee", component: Employee },
  {
    path: "/itime/passwordreset",
    name: "PasswordReset",
    component: PasswordReset
  },
  {
    path: "/itime/forgotpasswordreset",
    name: "ForgotPasswordReset",
    component: ForgotPasswordReset
  }
];

export default routes;
