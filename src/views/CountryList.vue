<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-6">
        <h2>Countries List</h2>
        <input
          v-model="searchQuery"
          type="text"
          class="form-control mb-3"
          placeholder="Search Country"
        >
        <div style="max-height: 700px; overflow-y: auto">
          <ul class="list-group">
            <li
              v-for="country in filteredCountries"
              :key="country.countryCode"
              class="list-group-item"
            >
              <router-link
                class="custom-link"
                :to="`/country/${country.countryCode}`"
              >
                {{ country.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-6">
        <h2>Random Countries</h2>
        <div
          class="p-3"
          style="height: 700px"
        >
          <div
            v-for="(country, index) in randomCountries"
            :key="index"
            class="p-3 m-2 border-bottom"
          >
            <h4 class="mb-4">
              <strong>
                <router-link
                  class="custom-link"
                  :to="`/country/${country.countryCode}`"
                >
                  {{ country.country }}
                </router-link>
              </strong>
            </h4>
            <p>
              <strong> Next Holiday: </strong>
              {{ country.nextHoliday }}
            </p>
            <p><strong>Date:</strong> {{ country.holidayDate }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
interface Country {
  countryCode: string;
  name: string;
  nextHoliday: string;
  holidayDate: string;
}

export default defineComponent({
  name: 'CountryList',
  setup() {
    const store = useStore();
    const searchQuery = ref('');

    const countries = computed<Country[]>(() => store.state.pages.countries);
    const randomCountries = computed<Country[]>(
      () => store.state.pages.randomCountries
    );

    const filteredCountries = computed(() => {
      return countries.value.filter((country: Country) =>
        country.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    const initializeData = async () => {
      await store.dispatch('pages/initializeData');
    };

    onMounted(() => {
      initializeData();
    });

    return { searchQuery, filteredCountries, randomCountries };
  },
});
</script>

<style scoped>
.custom-link {
  text-decoration: none;
  color: inherit;
}
</style>
