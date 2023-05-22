import type { RouteRecordRaw } from "vue-router";
import { localMenu } from "./localMenu.js";
/**
 * @returns 1.本地全部路由
 * 将本地所有的路由保存起来
 */
function loadLocalRoutes() {
  /*
   * r1.动态获取所有路由对象，放在数组中
   * webpack require.context()
   * vite import.meta.glob()
   */
  const localRoutes: RouteRecordRaw[] = [];
  //  1. 读取router.components下的所有ts文件
  // const files = import.meta.glob("@/router/components/*.ts");
  // const files = import.meta.glob("@/router/components/**/*.ts");
  //如果还有一个文件夹就加/**/
  const files: Record<string, any> = import.meta.glob(
    "@/router/components/*.ts",
    {
      eager: true
      //默认这个方法是异步的，加上第二个参数{ eager: true }同步获取
    }
  );
  //  2. 将加载的对象放到localRoutes中
  console.log("加载指定文件夹下的ts文件:", files);
  for (const key in files) {
    const module = files[key];
    localRoutes.push(...module.default);
  }
  console.log("本地所有的路由:", localRoutes);
  return localRoutes;
}

/**
 * firstRoute 第一个菜单
 */
export let firstRoute: any = null;

/**
 * @param userMenus 所有的菜单
 * @returns 映射的路由
 *  根据菜单权限判断具体需要哪些路由，而不是所有路由
 */
export function mapMenusToRoutes(userMenus: any[]) {
  console.log("菜单权限：", userMenus);
  console.log("自定义菜单", localMenu);
  userMenus.push(...localMenu);
  // 1.加载本地路由
  const localRoutes = loadLocalRoutes();
  // 2.根据菜单去匹配正确的路由
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
        //从本地路由中找到有菜单权限的路由
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

  console.log("根据菜单匹配路由：", routes);

  return routes;
}

/**
 * 根据路径去匹配需要显示的菜单
 * @param path 需要匹配的路径
 * @param userMenus 所有的菜单
 */
export function mapPathToMenu(path: string, userMenus: any[]) {
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
  url: string;
}
export function mapPathToBreadcrumbs(path: string, userMenus: any[]) {
  // 1.定义面包屑
  const breadcrumbs: IBreadcrumbs[] = [];

  // 拆分路由
  console.log("当前路由：", path);
  const pathSplit = path.split("/").filter((c) => !!c);
  pathSplit.forEach((c, i) => {
    if (i) {
      pathSplit[i] = pathSplit[i - 1] + "/" + c;
    } else {
      pathSplit[i] = "/" + pathSplit[i];
    }
  });
  console.log("将当前路由拆分：", pathSplit);
  pathSplit.forEach((c) => {
    const findItem = userMenus.find((menu) => menu.url === c);
    if (findItem) {
      breadcrumbs.push(findItem);
      userMenus = findItem.children;
    }
  });
  console.log("获取当前面包屑", breadcrumbs);
  return breadcrumbs;
}
