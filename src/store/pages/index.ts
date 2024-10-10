import {
  fetchCountries,
  fetchHolidays,
  fetchRandomCountries,
  initializeData,
} from './actions';
import { SET_COUNTRIES, SET_HOLIDAYS, SET_RANDOM_COUNTRIES } from './mutations';
import { State } from './state';

const state: State = {
  countries: [],
  randomCountries: [],
  holidays: [],
};
export default {
  namespaced: true,
  state,
  actions: {
    initializeData,
    fetchCountries,
    fetchRandomCountries,
    fetchHolidays,
  },
  getters: {},
  mutations: {
    SET_COUNTRIES,
    SET_RANDOM_COUNTRIES,
    SET_HOLIDAYS,
  },
};
