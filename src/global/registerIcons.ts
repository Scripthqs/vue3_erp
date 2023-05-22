import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import type { App } from "vue";

function registerIcons(app: App) {
  // console.log("全局注册Element图标:", ElementPlusIconsVue);
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
}

export default registerIcons;
