export default [
  {
    path: "/main/story/chat",
    component: () => import("@/views/main/story/chat/index.vue")
  },
  {
    path: "/main/story/list",
    component: () => import("@/views/main/story/list/index.vue")
  }
];
