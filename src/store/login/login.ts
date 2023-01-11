import { defineStore } from "pinia";
import { loginRequest } from "@/service/login/login";
import type { IAccount } from "@/views/login/types/login";
import { localCache } from "@/utils/cache";
import { LOGIN_TOKEN } from "@/global/constants";
import { ElMessage } from "element-plus";

import router from "@/router";

const useLoginStore = defineStore("login", {
  state: () => ({
    id: "",
    name: localCache.getCache(LOGIN_TOKEN) ?? "",
    token: ""
  }),
  actions: {
    async loginAction(account: IAccount) {
      // 1.账号登录获取token
      const res = await loginRequest(account);
      console.log(res, "res--------------------");
      this.id = res.data.id;
      this.name = res.data.name;
      this.token = res.data.token;

      // 2.进行本地缓存
      localCache.setCache(LOGIN_TOKEN, this.token);

      // 3.页面跳转(main页面)
      router.push("/main");
    }
  }
});

export default useLoginStore;
