<template>
  <div>
    <div class="v-item-group theme--light v-slide-group v-tabs-bar v-tabs-bar--is-mobile justify-space-between">
              <button @click="buttonTabEvent"
                v-for="(day, index) in days"
                :key="day"
                :id="index"
                class="v-btn v-btn--has-bg v-size--x-large rounded-lg font-weight-bold tab mr-2 mb-3 tab">
                {{ day }}
              </button>
    </div>
    <v-tabs-items v-model="tab" class="overflow-visible mt-10">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-sheet>
          <v-card class="pa-4 flex-no-wrap">
            <v-sheet rounded="lg" class="green lighten-4 pa-4 col-12">
              <div class="rounded-lg text-h4 text-center white font-weight-bold mx-16">
                1 - 2
              </div>
            </v-sheet>
            <v-sheet class="col-12 pl-0 pa-0 pt-3">
              <div class="d-flex flex-no-wrap mb-md-13 mb-sm-7">
                <v-col class="pa-0 pe-3 col-6">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <div v-bind="attrs" v-on="on" class="text-h6 text-truncate font-weight-bold mb-1" style="cursor:default">Manajemen Proyek Rekayasa Perangkat Lunak</div>
                    </template>
                    <span>Manajemen Proyek Rekayasa Perangkat Lunak</span>
                  </v-tooltip>
                  <v-sheet class="d-flex flex-no-wrap align-center" style="gap:1rem">
                    <v-card-subtitle class="text-body-2" style="padding:0">16TIN5063</v-card-subtitle>
                    <v-card-subtitle class="text-subtitle-2 font-weight-bold" style="color:#232323; padding:0">3 SKS</v-card-subtitle>
                  </v-sheet>
                </v-col>
                <v-col class="pa-0 pt-1">
                  <v-sheet class="d-flex justify-space-between flex-column align-end">
                    <v-sheet class="rounded-lg grey lighten-2 px-3 py-1">
                      <span class="text-caption font-weight-bold">07.00 </span>
                      <span class="text-caption">- 08.40 (WIB)</span>
                    </v-sheet>
                  </v-sheet>
                </v-col>
              </div>
              <div class="d-flex flex-column">
                <div class="text-h6 mb-3 pt-5">Dosen Pengampu:</div>
                <div class="d-flex flex-row-nowrap justify-space-between mb-3">
                  <v-sheet class="d-flex flex-wrap justify-start align-center" style="gap:0.5rem">
                    <div class="rounded-pill green grey lighten-2 px-3 py-1 text-truncate">
                      Didik Suwito
                    </div>
                    <div class="rounded-pill green grey lighten-2 px-3 py-1 text-truncate">
                      Transmissia
                    </div>
                    <div class="rounded-pill green grey lighten-2 px-3 py-1 text-truncate">
                      Transmissia Semiawan
                    </div>
                    <div class="rounded-pill green grey lighten-2 px-3 py-1 text-truncate">
                      Didik
                    </div>
                  </v-sheet>
                </div>
                <v-layout align-end justify-end>
                  <div class="rounded-lg green lighten-4 px-5 text-center text-h6">Teori</div>
                </v-layout>
              </div>
            </v-sheet>
          </v-card>
        </v-sheet>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  name: "MobileTabMataKuliah",
  props: { days: Array },
  data () {
    return {
      tab: 0,
      items: [0, 1, 2, 3, 4]
    }
  },
  methods: {
    buttonTabEvent (event) {
      console.log(event.target.id)
      this.tab = parseInt(event.target.id)
    }
  }
}
</script>

<style scoped>
  .text-caption{font-size: 14px;}
  .v-slide-group{display: inline-block;}
  .tab {filter: drop-shadow(0px 4px 0px rgba(0, 0, 0, 0.25));background-color:#FFFFFF;}
  .tab:focus{color: #727272; background-color:#F7F7F7; filter: none;}
</style>
