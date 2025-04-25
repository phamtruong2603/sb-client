import { Action } from "../constants/enum";

export interface NavigatorParams {
  action: Action;
  component: any;
  path: string
  isMenu?: boolean;
  isProtected?: boolean;
  icon?: any;
  menuName?: string;
  children?: NavigatorParams[];
}
