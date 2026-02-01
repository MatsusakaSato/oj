import R from "./ApiResponse";

class Request {
  async get<T = any>(
    url: string,
    params: Record<string, any> = {},
  ): Promise<T> {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        searchParams.append(key, String(value));
      }
    });
    const fullUrl = searchParams.toString() ? `${url}?${searchParams}` : url;

    const response = await fetch(fullUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      credentials: "same-origin",
    });

    const res = await response.json();

    if (res.code !== 0) {
      throw new Error(res.msg || "未知错误");
    }

    return res.data as T;
  }

  async post<T = any>(url: string, body: Record<string, any> = {}): Promise<T> {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      credentials: "same-origin",
      body: JSON.stringify(body),
    });

    const res = await response.json();

    if (res.code !== 0) {
      throw new Error(res.msg || "未知错误");
    }

    return res.data as T;
  }
}

export const request = new Request();
