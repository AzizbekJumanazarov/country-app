import axios from 'axios';
import { ActionContext } from 'vuex';
import { State } from './state';

const endPoint = process.env.VUE_APP_API_URL;

type ActionContextType = ActionContext<State, State>;

export const fetchCountries = async ({ commit }: ActionContextType) => {
  try {
    const response = await axios.get(`${endPoint}/AvailableCountries`);
    commit('SET_COUNTRIES', response.data);
  } catch (error) {
    console.error('Failed to fetch countries:', error);
  }
};

export const initializeData = async ({ dispatch }: ActionContextType) => {
  await dispatch('fetchCountries');
  await dispatch('fetchRandomCountries');
};

export const fetchRandomCountries = async ({
  state,
  commit,
}: ActionContextType) => {
  if (!state.countries || state.countries.length === 0) {
    console.warn('Countries array is empty');
    return;
  }

  const randomCountries = [...state.countries]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const randomCountryData = await Promise.all(
    randomCountries.map(async (country) => {
      const response = await axios.get(
        `${endPoint}/NextPublicHolidays/${country.countryCode}`
      );
      return {
        country: country.name,
        countryCode: response.data[0]?.countryCode || '0',
        nextHoliday: response.data[0]?.name || 'No holiday',
        holidayDate: response.data[0]?.date || 'N/A',
      };
    })
  );

  commit('SET_RANDOM_COUNTRIES', randomCountryData);
};

export const fetchHolidays = async (
  { commit }: ActionContextType,
  { countryCode, year }: { countryCode: string; year: number }
) => {
  const response = await axios.get(
    `${endPoint}/PublicHolidays/${year}/${countryCode}`
  );
  commit('SET_HOLIDAYS', response.data);
};
