export default [
  {
    path: "/main/analysis/overview",
    name: "overview",
    component: () => import("@/views/main/analysis/overview/index.vue")
  },
  {
    path: "/main/analysis/dashboard",
    component: () => import("@/views/main/analysis/dashboard/index.vue")
  },
  {
    path: "/main/analysis/test",
    component: () => import("@/views/main/analysis/test/index.vue")
  }
];
