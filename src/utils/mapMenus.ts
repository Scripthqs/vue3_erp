import type { RouteRecordRaw } from "vue-router";

/**
 * @returns 本地全部路由
 */
function loadLocalRoutes() {
  /*
   * r1.动态获取所有路由对象，放在数组中
   * webpack require.context()
   * vite import.meta.glob()
   */
  const localRoutes: RouteRecordRaw[] = [];
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
  //  r1.2将加载的对象放到localRoutes中
  for (const key in files) {
    const module = files[key];
    localRoutes.push(...module.default);
  }
  return localRoutes;
}

/**
 * firstRoute 第一个菜单
 */
export let firstRoute: any = null;

/**
 * @param userMenus 所有的菜单
 * @returns 映射的路由
 */
export function mapMenusToRoutes(userMenus: any[]) {
  // 1.加载本地路由
  const localRoutes = loadLocalRoutes();
  // r2.根据菜单去匹配正确的路由
  const routes: RouteRecordRaw[] = [];

  //确定只有2层菜单
  // for (const menu of userMenus) {
  //   for (const submenu of menu.children) {
  //     const route = localRoutes.find((item) => item.path === submenu.url);
  //     if (route) routes.push(route);
  //     if (!firstRoute && route) firstRoute = submenu;
  //   }
  // }
  //不确定多少层菜单，用递归
  function _getRoute(menus: any[]) {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = localRoutes.find((item) => item.path === menu.url);
        if (route) routes.push(route);
        if (!firstRoute && route) firstRoute = route;
      } else {
        if (menu.type === 1 && menu.children.length) {
          routes.push({ path: menu.url, redirect: menu.children[0].url });
        }
        _getRoute(menu.children ?? []);
      }
    }
  }
  _getRoute(userMenus);

  return routes;
}

/**
 * 根据路径去匹配需要显示的菜单
 * @param path 需要匹配的路径
 * @param userMenus 所有的菜单
 */
export function mapPathToMenu(path: string, userMenus: any[]) {
  // for (const menu of userMenus) {
  //   for (const submenu of menu.children) {
  //     if (submenu.url === path) {
  //       return submenu;
  //     }
  //   }
  // }
  let subMenu: any = {};
  function _getPath(menus: any[]) {
    for (const menu of menus) {
      if (menu.url === path) {
        subMenu = menu;
      } else {
        _getPath(menu.children ?? []);
      }
    }
  }
  _getPath(userMenus);
  return subMenu;
}

interface IBreadcrumbs {
  name: string;
  path: string;
}
export function mapPathToBreadcrumbs(path: string, userMenus: any[]) {
  // 1.定义面包屑
  const breadcrumbs: IBreadcrumbs[] = [];

  // 2.遍历获取面包屑层级
  // for (const menu of userMenus) {
  //   for (const submenu of menu.children) {
  //     if (submenu.url === path) {
  //       // 1.顶层菜单
  //       breadcrumbs.push({ name: menu.name, path: menu.url });
  //       // 2.匹配菜单
  //       breadcrumbs.push({ name: submenu.name, path: submenu.url });
  //     }
  //   }
  // }

  function _getBreadcrumbs(menus: any[]) {
    for (const menu of menus) {
      breadcrumbs.push({ name: menu.name, path: menu.url });
      if (menu.url === path) {
        breadcrumbs.push({ name: menu.name, path: menu.url });
      } else if (menu.children) {
        _getBreadcrumbs(menu.children ?? []);
        breadcrumbs.pop();
      } else {
        breadcrumbs.pop();
      }
    }
  }
  _getBreadcrumbs(userMenus);
  return breadcrumbs;
}
