import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import { defineCustomElements } from 'web-components/dist/loader';
import Meta from 'vue-meta';

Vue.use(Meta, {
  keyName: 'metaInfo',
});

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/web-components\w*/];

defineCustomElements(window);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
