<template>
  <v-data-table :headers="headers" :items="data"/>
</template>

<script>
import {getUsers} from "../api/users";

export default {
  name: '',
  created() {
    this.users = getUsers();
  },
  data() {
    return {
      users: [],
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