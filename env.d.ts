/// <reference types="vite/client" />
//当把vscode的volar禁用时，不声明vue文件，main.ts会报错
//可以自己做一个声明，vue文件是一个组件
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent;
  export default component;
}
