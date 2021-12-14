<template>
  <div>
    <v-row
      :style="{color: currentTheme.onBackground}"
      v-if="!isMobile"
    >
      <v-col cols="12" class="pb-1">
        <breadcumbs :breadcrumb-items="breadcrumbItems"/>
      </v-col>
      <v-col cols="12" class="mb-1">
        <v-card elevation="0">
          <p class="text-md-h3 text-sm-h4 font-weight-bold">Jadwal Mata Kuliah</p>
          <p class="mb-6">
            <span class="text-md-h5 text-sm-h6 font-weight-bold">Kelas D4 - 3A Semester 5</span>
            <span class="text-md-h5 text-sm-h6 font-weight-regular"> Tahun ajaran 2021/2022</span>
          </p>
          <v-card-text class="text-h6 font-weight-regular pa-0 mb-md-4 mb-sm-2">Pilih hari:</v-card-text>
          <div class="v-item-group theme--light v-slide-group v-tabs-bar v-tabs-bar--is-mobile justify-space-between">
            <button @click="buttonTabEvent"
              v-for="(day, index) in days"
              :key="day"
              :id="index"
              class="v-btn v-btn--has-bg theme--light v-size--x-large rounded-lg font-weight-bold tab">
            {{ day }}
            </button>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" class="py-5">
        <v-tabs-items v-model="tab" class="overflow-visible">
          <v-tab-item
            v-for="item in items"
            :key="item"
          >
            <v-sheet>
              <v-card class="pa-5 d-flex flex-no-wrap">
                <v-sheet rounded="lg" class="green lighten-4 pa-3 col-md-2 col-sm-3">
                    <div class="rounded-lg px-md-6 px-sm-3 py-sm-1 py-md-7 text-h4 text-center white font-weight-bold">
                      1 - 2
                    </div>
                </v-sheet>
                <v-sheet class="col-md-10 col-sm-9 pl-5 pa-0">
                  <div class="d-flex flex-no-wrap mb-md-13 mb-sm-7">
                    <v-col class="pa-0 col-7">
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <div v-bind="attrs" v-on="on" class="text-truncate font-weight-bold mb-1" style="cursor:default" :style="[isMobile ? {'font-size':'1.125rem'} : isPad ? {'font-size':'1.5rem'} : {'font-size':'1.875rem'}]">Manajemen Proyek Rekayasa Perangkat Lunak</div>
                        </template>
                        <span>Manajemen Proyek Rekayasa Perangkat Lunak</span>
                      </v-tooltip>
                      <v-sheet class="d-flex flex-no-wrap align-center" style="gap:1rem">
                        <v-card-subtitle :style="[isMobile ? {'font-size':'0.75rem'} : isPad ? {'font-size':'0.875rem'} : {'font-size':'1.125rem'}]" style="padding:0">16TIN5063</v-card-subtitle>
                        <v-card-subtitle class="font-weight-bold" :style="[isMobile ? {'font-size':'0.75rem'} : isPad ? {'font-size':'1rem'} : {'font-size':'1.125rem'}]" style="color:#232323; padding:0">3 SKS</v-card-subtitle>
                      </v-sheet>
                    </v-col>
                    <v-col class="pa-0 ">
                      <v-sheet class="d-flex justify-space-between flex-column align-end">
                        <v-sheet class="rounded-lg grey lighten-2 px-3 py-1">
                          <span class="font-weight-bold" :style="isPad?{'font-size':'1rem'}:{'font-size':'1.5rem'}">07.00 </span>
                          <span :style="isPad?{'font-size':'1rem'}:{'font-size':'1.5rem'}">- 08.40 (WIB)</span>
                        </v-sheet>
                      </v-sheet>
                    </v-col>
                  </div>
                  <div class="d-flex flex-column">
                      <div class="mb-3" :style="[isMobile ? {'font-size':'0.875rem'} : {'font-size':'1.125rem'}]">Dosen Pengampu:</div>
                      <div class="d-flex flex-row-nowrap justify-space-between">
                        <v-sheet class="d-flex flex-wrap justify-start align-center" style="gap:1rem">
                          <div class="rounded-pill green grey lighten-2 px-4 py-2 text-truncate" :style="[isMobile ? {'font-size':'0.75rem'} : isPad ? {'font-size':'0.75rem'} : {'font-size':'1rem'}]">
                            Didik Suwito
                          </div>
                          <div class="rounded-pill green grey lighten-2 px-4 py-2 text-truncate" :style="[isMobile ? {'font-size':'0.75rem'} : isPad ? {'font-size':'0.75rem'} : {'font-size':'1rem'}]">
                            Transmissia Semiawan
                          </div>
                        </v-sheet>
                        <div class="d-flex align-center rounded-lg green lighten-4 px-4 text-center" style="font-weight:600" :style="[isMobile ? {'font-size':'1.125rem'} : isPad ? {'font-size':'1.125rem'} : {'font-size':'1.25rem'}]">Teori</div>
                      </div>
                  </div>
                </v-sheet>
              </v-card>
            </v-sheet>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12" class="pb-1">
        <breadcumbs :breadcrumb-items="breadcrumbItems"/>
      </v-col>
      <v-col cols="12">
        <v-card elevation="0">
          <p class="mb-0 text-h4 font-weight-bold">Jadwal Mata Kuliah</p>
          <p class="mb-5">
            <span class="text-body-2 font-weight-bold">Kelas D4 - 3A Semester 5</span>
            <span class="text-body-2 font-weight-regular"> Tahun ajaran 2021/2022</span>
          </p>
          <mobile-tabs-mata-kuliah
            :days="days"
          />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import Breadcumbs from "@/views/shared/navigation/Breadcumbs"
import MobileTabsMataKuliah from "../../component/dosen/MobileTabsMataKuliah.vue"
// import ListMahasiswa from "../../../../datasource/network/monitoring/listMahasiswa"

export default {
  name: "JadwalMataKuliah",
  components: { Breadcumbs, MobileTabsMataKuliah },
  data () {
    return {
      breadcrumbItems: [
        {
          text: "Monitoring",
          disabled: false,
          href: ""
        },
        {
          text: "Jadwal Mata Kuliah",
          disabled: true,
          href: ""
        }
      ],
      tab: 0,
      items: [0, 1, 2, 3, 4],
      days: ["SENIN", "SELASA", "RABU", "KAMIS", "JUMAT"]
    }
  },
  computed: {
    ...mapGetters({
      currentTheme: "theme/getCurrentColor",
      isDark: "theme/getIsDark"
    }),
    isMobile () {
      return this.$vuetify.breakpoint.xs
    },
    isPad () {
      return this.$vuetify.breakpoint.sm
    },
    identity: function () {
      return this.$store.getters.identity
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
.tab {filter: drop-shadow(0px 7px 0px rgba(0, 0, 0, 0.25));background-color:white;}
.tab:hover{background-color:#525364;}
.tab:focus{background-color:#F7F7F7;filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))}
</style>
