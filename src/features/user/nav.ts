import { Action } from "../../constants/enum";
import { NavigatorParams } from "../../routes/type";
import UserForm from "./UserForm";

const userPath: string = "/user"

const nav: NavigatorParams[] = [
  {
    action: Action.View,
    component: UserForm,
    path: `${userPath}`,
    isProtected: true,
    icon: null,
    menuName: "",
  },
  {
    action: Action.Edit,
    component: UserForm,
    path: `${userPath}/:id`,
    isProtected: true,
    icon: null,
    menuName: "",
  }
]

export {
  userPath,
  nav as userRoutes
}