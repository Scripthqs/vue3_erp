import { LOGIN_TOKEN } from "@/global/constants";
import { localCache } from "@/utils/cache";
import { firstRoute } from "@/utils/mapMenus";

import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/main"
    },
    {
      path: "/login",
      component: () => import("@/views/login/login.vue")
    },
    {
      path: "/main",
      name: "main",
      component: () => import("@/layout/layout.vue")
    },
    {
      path: "/:pathMatch(.*)",
      component: () => import("@/views/errorPages/404.vue")
    }
  ]
});

// const localRoutes = [
//   {
//     path: "/main/analysis/overview",
//     component: () => import("@/views/main/analysis/overview/index.vue")
//   },
//   {
//     path: "/main/analysis/dashboard",
//     component: () => import("@/views/main/analysis/dashboard/index.vue")
//   }
// ];

//动态添加路由

// router.addRoute("main", localRoutes[0]);
// router.addRoute("main", localRoutes[1]);

//导航守卫
router.beforeEach((to, from) => {
  // console.log(to, from);
  const token = localCache.getCache(LOGIN_TOKEN);
  if (to.path === "/main" && !token) {
    return "/login";
  }
  //如果进入到main中
  if (to.path === "/main") {
    console.log(firstRoute, "firstRoute");
    return firstRoute?.path;
  }
});

export default router;
