import { BASE_URL, TIME_OUT } from "./config";
import APIRequest from "./request";

const apiRequest = new APIRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
});

export default apiRequest;
