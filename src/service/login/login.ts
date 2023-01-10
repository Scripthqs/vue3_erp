import apiRequest from "@/service";
import type { IAccount } from "@/views/login/types/login";
// import { API } from "@/service/api";
export function loginRequest(account: IAccount) {
  return apiRequest.post({ url: "/login", data: account });
}
