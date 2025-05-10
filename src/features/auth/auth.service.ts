import { axiosApi } from "../../api/axios";

export const login = async (data: { username: string; password: string }) => {
  return await axiosApi<any>({ method: "post", url: "/auth/login", data });
};
export const register = async (data: {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
}) => {
  return await axiosApi<any>({ method: "post", url: "/auth/register", data });
};

export const handleGoogleAuth = async () => {
  return await axiosApi<any>({ url: "/auth/google" });
};
