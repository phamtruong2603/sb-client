import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { API_URL } from "../config/environment";

type AxiosMethod = "get" | "post" | "put" | "delete" | "patch" | "options" | "head";

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  method?: AxiosMethod;
  url: string;
  contentType?: string;
  timeout?: number; // Thêm timeout
}

interface CustomAxiosResponse<T> {
  data: T;
  status: number;
  statusText: string;
  message?: string;
}

// Hàm xử lý lỗi
const handleAxiosError = (error: any) => {
  if (error.response) {
    // Lỗi từ server (status code không nằm trong khoảng 2xx)
    console.error("Server Error:", error.response);
  } else if (error.request) {
    // Không nhận được phản hồi từ server
    console.error("No Response:", error.request);
  } else {
    // Lỗi khác
    console.error("Error:", error.message);
  }
};

export const axiosApi = async <T>({
  method = "get",
  url,
  data = null,
  params = {},
  headers = {},
  contentType = "application/json",
  timeout = 10000, // Thời gian timeout mặc định là 10 giây
}: CustomAxiosRequestConfig): Promise<CustomAxiosResponse<T>> => {
  try {

    const token = localStorage.getItem("token");

    const response: AxiosResponse<T> = await axios({
      method,
      url: `${API_URL}${url}`,
      data,
      params,
      headers: {
        "Content-Type": contentType,
        Authorization: token ? `Bearer ${token}` : undefined,
        ...headers,
      },
      timeout,
    });

    const { data: responseData, message } = response.data as any;

    return {
      data: responseData,
      status: response.status,
      statusText: response.statusText,
      message: message,
    };
  } catch (error) {
    throw handleAxiosError(error);
  }
};
