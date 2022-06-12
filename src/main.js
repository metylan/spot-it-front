import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import vuetify from './plugins/vuetify'
import axios from "axios";
import VueScrollTo from 'vue-scrollto';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://liaxum.fr/spotit";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

Vue.config.productionTip = false

new Vue({

  router,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
