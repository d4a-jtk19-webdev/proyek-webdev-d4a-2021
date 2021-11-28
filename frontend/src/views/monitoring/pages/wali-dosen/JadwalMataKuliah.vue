<template>
    <v-row :style="{color: currentTheme.onBackground}">
      <v-col cols="12">
        <p class="text-h4 font-weight-bold">List Mahasiswa</p>
        <p class="text-subtitle-1 font-weight-bold">Tahun ajaran 2019</p>
      </v-col>
      <v-col cols="12">
        <breadcumbs :breadcrumb-items="breadcrumbItems"/>
      </v-col>
      <v-col cols="12">
        <v-card elevation="0">
          <v-card-title>Jadwal Mata Kuliah</v-card-title>
          <v-card-subtitle>Kelas D4 - 3A, Semester 5 Tahun ajaran 2021/2022</v-card-subtitle>
          <v-tabs fixed-tabs hide-slider v-model="tab" color="#525364">
            <v-tab
              v-for="day in days"
              :key="day"
            >
              <div>{{ day }}</div>
            </v-tab>
          </v-tabs>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-tabs-items v-model="tab" class="overflow-visible">
          <v-tab-item
            v-for="item in items"
            :key="item"
          >
            <v-sheet>
            <v-card class="pa-4 d-flex flex-no-wrap justify-space-between pa-3">
                <v-sheet rounded="lg" class="green lighten-4 pa-3">
                    <div class="rounded-lg pa-3 text-h6 white">1 - 2</div>
                </v-sheet>
                <v-sheet class="col-3">
                  <v-sheet>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <div v-bind="attrs" v-on="on" class="text-h5 text-truncate">Manajemen Proyek Rekayasa Perangkat Lunak</div>
                      </template>
                      <span>Manajemen Proyek Rekayasa Perangkat Lunak</span>
                    </v-tooltip>
                    <v-sheet class="d-flex flex-no-wrap justify-space-between">
                      <v-card-subtitle>16TIN5063</v-card-subtitle>
                      <v-card-subtitle>3 SKS</v-card-subtitle>
                    </v-sheet>
                  </v-sheet>
                  <v-sheet>
                    <div class="text-h6">Dosen Pengampu:</div>
                    <v-sheet class="d-flex flex-wrap justify-start align-center">
                      <div
                        class="rounded-pill green grey lighten-2 pa-1 text-truncate ma-2"
                      >Didik Suwito</div>
                      <div
                        class="rounded-pill green grey lighten-2 pa-1 text-truncate"
                      >Transmissia Semiawan</div>
                    </v-sheet>
                  </v-sheet>
                </v-sheet>
                <v-sheet class="d-flex justify-space-between flex-column align-end">
                  <v-sheet class="rounded-lg grey lighten-2 pa-3 text-h6">
                    <div>07.00 - 08.40 : WIB</div>
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
      tab: null,
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
      return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs
    },
    identity: function () {
      return this.$store.getters.identity
    }
  }
}
</script>
