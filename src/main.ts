// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import {mainRouters} from "./router/router";

Vue.config.productionTip = false;
Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: mainRouters
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
