<template>
  <div class="mainMenu">
    <div class="mainMenuLogo">
      <img class="logo" src="@/assets/img/logo.png" alt="logo" />
      <h2 class="title">Vue3 ERP</h2>
    </div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :collapse="isFold"
        :unique-opened="false"
        background-color="#304156"
        text-color="#bfcbd9"
        :collapse-transition="false"
        :default-active="defaultActive"
      >
        <MenuTree :userMenus="userMenus"></MenuTree>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import MenuTree from "./menuTree.vue";

import useLoginStore from "@/views/login/store/login_store";
import useLayoutStore from "@/layout/store/layout_store";

import { useRoute } from "vue-router";

import { mapPathToMenu } from "@/utils/mapMenus";

const loginStore = useLoginStore();
const layoutStore = useLayoutStore();

const userMenus = computed(() => loginStore.userMenus);
const isFold = computed(() => layoutStore.isFold);

// ElMenu的默认菜单
const route = useRoute();
const defaultActive = computed(() => {
  const pathMenu = mapPathToMenu(route.path, userMenus.value);
  return pathMenu.id + "";
});
</script>

<style lang="less" scoped>
.noScroll {
  overflow-x: hidden;
  overflow-y: auto;
  cursor: pointer;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  // transition: width 0.3s ease;
  &::-webkit-scrollbar {
    display: none;
  }
}
.mainMenu {
  height: 100%;
  overflow: hidden;
}

.mainMenuLogo {
  display: flex;
  align-items: center;
  height: 30px;
  padding: 10px;
  .logo {
    height: 30px;
    margin: 0px 10px;
  }
  .title {
    font-size: 18px;
    font-weight: 700;
    color: white;
    white-space: nowrap;
  }
}
</style>
