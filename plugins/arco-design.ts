import { defineNuxtPlugin } from "#app";
import ArcoVue from "@arco-design/web-vue";
import "@arco-themes/vue-mengtu/index.less";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(ArcoVue);
});