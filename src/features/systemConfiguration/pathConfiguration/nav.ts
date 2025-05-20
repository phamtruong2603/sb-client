import { Action } from "../../../constants/enum"
import { NavigatorParams } from "../../../routes/type"
import PathConfiguration from "./PathConfiguration"

const systemPath: string = "/path-configuration"

const nav: NavigatorParams[] = [
  {
    action: Action.View,
    component: PathConfiguration,
    path: `${systemPath}`,
    isProtected: true,
    icon: null,
    menuName: "",
  },
]

export {
  systemPath,
  nav as systemRoutes
}