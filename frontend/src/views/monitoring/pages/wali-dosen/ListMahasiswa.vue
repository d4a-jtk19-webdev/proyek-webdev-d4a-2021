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
              </v-col>
            </v-row>
          </template>
        </v-data-table>
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
                  {{item.nama}}
                </div>
                <div class="text-caption">
                  {{item.nim}}
                </div>
              </v-col>
            </v-row>
          </template>
        <template v-slot:no-data>
          <p
            :style="{color: currentTheme.colorPrimary}"
            class="text-lg-subtitle-1 font-weight-bold"
          >No Data Available
          </p>
        </template>
      </v-col>
    </v-row>
</template>

<script>
import { mapGetters } from "vuex"
import Breadcumbs from "@/views/shared/navigation/Breadcumbs"
import ListMahasiswa from "../../../../datasource/network/monitoring/listMahasiswa"

export default {
  name: "ListMahasiswa",
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
          text: "List Mahasiswa",
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
