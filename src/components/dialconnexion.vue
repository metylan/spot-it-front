<template>
<v-dialog
          v-model="connexiondial"
          persistent
          max-width="600px"
      >
        <v-card>
          <v-card-title>
            <span class="text-h5">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>
                <v-form
                    ref="connexionForm"
                >
                  <v-text-field
                      label="Email*"
                      required
                      v-model="form.mail"
                  ></v-text-field>
                
                  <v-text-field
                      label="Mot de passe*"
                      type="password"
                      required
                      v-model="form.password"
                  ></v-text-field>
                </v-form>
            </v-container>
            <small>*Champs obligatoire</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="blue darken-1"
                text
                @click="connexiondial = false"
            >
              Annuler
            </v-btn>
            <v-btn
                color="blue darken-1"
                text
                @click=""
            >
              Connexion
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
</template>
<script>
import {getUsers} from "../api/users";

export default {
  name: 'dialconnexion',
  created() {
    this.data = getUsers();
  },
  props:{
    dialog:{required:true,type:Boolean}
  },
  data() {
    return {
      data: [],
      form: {
        mail:"",
        password:""
      }  
    }
  },
  computed:{
    connexiondial:{
        get(){
            return this.dialog;
        },
        set(v){
            console.log(v);
            this.$emit("update:dialog",v);
        }
    }
  },
  components: {
  }
}
</script>