import { defineStore } from "pinia";
import {
  loginRequest,
  getUserInfoById,
  getUserMenusByRoleId
} from "@/views/login/service/login_api";
import type { IAccount } from "@/views/login/types/login_type";
import { localCache } from "@/utils/cache";
import { LOGIN_TOKEN } from "@/global/constants";
import { ElMessage } from "element-plus";

import router from "@/router";

interface ILoginState {
  token: string;
  userInfo: any;
  userMenus: any;
  //或者去找json to ts的工具
}
const useLoginStore = defineStore("login", {
  //如何指定state的类型
  state: (): ILoginState => ({
    token: localCache.getCache(LOGIN_TOKEN) ?? "",
    userInfo: {},
    userMenus: []
  }),
  actions: {
    async loginAction(account: IAccount) {
      // 1.账号登录获取token
      const loginRes = await loginRequest(account);
      const id = loginRes.data.id;
      this.token = loginRes.data.token;
      // 2.进行本地缓存
      localCache.setCache(LOGIN_TOKEN, this.token);

      // 3.获取登录用户的详细信息(role信息)
      const userInfoRes = await getUserInfoById(id);
      const userInfo = userInfoRes.data;
      this.userInfo = userInfo;
      console.log(this.userInfo);

      // 4.根据角色请求用户的权限(菜单menus)
      const userMenusRes = await getUserMenusByRoleId(this.userInfo.role.id);
      const userMenus = userMenusRes.data;
      this.userMenus = userMenus;
      console.log(userMenusRes, "userMenusRes");
      localCache.setCache("userMenus", this.userMenus);

      // 5.页面跳转(home页面)
      router.push("/home");
    }
  }
});

export default useLoginStore;
