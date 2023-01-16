import { createApp } from "vue";
import App from "./App.vue";
import "normalize.css";
import "./assets/css/index.less";
import router from "./router";
import pinia from "./store";
import registerIcons from "./global/registerIcons";

// 1.全局导入
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
// createApp(App).use(router).use(pinia).mount("#app");

//2.导入部分样式
// import 'element-plus/theme-chalk/el-message.css'

/**
 * 3.使用vite-plugin-style-import
 *   * npm install vite-plugin-style-import consola -D
 *   * 在vite.config.ts中配置
 */

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(registerIcons);
app.mount("#app");
