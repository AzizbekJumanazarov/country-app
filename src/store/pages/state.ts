export interface State {
  countries: Array<{ countryCode: string; name: string }>;
  randomCountries: Array<{ countryCode: string; name: string }>;
  holidays: Array<{ date: string; name: string; localName: string }>;
}

export default {
  countries: [],
  randomCountries: [],
  holidays: [],
};
