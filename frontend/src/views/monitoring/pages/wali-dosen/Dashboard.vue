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
          <calender/>
        </v-row>
        <v-row>
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
  components: { Breadcumbs, Calender, Matkul },
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
        { text: "EMAIL", value: "email", sortable: false },
        { text: "KONTAK(PHONE)", value: "nomor_ponsel", sortable: false }
      ],
      listMahasiswa: [
        {
          nama: "Alvira Putrina Daradjat",
          nim: "191524014",
          foto: "https://akademik.polban.ac.id/fotomhsrekap/181524002.jpg",
          email: "alvira.putrina.tif418@polban.ac.id",
          nomor_ponsel: "08124125163"
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
