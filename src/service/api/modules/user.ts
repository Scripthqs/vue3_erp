import { MODULES, API_VERSION } from "./version";

export default {
  countByPager: MODULES.module_user + API_VERSION + "/demo1/countByPager",
  login: MODULES.module_portal + API_VERSION + "/user/erpLogin" //登录
};
