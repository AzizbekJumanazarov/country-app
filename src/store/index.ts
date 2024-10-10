import { createStore } from 'vuex';
import pages from './pages';

const store = createStore({
  modules: {
    pages,
  },
  strict: process.env.NODE_ENV === 'development',
});

export default store;
