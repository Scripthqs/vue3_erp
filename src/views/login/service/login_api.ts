import request from "@/service";
import type { IAccount } from "@/views/login/types/login_type";
import { localCache } from "@/utils/cache";
import { LOGIN_TOKEN } from "@/global/constants";
export function loginRequest(account: IAccount) {
  return request.post({ url: "/login", data: account });
}
export function getUserInfoById(id: number) {
  return request.get({
    url: `/users/${id}`
    // headers: {
    //   Authorization: "Bearer " + localCache.getCache(LOGIN_TOKEN)
    // }
  });
}

export function getUserMenusByRoleId(id: number) {
  return request.get({
    url: `/role/${id}/menu`
  });
}
