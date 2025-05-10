import { Action } from "../constants/enum";
import LoginForm from "../features/auth/LoginForm";
import RegisterForm from "../features/auth/RegisterForm";
import { NavigatorParams } from "./type";
import React from "react";

import { userRoutes } from "../features/user/nav";
import HomePage from "../features/homePage/HomePage";

export const authRoutes: NavigatorParams[] = [
  {
    action: Action.Edit,
    component: LoginForm,
    path: "/login",
    isMenu: false,
    isProtected: false,
    icon: null,
    menuName: "",
  },
  {
    action: Action.Edit,
    component: RegisterForm,
    path: "/register",
    isMenu: false,
    isProtected: false,
    icon: null,
    menuName: "",
  }
]

export const adminRoutes: NavigatorParams[] = [
  {
    action: Action.View,
    component: HomePage,
    path: "/",
    isMenu: false,
    isProtected: false,
    icon: null,
    menuName: "",
  },
  ...userRoutes,
];