<template>
  <div class="container mt-5 mb-5">
    <div class="row row-eq-height">
      <div class="col-md-4">
        <functional-calendar
          :change-month-function="true"
          :change-year-function="true"
          :is-date-range="true"
          :is-dark="true"
          class="calendar"
        ></functional-calendar>
        <highlight-code
          lang="html"
          code="<functional-calendar :is-dark='true'></functional-calendar>"
        ></highlight-code>
      </div>
    </div>
  </div>
</template>

<script>
import { FunctionalCalendar } from "vue-functional-calendar"

export default {
  name: "App",
  data () {
    return {
      calendar: {},
      data: {
        clieckedToday: false
      },
      markedDateRange: {
        start: "2/" + this.getCurrentMonth() + "/2020",
        end: "7/" + this.getCurrentMonth() + "/2020"
      },
      markedDates: [
        "16/" + this.getCurrentMonth() + "/2020",
        "18/" + this.getCurrentMonth() + "/2020",
        "20/" + this.getCurrentMonth() + "/2020",
        "21/" + this.getCurrentMonth() + "/2020"
      ]
    }
  },
  methods: {
    preMonth () {
      this.$refs.Calendar.PreMonth()
    },
    nextMonth () {
      this.$refs.Calendar.NextMonth()
    },
    preYear () {
      this.$refs.Calendar.PreYear()
    },
    nextYear () {
      this.$refs.Calendar.NextYear()
    },
    chooseDate (date) {
      this.$refs.Calendar.ChooseDate(date)
    },
    getCurrentMonth () {
      return new Date().getMonth() + 1
    }
  },
  components: {
    FunctionalCalendar
  }
}
</script>

<style>
.green-line {
  width: 15px;
  position: absolute;
  height: 2px;
  background-color: #45cc0d;
  bottom: 3px;
  left: calc(50% - 7.5px);
}

.green-point {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #45cc0d;
  bottom: 3px;
  left: calc(50% - 4px);
}

.orange-point {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #EBAE05;
  bottom: 3px;
  left: calc(50% - 4px);
}
</style>
