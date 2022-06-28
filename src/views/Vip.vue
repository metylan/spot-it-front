<template>
  <div>
  <v-parallax
      dark
      src="../assets/v2osk-1Z2niiBPg5A-unsplash.jpg"
      >
      <v-row
        align="center"
        justify="center"
        class="bg-transp"
        style="margin-top: 90px"
        >
        <v-col
            class="text-center"
            cols="12"
        >
          <h1 class="text-h4 font-weight-thin mb-4">
              Adderez au VIP !
          </h1>
          <h4 class="subheading">
              Devenez membre VIP afin d'obbtenir des avantages extraordinaire
          </h4>
          <br>
          <v-btn
              x-large
              dark
              width="150px"
              @click="$vuetify.goTo('#element-one', { offset: 140 })"
          >
            Decouvrir
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax>
  
   <v-card class="d-flex align-center justify-space-around no-border flex-w">
        <v-card width="40%" style="margin: 50px; background-color:#70af85">
          <div class="vip-bloc" id="element-one">
            <v-icon
            size="250"
            color="#FFF"
            >
              mdi-account-tie
            </v-icon>
            <v-row
                align="center"
                justify="center"
                style="padding:20px"
            >
                <h2>Des lieux exceptionnels</h2>
                <br>
                <p>
                    Tous les mois découvrez des lieux inédit et exclusif
                </p>
                <br>
                <p>
                    Accédez à des lieux secret tous les mois !
                    <br>
                    Postez vos meilleurs lieux !
                </p>
            </v-row>
            
          </div>
        </v-card>
        <v-card width="40%" style="margin: 50px; background-color:#70af85">
          <div class="vip-bloc">
            <v-icon
            size="250"
            color="#FFF"
            >
              mdi-forum
            </v-icon>
            <v-row
                align="center"
                justify="center"
                style="padding:20px"
            >
                <h2>Partagez vos exploits</h2>
                <br>
                <p>
                    Chattez, écrivez, échangez sur notre blog !
                </p>
                <br>
                <p>
                    Possibilité d'écrire et de répondre à tous les sujets de conversations
                </p>
            </v-row>
            
          </div>
        </v-card>
        <v-card width="40%" style="margin: 50px; background-color: #aa8976">
          <div class="vip-bloc">
            <v-icon
            size="250"
            color="#FFF"
            >
              mdi-calendar-text
            </v-icon>
            <v-row
                align="center"
                justify="center"
                style="padding:20px"
            >
                <h2>Des événements inédits</h2>
                <br>
                <p>
                    Participez aux différents évènements mensuels
                </p>
                <br>
                <p>
                    Venez apprendre, rencontrer et découvrir directement sur le terrain !
                </p>
            </v-row>
            
          </div>
        </v-card>
        <v-card width="40%" style="margin: 50px; background-color: #aa8976">
          <div class="vip-bloc">
            <v-icon
            size="250"
            color="#FFF"
            >
              mdi-map-marker
            </v-icon>
            <v-row
                align="center"
                justify="center"
                style="padding:20px"
            >
                <h2>Postez vos propres lieux</h2>
                <br>
                <p>
                    Partagez vos lieux a la communauté 
                </p>
                <br>
                <p>
                    Faites découvrir vos connaissances aux autres membre VIP
                </p>
            </v-row>
            
          </div>
        </v-card>
        <v-card width="90%" style="margin: 50px;  background-color:#70af85">
          <div class="vip-bloc">
            <v-row
                align="center"
                justify="center"
                style="padding:20px;"
            >
                <h2  style="margin:10px 30% 10px 30% !important;">Postez vos propres lieux</h2>
                <p  style="margin:10px 30% 10px 30% !important;">
                    Partagez vos lieux a la communauté 
                </p>
                <p  style="margin:10px 30% 10px 30% !important;">
                    Faites découvrir vos connaissances aux autres membre VIP
                </p>
                 <v-btn
                    x-large
                    color="white"
                    width="150px"
                    @click="$vuetify.goTo('#element-one', { offset: 90 })"
                        style="margin:10px 30% 10px 30% !important;"
                >
                    S'abonner
                </v-btn>
            </v-row>
            
          </div>
        </v-card>
    </v-card>
  </div>
</template>

<script>


</script>
<style>
.vip-bloc{
  text-align: center;
  display: flex;
}
.flex-w{
    flex-wrap: wrap;
}
h2{
    font-size: xx-large;
}
</style>
