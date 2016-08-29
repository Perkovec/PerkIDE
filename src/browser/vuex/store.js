import Vuex from 'vuex';
import app from './modules/app';

const store = new Vuex.Store({
  modules: {
    app,
  },
});

export default store;
