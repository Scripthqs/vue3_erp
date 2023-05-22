export default [
  {
    path: "/main/product/category",
    component: () => import("@/views/main/product/category/index.vue")
  },
  {
    path: "/main/product/goods",
    component: () => import("@/views/main/product/goods/index.vue")
  }
];
