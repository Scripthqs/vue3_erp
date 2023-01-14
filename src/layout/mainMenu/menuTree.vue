<template>
  <template v-for="item in userMenus" :key="item.id">
    <el-sub-menu v-if="item.children" :index="item.id + ''">
      <template #title>
        <el-icon>
          <component :is="item?.icon?.split('-icon-')[1] ?? 'Folder'" />
        </el-icon>
        <span>{{ item.name }}</span>
      </template>
      <MenuTree :userMenus="item.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="item.id + ''">
      <template #title>
        <el-icon>
          <component :is="item?.icon?.split('-icon-')[1] ?? 'Document'" />
        </el-icon>
        <span>{{ item.name }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
defineProps({
  userMenus: {
    type: Array as any,
    default: () => []
  }
});
</script>

<style lang="less" scoped></style>
