import Vue from "vue";
import Router from "vue-router";
import Api from "@/components/Api";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "api",
      component: Api
    }
  ],
  mode: "history"
});
