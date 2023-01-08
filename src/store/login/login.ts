import { defineStore } from "pinia";

import { loginRequest } from "@/service/login/login";

import type { IAccount } from "@/views/login/types/login";

const useLoginStore = defineStore("login", {
  state: () => ({
    id: "",
    name: "",
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
      // localCache.setCache(LOGIN_TOKEN, this.token);
    }
  }
});

export default useLoginStore;
