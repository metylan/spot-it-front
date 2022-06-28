<template>
  <v-app id="inspire">
    <v-row justify="center">
      
    </v-row>
  </v-app>
</template>

<script>
import {getUsers} from "../api/users";

export default {
  name: '',
  created() {
    this.data = getUsers();
  },
  data() {
    return {
      data: [],
      headers: [
        {
          text: 'Id',
          value: 'id'
        }
      ]
    }
  },
  components: {
  }
}
</script>
<style>


</style>