import { LOGIN_TOKEN } from "@/global/constants";
import { localCache } from "@/utils/cache";
import { BASE_URL, TIME_OUT } from "./config";
import Request from "./request";

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  //拦截器添加config
  interceptors: {
    requestSuccessFn: (config) => {
      const token = localCache.getCache(LOGIN_TOKEN);
      if (config.headers && token) {
        // config.headers!.Authorization = `Bearer ${token}`;
        typeof config.headers.set === "function" &&
          config.headers.set("Authorization", `Bearer ${token}`);
      }
      return config;
    }
  }
});

export default request;
