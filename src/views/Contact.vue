<template>
  <div>
  <v-parallax
      dark
      src="../assets/james-donovan-kFHz9Xh3PPU-unsplash.jpg"
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
              Besoin d'en savoir plus? Une question? Une demande?
          </h1>
 
          <br>
          <v-btn
              x-large
              dark
              width="250px"
              @click="$vuetify.goTo('#element-one', { offset: 140 })"
          >
            Contactez-nous !
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax>
  
   <v-card class="d-flex align-center justify-space-around no-border flex-w">
        <v-card width="90%" style="margin: 50px;">
          <div class="vip-bloc" id="element-one">
            <v-row
                align="center"
                justify="center"
                style="padding:20px"
            >
                <v-container style="width: 40%;">
                    
                    <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            md="12"
                            style="display: flex;"
                        >
                        <v-icon
                        size="50"
                        >
                            mdi-map-marker-outline
                        </v-icon>
                        <p style="padding: 20px; margin-bottom: 0;">16 rue tour de l'eau 38400 Saint Martin D'heres</p>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="12"
                            style="display: flex;"
                        >
                        <v-icon
                        size="50"
                        >
                            mdi-phone
                        </v-icon>
                        <p style="padding: 20px; margin-bottom: 0;">04 52 46 96 25 14</p>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="12"
                            style="display: flex;"
                        >
                        <v-icon
                        size="50"
                        >
                            mdi-cellphone
                        </v-icon>
                        <p style="padding: 20px; margin-bottom: 0;">06 52 54 51 25</p>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="12"
                        >
                        <v-text-field
                            label="Nom"
                            required
                        ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="12"
                        >
                        <v-text-field
                            label="Adresse mail"
                            required
                        ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="12"
                        >
                        <v-textarea
                            label="Message"
                            persistent-hint
                            required
                        ></v-textarea>
                        </v-col>
                        <v-btn
                            color="white"
                            text
                            @click="dialog = false"
                        >
                        Envoyer
                        </v-btn>
                    </v-row>
                </v-container>
                <v-container style="width: 40%;">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994.2045613859991!2d5.775364827221281!3d45.18638472476273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478af51d07531543%3A0xcd2f028654267a51!2sMyDigitalSchool%20Grenoble!5e0!3m2!1sfr!2sfr!4v1654982326114!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </v-container>
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
