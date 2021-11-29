<template>
  <v-card
    color="indigo darken-2"
    flat
    max-width="500"
  >
    <v-card
      outlined
    >
      <v-navigation-drawer
        permanent
        floating
        width="350"
      >
        <v-list
          dense
        >
          <v-list-item
            v-for="item in infoMatkul"
            :key="item.matkul"
            link
            class="my-2"
          >
            <!-- <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon> -->

            <!-- <v-list-item-content>
              <v-list-item-title class="text-h4 py-2">{{ item.jamke }}|</v-list-item-title>
            </v-list-item-content> -->
            <v-list-item-content class="text-title">
              <v-list-item-title class="font-weight-bold">{{ item.matkul }}</v-list-item-title>
              <v-list-item-title>{{ item.dosen }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title>{{ item.jam }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      matkulItems: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" },
        { title: "Test", icon: "mdi-forum" }
      ],
      infoMatkul: [
        {
          jamke: "1-2",
          matkul: "Sistem Informasi",
          dosen: "Transmissia Semiawan",
          jam: "07.00 - 08.40"
        },
        {
          jamke: "1-2",
          matkul: "Sistem Informasi",
          dosen: "Transmissia Semiawan",
          jam: "07.00 - 08.40"
        },
        {
          jamke: "1-2",
          matkul: "Sistem Informasi",
          dosen: "Transmissia Semiawan",
          jam: "07.00 - 08.40"
        }
      ]
    }
  }
}
</script>
