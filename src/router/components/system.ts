export default [
  {
    path: "/main/system/department",
    name: "department",
    component: () => import("@/views/main/system/department/index.vue")
  },
  {
    path: "/main/system/menu",
    name: "menu",
    component: () => import("@/views/main/system/menu/index.vue")
  },
  {
    path: "/main/system/role",
    component: () => import("@/views/main/system/role/index.vue")
  },
  {
    path: "/main/system/user",
    component: () => import("@/views/main/system/user/index.vue")
  }
];
