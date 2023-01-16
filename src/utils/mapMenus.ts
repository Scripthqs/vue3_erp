import type { RouteRecordRaw } from "vue-router";

function loadLocalRoutes() {
  /**
   * r1.动态获取所有路由对象，放在数组中
   * webpack require.context()
   * vite import.meta.glob()
   */
  const localRouters: RouteRecordRaw[] = [];
  //  r1.1读取router.components下的所有ts文件
  // const files = import.meta.glob("@/router/components/*.ts");
  // const files = import.meta.glob("@/router/components/**/*.ts");
  //如果还有一个文件夹就加/**/
  const files: Record<string, any> = import.meta.glob(
    "@/router/components/*.ts",
    {
      eager: true
      //加上这个代表不是以路由懒加载的形式
    }
  );
  //  r1.2将加载的对象放到localRouters中
  for (const key in files) {
    const module = files[key];
    localRouters.push(...module.default);
  }

  return localRouters;
}

export let firstMenu: any = null;

// export function mapMenusToRoutes(userMenus: any[]) {
//   // 1.加载本地路由
//   const localRouters = loadLocalRoutes();

//   // r2.根据菜单去匹配正确的路由
//   const routes: RouteRecordRaw[] = [];

//   for (const menu of userMenus) {
//     for (const submenu of menu.children) {
//       const route = localRouters.find((item) => item.path === submenu.url);
//       if (route) routes.push(route);
//       if (!firstMenu && route) firstMenu = submenu;
//     }
//   }
//   return routes;
// }

//换成递归写
export function mapMenusToRoutes(userMenus: any[]) {
  // 1.加载本地路由
  const localRouters = loadLocalRoutes();
  // r2.根据菜单去匹配正确的路由
  const routes: RouteRecordRaw[] = [];

  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      const route = localRouters.find((item) => item.path === submenu.url);
      if (route) routes.push(route);
      if (!firstMenu && route) firstMenu = submenu;
    }
  }
  return routes;
}

/**
 * 根据路径去匹配需要显示的菜单
 * @param path 需要匹配的路径
 * @param userMenus 所有的菜单
 */
export function mapPathToMenu(path: string, userMenus: any[]) {
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      if (submenu.url === path) {
        return submenu;
      }
    }
  }
}
