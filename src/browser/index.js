import Vue from 'vue';
import store from './vuex/store';
import app from './app.vue';

new Vue({ // eslint-disable-line no-new
  el: '#app',
  store,
  render: h => h(app),
});
