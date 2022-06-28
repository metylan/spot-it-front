<template>
  <div style=" margin-top: 150px;">
    <div style="margin-bottom:50px; display: flex; flex-wrap: wrap; justify-content: space-around">
      <div class="my-2">
        <v-btn x-large dark width="150px" height="150px">
          <v-icon size="100">
            mdi-forest
          </v-icon>
          <p>Nature</p>
        </v-btn>
      </div>
      <div class="my-2">
        <v-btn x-large dark width="150px" height="150px">
          <v-icon size="100">
            mdi-city-variant-outline
          </v-icon>
          <p>Urbain</p>
        </v-btn>
      </div>
      <div class="my-2">
        <v-btn x-large dark width="150px" height="150px">
          <v-icon size="100">
            mdi-spray
          </v-icon>
          <p>Street art</p>
        </v-btn>
      </div>
      <div class="my-2">
        <v-btn x-large dark width="150px" height="150px">
          <v-icon size="100">
            mdi-waves
          </v-icon>
          <p>Lac</p>
        </v-btn>
      </div>
      <div class="my-2">
        <v-btn x-large dark width="150px" height="150px">
          <v-icon size="100">
            mdi-image-filter-hdr
          </v-icon>

          <p>Montagne</p>

        </v-btn>
      </div>
    </div>
    <l-map style="height: 80vh; width: 80vw;  z-index: 1; margin: auto;" :zoom="zoom" :center="center"
      @click="newMarker">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <div v-for="marker in markers" :key="marker.id">
        <l-marker :lat-lng="marker">
        </l-marker>
      </div>
    </l-map>
    <add-marker-vue v-if="dialog" :dialog.sync="dialog" :position="position" @marker="refresh()" />
  </div>
</template>

<script>
import Vue from 'vue';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import { getMarkers, addMarker } from "../api/markers";
import { getUsers } from "../api/users";
import addMarkerVue from '../components/addMarker.vue';


export default {
  async created() {
    this.refresh();
    this.users = await getUsers();
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    addMarkerVue
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        'Spot-it',
      zoom: 15,
      center: [45.2, 5.7],
      markers: [],
      markerOptions: { opacity: 0, width: "1px", height: "1px" },
      position: [],
      dialog: false,
    };
  },
  methods: {
    newMarker(e) {
      this.position = [e.latlng.lat, e.latlng.lng];
      this.dialog = true;
    },
    async refresh() {
      this.markers = await getMarkers();
    }
  }
}

</script>
<style>
.leaflet-control-attribution {
  display: none !important;
}

.v-btn__content {
  display: block;
}
</style>
