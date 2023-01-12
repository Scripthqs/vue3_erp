import { LOGIN_TOKEN } from "@/global/constants";
import { localCache } from "@/utils/cache";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/login",
      component: () => import("@/views/login/login.vue")
    },
    {
      path: "/home",
      component: () => import("@/layout/layout.vue")
    },
    {
      path: "/:pathMatch(.*)",
      component: () => import("@/views/errorPages/404.vue")
    }
  ]
});

//导航守卫
router.beforeEach((to, from) => {
  console.log(to, from);
  const token = localCache.getCache(LOGIN_TOKEN);
  if (to.path === "/home" && !token) {
    return "/login";
  }
});

export default router;
