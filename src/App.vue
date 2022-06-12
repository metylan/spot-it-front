<template>
  <div id="app">
    <v-app id="inspire">
      <v-card class="overflow-hidden">
        <v-app-bar
            fixed
            color="#70af85"
            height="90px"
            dark
            shrink-on-scroll
            prominent
            src=""
            fade-img-on-scroll
            scroll-target="#scrolling-techniques-5"
            scroll-threshold="500"
        >
          <template v-slot:img="{ props }">
            <v-img
                v-bind="props"
                gradient="to top right, rgba(112,175,133,255), rgba(90,140,106,255)"
            ></v-img>
          </template>

          <v-spacer></v-spacer>


          <v-btn class="ma-5" text to="/">Accueil</v-btn>
          <v-btn class="ma-5" text to="/about">Carte</v-btn>
          <v-btn class="ma-5" text to="/blog">Blog</v-btn>
          <v-btn class="ma-5" text to="/vip">Vip</v-btn>
          <v-btn class="ma-5" text to="/contact">Contact</v-btn>


          <v-spacer></v-spacer>

          <v-btn icon class="ma-5">
            <v-row justify="center">
              <v-dialog
                  v-model="dialog"
                  max-width="600px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                      class="ma-5"
                      text
                      dark
                      v-bind="attrs"
                      v-on="on"
                      x-large
                  >
                    mdi-account
                  </v-icon>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Connexion</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12">
                          <v-text-field
                              label="Email*"
                              required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                              label="Password*"
                              type="password"
                              required
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                    <small>indicates required field</small>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog = false"
                    >
                      Close
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog = false"
                    >
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </v-btn>
        </v-app-bar>

          <v-card-text  >
            <router-view/>
          </v-card-text>
        <v-footer
            dark
            padless
            style="margin-top: 50px; padding: 20px;"
        >
          <v-card
              flat
              tile
              class="lighten-1 white--text text-center"
              style="background-color: #aa8976; margin: auto"
          >
            <v-card-text>
              <v-btn
                  v-for="icon in icons"
                  :key="icon"
                  class="mx-4 white--text"
                  icon
              >
                <v-icon size="24px">
                  {{ icon }}
                </v-icon>
              </v-btn>
              <br>
<!--              <v-btn-->
<!--                  v-for="link in links"-->
<!--                  :key="link"-->
<!--                  color="white"-->
<!--                  text-->
<!--                  rounded-->
<!--                  class="my-2"-->
<!--              >-->
<!--                {{ link }}-->
<!--              </v-btn>-->
            </v-card-text>

<!--            <v-card-text class="white&#45;&#45;text pt-0">-->
<!--              Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.-->
<!--            </v-card-text>-->

            <v-divider></v-divider>

            <v-card-text class="white--text">
              {{ new Date().getFullYear() }} — <strong>Spotit</strong>
            </v-card-text>
          </v-card>
        </v-footer>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
    links: [
      'Home',
      'About Us',
      'Team',
      'Services',
      'Blog',
      'Contact Us',
    ],
  }),
};
</script>
<style>
#nav{
  display: flex;
  justify-content: space-between;
}
.v-btn{
  background-color:#70af85 !important;
}
.v-footer .v-btn,.v-app-bar .v-btn{
  background-color:transparent !important;
}
.v-footer{
  background-color: #aa8976 !important;
}
</style>