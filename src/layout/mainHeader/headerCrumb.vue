<template>
  <el-breadcrumb separator-icon="ArrowRight">
    <template v-for="item in breadcrumbs" :key="item.name">
      <el-breadcrumb-item :to="item.path">
        {{ item.name }}
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import useLoginStore from "@/views/login/store/login_store";
import { mapPathToBreadcrumbs } from "@/utils/mapMenus";
const route = useRoute();
const userMenus = useLoginStore().userMenus;

const breadcrumbs = computed(() => mapPathToBreadcrumbs(route.path, userMenus));
// () => route.matched.filter((item) => item.meta && item.meta.title)
console.log(route.matched, " route.matched");
</script>

<style lang="less" scoped></style>
