import { defineStore } from "pinia";
import {
  loginRequest,
  getUserInfoById,
  getUserMenusByRoleId
} from "@/views/login/service/login_api";
import type { IAccount } from "@/views/login/types/login_type";
import { localCache } from "@/utils/cache";
import { mapMenusToRoutes } from "@/utils/mapMenus";
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
    token: "",
    userInfo: {},
    userMenus: []
  }),
  actions: {
    async loginAction(account: IAccount) {
      // 1.账号登录获取token
      const loginRes = await loginRequest(account);
      const id = loginRes.data.id;
      this.token = loginRes.data.token;
      localCache.setCache(LOGIN_TOKEN, this.token);

      // 2.获取登录用户的详细信息(role信息)
      const userInfoRes = await getUserInfoById(id);
      const userInfo = userInfoRes.data;
      this.userInfo = userInfo;
      localCache.setCache("userInfo", this.userInfo);

      // 3.根据角色请求用户的权限(菜单menus)
      const userMenusRes = await getUserMenusByRoleId(this.userInfo.role.id);
      const userMenus = userMenusRes.data;
      this.userMenus = userMenus;
      localCache.setCache("userMenus", this.userMenus);

      //动态添加路由
      const routes = mapMenusToRoutes(userMenus);
      routes.forEach((route) => router.addRoute(route));

      // 5.页面跳转(home页面)
      router.push("/main");
    },
    loadLocalCacheAction() {
      // 1.用户进行刷新默认加载数据
      const token = localCache.getCache(LOGIN_TOKEN);
      const userInfo = localCache.getCache("userInfo");
      const userMenus = localCache.getCache("userMenus");
      if (token && userInfo && userMenus) {
        this.token = token;
        this.userInfo = userInfo;
        this.userMenus = userMenus;

        // 2.动态添加路由
        const routes = mapMenusToRoutes(userMenus);
        routes.forEach((route) => router.addRoute("main", route));
      }
    }
  }
});

export default useLoginStore;
