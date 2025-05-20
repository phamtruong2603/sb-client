import { Action } from "../constants/enum";
import LoginForm from "../features/auth/LoginForm";
import RegisterForm from "../features/auth/RegisterForm";
import { NavigatorParams } from "./type";

import HomePage from "../features/homePage/HomePage";
import { systemRoutes } from "../features/systemConfiguration/pathConfiguration/nav";
import { userRoutes } from "../features/user/nav";

export const authRoutes: NavigatorParams[] = [
  {
    action: Action.Edit,
    component: LoginForm,
    path: "/login",
    isProtected: false,
    icon: null,
    menuName: "",
  },
  {
    action: Action.Edit,
    component: RegisterForm,
    path: "/register",
    isProtected: false,
    icon: null,
    menuName: "",
  },
];

export const adminRoutes: NavigatorParams[] = [
  {
    action: Action.View,
    component: HomePage,
    path: "/",
    isProtected: false,
    icon: null,
    menuName: "",
  },
  ...userRoutes,
  ...systemRoutes,
];
