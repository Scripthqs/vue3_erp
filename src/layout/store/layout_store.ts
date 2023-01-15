import { defineStore } from "pinia";
import { localCache } from "@/utils/cache";

const useLayoutStore = defineStore("layout", {
  state: () => ({
    isFold: localCache.getCache("isFold") ?? false
  }),
  actions: {
    foldAction(change: boolean) {
      this.isFold = change;
      localCache.setCache("isFold", this.isFold);
    }
  }
});
export default useLayoutStore;
