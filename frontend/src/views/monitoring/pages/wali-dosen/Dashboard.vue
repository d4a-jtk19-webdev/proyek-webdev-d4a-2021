<template>
    <v-row :style="{color: currentTheme.onBackground}">
      <v-col cols="12">
        <breadcumbs :breadcrumb-items="breadcrumbItems"/>
      </v-col>
      <template>
        <v-col cols="12">
          <v-card
            color="#272343"
            class="mb-5 rounded-xl"
            width="100%"
          >
            <v-row
              class="justify-space-between"
            >
              <v-col
                class="pa-10 white--text"
                cols="8"
              >
                <div>
                  <p :class="isMobile ? 'text-h4 font-weight-bold' : 'text-h3 font-weight-bold'">Hallo, Sri Ratna Wulan</p>
                  <p class="text-subtitle-1 mb-0 mt-5">Data di bawah ini merupakan data mahasiswa</p>
                  <p class="text-subtitle-1 ma-0"><b>Kelas D4-3A</b> Tahun Ajaran 2019</p>
                </div>
              </v-col>
              <div :class="isMobile? 'mr-6' : 'mr-10'">
                <v-img :src="require('../../../../assets/vectorArt.png')" height="95%" width="95%"/>
              </div>
            </v-row>
          </v-card>
        </v-col>
      </template>
      <v-col width="100%">
        <v-row>
          <!-- Table Section -->
          <v-col :cols="isMobile? '12' : '8'" :style="isMobile ? 'max-width: 100%;' : 'max-width: 674px;'">
            <v-data-table
              :headers="headers"
              :items="listMahasiswa"
              :items-per-page="10"
              :style="{color: currentTheme.colorPrimary}"
              class="text-lg-subtitle-1 font-weight v-sheet--outlined rounded-lg"
              :custom-sort="sortAscending"
              :search="search"
              :custom-filter="searchMahasiswa"
            >
              <template v-slot:top>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  class="mx-4"
                ></v-text-field>
              </template>
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
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <div v-bind="attrs" v-on="on" class="text-truncate" style="cursor:default; max-width: 200px;">
                            {{ item.nama }}
                          </div>
                        </template>
                        <span>{{ item.nama }}</span>
                      </v-tooltip>
                    </div>
                    <div class="text-caption" style="color: #7B7B7B">
                      {{ item.nim }}
                    </div>
                  </v-col>
                </v-row>
              </template>
              <template v-slot:[`item.graph_info`]>
                <v-col
                style="margin:0; padding:0"
                class="stackSheet"
                elevation="2"
                >
                  <v-sparkline
                    :fill="dataGraph.fill"
                    :gradient="dataGraph.positiveTugas"
                    :line-width="dataGraph.width"
                    :padding="dataGraph.padding"
                    :smooth="dataGraph.radius || false"
                    :value="dataGraph.value1"
                    auto-draw
                  ></v-sparkline>
                  <v-sparkline
                    :fill="dataGraph.fill"
                    :gradient="dataGraph.negativePaham"
                    :line-width="dataGraph.width"
                    :padding="dataGraph.padding"
                    :smooth="dataGraph.radius || false"
                    :value="dataGraph.value2"
                    auto-draw
                    class="stackSpark"
                  ></v-sparkline>
                </v-col>
              </template>
              <template v-slot:[`item.tugasPersen`]="{ item }">
                <div v-if="item.tugas.indexOf('+') !== -1">
                  <span style="color: #0FB551;">{{ item.tugas }}</span>
                </div>
                <div v-else>
                  <span style="color: #C42300;">{{ item.tugas }}</span>
                </div>
              </template>
              <template v-slot:[`item.pahamPersen`]="{ item }">
                <div v-if="item.pemahaman.indexOf('+') !== -1">
                  <span style="color: #39AEE0;">{{ item.pemahaman }}</span>
                </div>
                <div v-else>
                  <span style="color: #FF922E;">{{ item.pemahaman }}</span>
                </div>
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
          <v-col :cols="isMobile? '12' : '5'" :style="!isMobile ? 'max-width: 364px' : ''">
            <!-- CALENDER & MATKUL SECTION -->
            <matkul/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
</template>

<script>
import { mapGetters } from "vuex"
import Breadcumbs from "@/views/shared/navigation/Breadcumbs"
import ListMahasiswa from "../../../../datasource/network/monitoring/listMahasiswa"
import Matkul from "@/views/monitoring/component/dosen-wali/matkul"
// import Graph from "@/views/monitoring/component/dosen-wali/graph"

const gradients = [
  ["#0FB551"],
  ["#C42300"],
  ["#39AEE0"],
  ["#FF922E"]
]

export default {
  name: "Dashboard",
  components: { Breadcumbs, Matkul },
  data () {
    return {
      search: "",
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
          sortable: false
        },
        { text: "GRAPH", value: "graph_info", sortable: false },
        { text: "% TUGAS", align: "center", value: "tugasPersen", sortable: false },
        { text: "% PAHAM", align: "center", value: "pahamPersen", sortable: false }
      ],
      listMahasiswa: [
      ],
      dataGraph: {
        fill: false,
        positiveTugas: gradients[0],
        negativeTugas: gradients[1],
        positivePaham: gradients[2],
        negativePaham: gradients[3],
        gradients,
        padding: 0,
        radius: 0,
        value1: [1, 4, 6, 3, 4, 8],
        value2: [9, 7, 6, 3, 4, 5],
        width: 10
      }
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
    },
    isPositive () {
      return true
    }
  },
  async mounted () {
    var mahasiswa = await ListMahasiswa.getMahasiswa()
    this.listMahasiswa = mahasiswa
  },
  methods: {
    sortAscending (items) {
      items.sort((a, b) => {
        if (a.nama >= b.nama) {
          return 1
        } else {
          return -1
        }
      })
      return items
    },
    searchMahasiswa (value, search, item) {
      return (item.nim != null || item.nama != null) &&
        (item.nim.indexOf(search) !== -1 || item.nama.toLowerCase().indexOf(search.toLowerCase()) !== -1)
    }
  }
}
</script>
<style scoped>
.stackSheet {
    position: relative;
}
.stackSpark {
    position: absolute;
    top: 0;
    left: 0;
}
</style>
