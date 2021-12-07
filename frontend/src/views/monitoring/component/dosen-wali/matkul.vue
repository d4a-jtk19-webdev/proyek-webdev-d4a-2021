<template>
  <v-card
    class="font-weight-bold rounded-lg px-2"
    outlined
  >
    <div class="text-right">
      <v-btn
        plain
        text
        class="text-caption-md font-weight-bold text-none pt-2"
        href="list-mahasiswa"
      >
        Lihat semua &#8594;
      </v-btn>
    </div>
    <v-list>
      <v-list-item
        v-for="item in matkul_today"
        :key="item.jamke"
        class="tile"
      >
        <v-list-item-title class="text-h5 text-center font-weight-black" style="max-width: 70px;">
          {{ item.jamke }}
        </v-list-item-title>
        <v-divider
          vertical
          class="mr-1"
        >
        </v-divider>
        <v-col :style="isMobile? '' : 'max-width: 140px'" class="text-lg-subtitle-1">
          <v-list-item-subtitle :class="isMobile? 'text-left font-weight-black' : 'text-left font-weight-black text-wrap'" :style="isMobile? '' : 'max-height: 34px; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow:hidden; text-overflow: ellipsis; display: -webkit-box;'">
            {{ item.matkul }}
          </v-list-item-subtitle>
          <v-list-item-subtitle class="text-left">
            {{ item.dosen }}
          </v-list-item-subtitle>
        </v-col>

        <v-list-item-subtitle class="text-right jamke-font-size pt-0">
          {{ item.jam }}
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      matkul_today: [
        {
          jamke: "1-2",
          matkul: "Sistem Informasi (T)",
          dosen: "Transmissia Semiawan",
          jam: "07.00 - 07.50"
        },
        {
          jamke: "3-4",
          matkul: "Pengembangan Website (T)",
          dosen: "Joe Lian Min",
          jam: "07.50 - 08.40"
        },
        {
          jamke: "5-10",
          matkul: "Pengembangan Website (P)",
          dosen: "Lukmannul Hakim",
          jam: "07.00 - 07.50"
        },
        {
          jamke: "11-16",
          matkul: "Manajemen Proyek Rekayasa Perangkat Lunak (P)",
          dosen: "Didik Suwito, Ardianto",
          jam: "07.00 - 07.50"
        }
      ]
    }
  },
  computed: {
    isMobile () {
      return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs
    }
  }
}
</script>
<style scoped>
  .tile {
    margin: 5px;
    border-radius: 10px;
    background: #E9E9E9;
    padding: 10px;
  }
  .tile:hover {
    background: #363740;
  }
  .tile:hover .text-left {
    color: #E9E9E9;
  }
  .tile:hover .text-right {
    color: #E9E9E9;
  }
  .tile:hover .text-center {
    color: #E9E9E9;
  }
  .jamke-font-size {
    font-size: 11px;
  }
</style>
