<template>
  <div style=" margin-top: 150px;">
    <div style="margin-bottom:50px; display: flex; flex-wrap: wrap; justify-content: space-around">
      <div class="my-2">
        <v-btn
            x-large
            dark
            width="150px"
        >
          Nature
        </v-btn>
      </div>
      <div class="my-2">
        <v-btn
            x-large
            dark
            width="150px"
        >
        <v-icon>
          mdi-city-variant-outline
        </v-icon>
          Urbain
        </v-btn>
      </div>
      <div class="my-2">
        <v-btn
            x-large
            dark
            width="150px"
        >
          Street art
        </v-btn>
      </div>
      <div class="my-2">
        <v-btn
            x-large
            dark
            width="150px"
        >
          Lac
        </v-btn>
      </div>
      <div class="my-2">
        <v-btn
            x-large
            dark
            width="150px"
        >
          Montagne
        </v-btn>
      </div>
    </div>
    <l-map style="height: 80vh; width: 80vw;  z-index: 1; margin: auto;" :zoom="zoom" :center="center" @click="newMarker">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <div v-for="marker in markers" :key="marker.id">
        <l-marker :lat-lng="marker" >
        </l-marker>
      </div>
    </l-map>
  </div>
</template>

<script>
import Vue from 'vue';
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';
import {getMarkers,addMarker} from "../api/markers";
import {getUsers} from "../api/users";


export default {
  async created() {
    this.markers = await getMarkers();
    this.users = await getUsers();
  },
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
          'Spot-it',
      zoom: 15,
      center: [45.2, 5.7],
      markerLatLng: [45.2, 5.7],
      markers: [],
      markerOptions: {opacity: 0, width:"1px", height:"1px"},
    };
  },
  methods: {
    newMarker(e) {
      this.markers.push([e.latlng.lat,e.latlng.lng]);
      addMarker(e.latlng.lat,e.latlng.lng,'test','testcom',1)
    }
  }
}

</script>
<style>
.leaflet-control-attribution{
  display: none !important;
}
</style>
