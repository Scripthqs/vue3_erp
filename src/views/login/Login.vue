<template>
  <div class="login">
    <div class="loginBgd">
      <div class="shape"></div>
      <div class="shape"></div>
    </div>
    <div class="loginForm">
      <h1 class="loginTitle">后台管理系统</h1>

      <div class="loginTabs">
        <el-tabs type="border-card" stretch v-model="tabName">
          <!-- 1.账号登录的Pane -->
          <el-tab-pane name="account">
            <template #label>
              <div class="label">
                <el-icon><UserFilled /></el-icon>
                <span class="text">帐号登录</span>
              </div>
            </template>
            <PaneAccount ref="accountRef" />
          </el-tab-pane>

          <!-- 2.手机登录的Pane -->
          <el-tab-pane name="phone">
            <template #label>
              <div class="label">
                <el-icon><Cellphone /></el-icon>
                <span class="text">手机登录</span>
              </div>
            </template>
            <PanePhone />
          </el-tab-pane>
        </el-tabs>
      </div>

      <div class="loginControls">
        <el-checkbox v-model="isKeep" label="记住密码" size="large" />
        <el-link type="primary">忘记密码</el-link>
      </div>
      <el-button
        type="primary"
        size="large"
        class="loginBtn"
        @click="handleLogin"
      >
        登录
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { localCache } from "@/utils/cache";
import { ref, watch } from "vue";

import PaneAccount from "./components/PaneAccount.vue";
import PanePhone from "./components/PanePhone.vue";

const tabName = ref("account");
const isKeep = ref<boolean>(localCache.getCache("isKeep"));
watch(isKeep, (newValue) => {
  localCache.setCache("isKeep", newValue);
});

const accountRef = ref<InstanceType<typeof PaneAccount>>();

const handleLogin = () => {
  if (tabName.value === "account") {
    accountRef.value?.loginAction(isKeep.value);
  } else {
    console.log("用户在进行手机登录");
  }
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #070a10bd;

  .loginBgd {
    width: 400px;
    height: 520px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    .shape {
      height: 200px;
      width: 200px;
      position: absolute;
      border-radius: 50%;
    }
    .shape:first-child {
      background: linear-gradient(#1845ad, #23a2f6);
      left: -80px;
      top: -80px;
    }
    .shape:last-child {
      background: linear-gradient(to right, #ff512f, #f09819);
      right: -80px;
      bottom: -80px;
    }
  }
  .loginForm {
    width: 400px;
    height: 520px;
    background-color: rgba(255, 255, 255, 0.13);
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);

    .loginTitle {
      text-align: center;
      margin-top: 40px;
    }
    .loginTabs {
      margin-top: 40px;
    }

    .loginControls {
      display: flex;
      justify-content: space-between;
      margin: 10px 0px;
    }
    .loginBtn {
      width: 100%;
    }
  }
}
</style>
