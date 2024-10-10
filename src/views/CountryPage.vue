<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-6">
        <h3>
          {{ countryCode }}
        </h3>
      </div>
      <div class="d-flex justify-content-end col-6">
        <button
          class="btn btn-outline-dark"
          @click="goBack"
        >
          Back to List
        </button>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Date
          </th>
          <th scope="col">
            Name
          </th>
          <th scope="col">
            Local Name
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(holiday, index) in publicHolidays"
          :key="index"
        >
          <td>{{ index + 1 }}</td>
          <td>{{ holiday.date }}</td>
          <td>{{ holiday.name }}</td>
          <td>{{ holiday.localName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <years-range @year-selected="onYearSelected" />
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import YearsRange from '@/components/Years.vue';
import router from '@/router';
export default defineComponent({
  name: 'CountryPage',
  components: { YearsRange },
  setup() {
    const store = useStore();
    const route = useRoute();
    const countryCode = route.params.name;
    const year = new Date().getFullYear();
    const publicHolidays = computed<string[]>(() => store.state.pages.holidays);
    const fetchHolidays = async (year: number) => {
      await store.dispatch('pages/fetchHolidays', { countryCode, year });
    };
    const onYearSelected = (selectedYear: number) => {
      fetchHolidays(selectedYear);
    };
    onMounted(async () => {
      await fetchHolidays(year);
    });

    const goBack = () => {
      router.push({ name: 'list' });
    };

    return { publicHolidays, onYearSelected, countryCode, goBack };
  },
});
</script>

<style scoped></style>
