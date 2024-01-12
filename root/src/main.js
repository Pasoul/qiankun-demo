// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import store from './store'
import { registerMicroApps,runAfterFirstMounted, start, setDefaultMountApp } from 'qiankun';
import fetch from 'isomorphic-fetch';

Vue.config.productionTip = false

let app = null;

function render({ appContent, loading }) {
  /*
  examples for vue
   */
  console.log(appContent)
  if (!app && appContent !== undefined) {
    app = new Vue({
      el: '#root',
      data() {
        return {
          content: appContent,
          loading,
        };
      },
      render(h) {
        return h(App, {
          props: {
            content: this.content,
            loading: this.loading,
          },
        });
      },
    });
  } else if(app == null && appContent !== undefined) {
    app.content = appContent;
    app.loading = loading;
  }
}

function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

render({loading: true});

const request = url =>
  fetch(url, {
    referrerPolicy: 'origin-when-cross-origin',
  });

registerMicroApps(
  [
    {
      name: 'app1', // app name registered
      entry: '//localhost:7001',
      render,
      activeRule: genActiveRule('/app1'),
    },
    {
      name: 'app2',
      entry: '//localhost:7002',
      render,
      activeRule: genActiveRule('/app2'),
    }
  ],
  {
    beforeLoad: [
      app => {
        console.log('before load', app);
      },
    ],
    beforeMount: [
      app => {
        console.log('before mount', app);
      },
    ],
    afterUnmount: [
      app => {
        console.log('after unload', app);
      },
    ],
  },
  {
    fetch: request,
  },

);
setDefaultMountApp('/app1');

runAfterFirstMounted(() => console.info('first app mounted'));

start({ prefetch: true, fetch: request });
