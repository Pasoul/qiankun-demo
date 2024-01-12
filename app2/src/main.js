 // The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './public-path';

Vue.config.productionTip = false

let instance = null;

export async function bootstrap() {
  console.log('vue app bootstraped');
}

export async function mount(props) {
  console.log('props from main framework', props);
  instance = new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app2');
}

export async function unmount() {
  instance.$destroy();
  instance = null;
}