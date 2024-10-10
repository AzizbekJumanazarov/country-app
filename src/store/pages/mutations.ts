import { State } from './state';

export const SET_COUNTRIES = (
  state: State,
  countries: Array<{ countryCode: string; name: string }>
) => {
  state.countries = countries;
};

interface RandomCountry {
  countryCode: string;
  name: string;
}

export const SET_RANDOM_COUNTRIES = (
  state: State,
  randomCountries: RandomCountry[]
) => {
  state.randomCountries = randomCountries;
};
interface Holiday {
  date: string;
  name: string;
  countryCode: string;
  localName: string;
}
export const SET_HOLIDAYS = (state: State, holidays: Holiday[]) => {
  state.holidays = holidays;
};
