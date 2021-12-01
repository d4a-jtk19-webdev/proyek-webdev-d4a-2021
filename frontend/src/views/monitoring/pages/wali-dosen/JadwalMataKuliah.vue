<template>
    <v-row :style="{color: currentTheme.onBackground}">
      <v-col cols="12">
        <p class="text-h4 font-weight-bold">List Mahasiswa</p>
        <p class="text-subtitle-1 font-weight-bold">Tahun ajaran 2019</p>
      </v-col>
      <v-col cols="3">
        <breadcumbs :breadcrumb-items="breadcrumbItems"/>
      </v-col>
      <v-col cols="12">
        <v-card elevation="0">
          <p class="text-h4 font-weight-bold">Jadwal Mata Kuliah</p>
          <p><span class="text-subtitle-1 font-weight-bold">Kelas D4 - 3A Semester 5</span><span class="text-subtitle-1"> Tahun ajaran 2021/2022</span><p>
          <v-card-text class="text-subtitle-1">Pilih hari:</v-card-text>
          <div class="v-item-group theme--light v-slide-group v-tabs-bar v-tabs-bar--is-mobile justify-space-around">
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
      <v-col cols="12">
        <v-tabs-items v-model="tab" class="overflow-visible">
          <v-tab-item
            v-for="item in items"
            :key="item"
          >
            <v-sheet>
            <v-card class="pa-5 d-flex flex-no-wrap justify-space-between" style="gap:1rem">
                <v-sheet rounded="lg" class="green lighten-4 pa-3">
                    <div
                    class="rounded-lg pt-3 pb-6 text-h4 white font-weight-bold"
                    :class="{'px-3' : isTablet, 'px-12' : !isTablet}"
                    >
                      1 - 2
                    </div>
                </v-sheet>
                <v-sheet style="width:50%">
                  <v-sheet>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <div v-bind="attrs" v-on="on" class="text-h4 text-truncate font-weight-bold" style="cursor:default">{{ item }} Manajemen Proyek Rekayasa Perangkat Lunak</div>
                      </template>
                      <span>Manajemen Proyek Rekayasa Perangkat Lunak</span>
                    </v-tooltip>
                    <v-sheet class="d-flex flex-no-wrap align-center" style="gap:1rem">
                      <v-card-subtitle class="text-h6" style="padding:0">16TIN5063</v-card-subtitle>
                      <v-card-subtitle class="py-3 text-h5 font-weight-bold" style="color:#232323; padding:0">3 SKS</v-card-subtitle>
                    </v-sheet>
                  </v-sheet>
                  <v-sheet>
                    <div class="text-h6">Dosen Pengampu:</div>
                    <v-sheet class="d-flex flex-wrap justify-start align-center mt-4" style="gap:1rem">
                      <div class="rounded-pill green grey lighten-2 px-4 py-2 text-truncate"
                        >Didik Suwito
                      </div>
                      <div class="rounded-pill green grey lighten-2 px-4 py-2 text-truncate"
                        >Didik Suwito
                      </div>
                      <div class="rounded-pill green grey lighten-2 px-4 py-2 text-truncate"
                        >Didik Suwito
                      </div>
                    </v-sheet>
                  </v-sheet>
                </v-sheet>
                <v-sheet class="d-flex justify-space-between flex-column align-end">
                  <v-sheet class="rounded-lg grey lighten-2 pa-3">
                    <span class="text-h5 font-weight-bold">07.00 </span><span class="text-h5">- 08.40 : WIB</span>
                  </v-sheet>
                    <div class="rounded-lg green lighten-4 pa-3 text-h6">Teori</div>
                </v-sheet>
            </v-card>
            </v-sheet>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
</template>

<script>
import { mapGetters } from "vuex"
import Breadcumbs from "@/views/shared/navigation/Breadcumbs"
// import ListMahasiswa from "../../../../datasource/network/monitoring/listMahasiswa"

export default {
  name: "JadwalMataKuliah",
  components: { Breadcumbs },
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
    isTablet () {
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
