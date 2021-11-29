<template>
    <v-row :style="{color: currentTheme.onBackground}">
      <v-col cols="12">
        <p class="text-h4 font-weight-bold">Dashboard</p>
        <p class="text-subtitle-1 font-weight-bold">Tahun ajaran 2019</p>
      </v-col>
      <v-col cols="12">
        <breadcumbs :breadcrumb-items="breadcrumbItems"/>
      </v-col>
      <v-col>
        <v-row>
          <!-- Table Section -->
          <v-col cols="12">
            <v-data-table
              :headers="headers"
              :items="listMahasiswa"
              :items-per-page="5"
              :style="{color: currentTheme.colorPrimary}"
              class="text-lg-subtitle-1 font-weight">
              <template v-slot:[`item.basic_identity`]="{ item }">
                <v-row
                  class="py-6"
                  style="margin:0; gap:1.375rem"
                  :justify="end">
                  <v-avatar
                    size="48">
                    <v-img
                      :src="item.foto"
                      position="start"
                    />
                  </v-avatar>
                  <v-col
                    style="padding:0">
                    <div>
                      {{ item.nama }}
                    </div>
                    <div class="text-caption">
                      {{ item.nim }}
                    </div>
                    <div class="text-caption">
                      {{ item.graph[1] }}
                    </div>
                  </v-col>
                </v-row>
              </template>
              <template v-slot:[`item.graph_info`]="{ item }">
                <v-row
                class="py-6"
                style="margin:0; gap:1.375rem"
                :justify="end">
                  <graph/>
                  <v-col
                  v-for="(itemm, i) in graphData"
                  :key="i"
                  style="padding:0"
                  >
                    <div class="text-caption">
                      {{itemm.radius}}
                      {{item.graph}}
                    </div>
                  </v-col>
                </v-row>
              </template>
            </v-data-table>
            <template v-slot:no-data>
              <p
                :style="{color: currentTheme.colorPrimary}"
                class="text-lg-subtitle-1 font-weight-bold"
              >No Data Available
              </p>
            </template>
          </v-col>
          <!-- CALENDER SECTION -->
          <calender/>
        </v-row>
        <v-row>
          <graph/>
          <matkul/>
        </v-row>
      </v-col>
    </v-row>
</template>

<script>
import { mapGetters } from "vuex"
import Breadcumbs from "@/views/shared/navigation/Breadcumbs"
import ListMahasiswa from "../../../../datasource/network/monitoring/listMahasiswa"
import Calender from "@/views/monitoring/component/dosen-wali/calender"
import Matkul from "@/views/monitoring/component/dosen-wali/matkul"
import Graph from "@/views/monitoring/component/dosen-wali/graph"

const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"]
]

export default {
  name: "Dashboard",
  components: { Breadcumbs, Calender, Matkul, Graph },
  data () {
    return {
      breadcrumbItems: [
        {
          text: "Monitoring",
          disabled: false,
          href: ""
        },
        {
          text: "Dashboard",
          disabled: true,
          href: ""
        }
      ],
      headers: [
        {
          text: "MAHASISWA",
          align: "start",
          value: "basic_identity",
          sortable: true
        },
        {
          text: "GRAPH",
          align: "start",
          value: "graph_info",
          sortable: false
        },
        { text: "EMAIL", value: "email", sortable: false },
        { text: "KONTAK(PHONE)", value: "nomor_ponsel", sortable: false }
      ],
      listMahasiswa: [
        {
          nama: "Alvira Putrina Daradjat",
          nim: "191524014",
          foto: "https://akademik.polban.ac.id/fotomhsrekap/181524002.jpg",
          email: "alvira.putrina.tif418@polban.ac.id",
          nomor_ponsel: "08124125163",
          graph: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]
        }
      ],
      graphData: [
        {
          fill: true,
          selectedGradient: gradients[4],
          gradients,
          padding: 8,
          radius: 10,
          value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
          width: 2
        }
      ],
      matkulItems: [
        { title: "Dasar Dasar Pemrograman (Praktek)", icon: "mdi-view-dashboard" },
        { title: "Matematika Diskit (Teori)", icon: "mdi-forum" }
      ]
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
  },
  async mounted () {
    var mahasiswa = await ListMahasiswa.getMahasiswa()
    this.listMahasiswa = mahasiswa
  }
}
</script>
