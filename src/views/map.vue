<template>
  <div style=" margin-top: 150px;">
    <div style="margin-bottom:50px; display: flex; flex-wrap: wrap; justify-content: space-around">
      <div class="my-2">
        <v-btn
            x-large
            dark
            width="150px"
        >
          Extra
        </v-btn>
      </div>
      <div class="my-2">
        <v-btn
            x-large
            dark
            width="150px"
        >
          Extra
        </v-btn>
      </div>
      <div class="my-2">
        <v-btn
            x-large
            dark
            width="150px"
        >
          Extra
        </v-btn>
      </div>
      <div class="my-2">
        <v-btn
            x-large
            dark
            width="150px"
        >
          Extra
        </v-btn>
      </div>
      <div class="my-2">
        <v-btn
            x-large
            dark
            width="150px"
        >
          Extra
        </v-btn>
      </div>
    </div>
    <l-map style="height: 80vh; width: 80vw;  z-index: 1; margin: auto;" :zoom="zoom" :center="center" @click="addMarker">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="markerLatLng" >
        <l-icon :icon-size= [1,1] icon-url="icon.png"> </l-icon>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';
import {getMarkers} from "../api/markers";
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
    addMarker(e) {
      console.log(this.markers);
      this.markerLatLng = [e.latlng.lat,e.latlng.lng],
      this.markers.push(e.latlng);
      console.log(e.latlng);
    }
  }
}

</script>
<style>
.leaflet-control-attribution{
  display: none !important;
}
</style>
