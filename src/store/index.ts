import { createPinia } from "pinia";
import type { App } from "vue";
import useLoginStore from "@/views/login/store/login_store";

const pinia = createPinia();

function registerStore(app: App) {
  app.use(pinia);
  const loginStore = useLoginStore();
  loginStore.loadLocalCacheAction();
}
export default registerStore;
