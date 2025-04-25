import { axiosApi } from "../../api/axios";

export const login = async (data: any) => {
  return await axiosApi<any>({ method: "post", url: "/users/login",  data})
}