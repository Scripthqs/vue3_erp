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

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(registerIcons);
app.mount("#app");
