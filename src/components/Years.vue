<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-12">
        <div class="years-list">
          <button
            v-for="year in listOfYears"
            :key="year"
            class="year-item"
            :class="year == currentYear ? 'activeYear' : ''"
            @click="selectYear(year)"
          >
            {{ year }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import siteConstants from '../@core/constants/site-constants';
export default defineComponent({
  name: 'YearsRange',
  emits: ['year-selected'],
  setup() {
    return {};
  },
  data() {
    return {
      listOfYears: [] as number[],
      currentYear: new Date().getFullYear(),
    };
  },
  created() {
    this.getYears();
  },
  methods: {
    getYears() {
      for (let year = siteConstants.MIN_YEAR; year <= siteConstants.MAX_YEAR; year++) {
        this.listOfYears.push(year);
      }
    },
    selectYear(year: number) {
      this.currentYear = year;
      this.$emit('year-selected', year);
    },
  },
});
</script>
<style scoped>
.years-list {
  display: flex;
  gap: 10px;
}

.year-item {
  padding: 5px 10px;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 4px;
}
.activeYear {
  background-color: #b8b8b8;
}
</style>
