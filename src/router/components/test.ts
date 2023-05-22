export default [
  {
    path: "/main/test/demo",
    component: () => import("@/views/main/test/demo/index.vue")
  },
  {
    path: "/main/test/list/son1",
    component: () => import("@/views/main/test/list/son1/index.vue")
  },
  {
    path: "/main/test/list/son2/gon1",
    component: () => import("@/views/main/test/list/son2/gon1/index.vue")
  },
  {
    path: "/main/test/list/son2/gon2",
    component: () => import("@/views/main/test/list/son2/gon2/index.vue")
  }
];
