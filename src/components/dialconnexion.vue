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
                      label="Email"
                      :rules="[rules.require,rules.mail]"
                      v-model="form.mail"
                      type="email"
                  ></v-text-field>
                
                  <v-text-field
                      label="Mot de passe"
                      type="password"
                      :rules="[rules.require]"
                      v-model="form.password"
                  ></v-text-field>
                </v-form>
            </v-container>            
            <p v-if="errorlogin" style="color:red; margin-top:20px;">L’adresse e-mail ou le mot de passe que vous avez saisi(e) ne permet pas à la connexion</p>
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
                @click="submit"
            >
              Connexion
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
</template>
<script>
import {login} from "../api/auth"

export default {
  name: 'dialconnexion',
  props:{
    dialog:{required:true,type:Boolean}
  },
  data() {
    return {
      data: [],
      form: {
        mail:"",
        password:""
      },
      errorlogin: false,
      rules:{
        require:(v)=>!!v||"Champ obligatoire",
        mail:(v)=>{
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(v)||"Email invalide"
        }
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
  methods:{
    async submit(){
        if(this.$refs.connexionForm.validate()){
            try {
                await login(this.form)
                this.errorlogin = false
                this.connexiondial = false
            } catch (error) {
                this.errorlogin = true
            }
        }    
    }
  },
  components: {
  }
}
</script>