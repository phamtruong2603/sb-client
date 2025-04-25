import { API_URL } from "../config/environment";

type FetchMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";

interface CustomFetchRequestConfig {
  method?: FetchMethod;
  url: string;
  data?: any;
  params?: Record<string, any>;
  headers?: Record<string, string>;
  contentType?: string;
}

interface CustomFetchResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

export const fetchApi = async <T>({
  method = "GET",
  url,
  data = null,
  params = {},
  headers = {},
  contentType = "application/json",
}: CustomFetchRequestConfig): Promise<CustomFetchResponse<T>> => {
  try {
    // Xử lý query params
    const queryString = new URLSearchParams(params).toString();
    const fullUrl = `${API_URL}${url}${queryString ? `?${queryString}` : ""}`;

    // Cấu hình request
    const fetchOptions: RequestInit = {
      method,
      headers: {
        "Content-Type": contentType,
        ...headers,
      },
      body: data ? JSON.stringify(data) : null,
    };

    // Gửi request
    const response = await fetch(fullUrl, fetchOptions);

    // Kiểm tra lỗi HTTP
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Trả về dữ liệu
    const responseData = await response.json();
    return {
      data: responseData,
      status: response.status,
      statusText: response.statusText,
    };
  } catch (error) {
    console.error("Error fetchApi:", error);
    throw error;
  }
};