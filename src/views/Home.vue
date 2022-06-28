<template>
  <v-card style="box-shadow: none">
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
              Bienvenue sur SPOT IT !
            <br>
            Trouvez votre lieu
          </h1>
          <h4 class="subheading">
              Retrouvez notre carte interactive ainsi que notre blog
          </h4>
          <br>
          <v-btn
              x-large
              dark
              width="150px"
              @click="$vuetify.goTo('#element-one')"
          >
            Decouvrir
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax>

      <v-card
          class="d-flex align-center justify-center pa-4 mx-auto no-border"
          outlined
          id="element-one"
      >
        <div class="title-serv">
          <h2>Nos services</h2>
        </div>
      </v-card>
    <v-card class="d-flex align-center justify-space-around no-border f-wrap">
        <v-card width="400px" style="margin:50px;">
          <v-img
              width="100%"
              height="250px"
              src="../assets/annie-spratt-kZO9xqmO_TA-unsplash.jpg"
          ></v-img>
          <div class="title-serv">
            <h3>Carte interactive</h3>
            <br>
            <p>
              Utiliser notre map interactive afin de trouver
              les meilleurs endroits pour vos photos et vidéos
            </p>
            <br>
            <v-btn
                x-large
                dark
                width="150px"
                to="/about"
            >
              Carte
            </v-btn>
          </div>
        </v-card>
        <v-card width="400px" style="margin:50px;">
          <v-img
              width="100%"
              height="250px"
              src="../assets/sincerely-media-ylveRpZ8L1s-unsplash.jpg"
          ></v-img>
          <div class="title-serv">
            <h3>Blog</h3>
            <br>
            <p>
              Découvrez notre blog, obtenez des conseils
              interrogez la communauté, aidez votre prochain
            </p>
            <br>
            <v-btn
                x-large
                dark
                width="150px"
            >
              Blog
            </v-btn>
          </div>
        </v-card>
    </v-card>

    <v-parallax
        dark
        src="../assets/james-donovan-kFHz9Xh3PPU-unsplash.jpg"
        class="mt-16"
    >
      <v-row
          align="center"
          justify="center"
          class="bg-transp"
      >
        <v-col
            class="text-center"
            cols="4"
        >
          <v-btn
              x-large
              dark
              width="20px"
              height="50px"
          >
            <v-icon size="75px">
              mdi-menu-left
            </v-icon>
          </v-btn>
        </v-col>
        <v-col
            class="text-center"
            cols="4"
        >
          <h2 class="text-h4 font-weight-thin mb-4" >
            Vos lieux préférés de la semaine
          </h2>
        </v-col>
        <v-col
            class="text-center"
            cols="4"
        >
          <v-btn
              x-large
              dark
              width="20px"
              height="50px"
          >
            <v-icon size="75px">
              mdi-menu-right
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax>
    <v-card
        class="d-flex align-center justify-center pa-4 mx-auto no-border"
        outlined
    >
      <div class="title-serv">
        <h2>Les derniers sujets de conversation</h2>
      </div>
    </v-card>
    <v-card class="d-flex align-center justify-space-around no-border f-wrap">
      <v-card width="400px"  style="margin:50px;">
        <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            width="100%"
            src="https://picsum.photos/id/11/500/300"
        ></v-img>
        <div class="title-serv">
          <h3>Comment prendre une photo?</h3>
          <br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem hic perspiciatis placeat quaerat quas reiciendis sed voluptate. Ab, asperiores consequuntur deleniti dolore eius, harum hic, natus porro quam saepe sunt!
          </p>
          <br>
          <div style="display: flex;justify-content: space-between;">
            <p>Manon</p>
            <p>08/06/2022</p>
          </div>
        </div>
      </v-card>
      <v-card width="400px"  style="margin:50px;">
        <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            width="100%"
            src="https://picsum.photos/id/11/500/300"
        ></v-img>
        <div class="title-serv">
          <h3>Comment travailler en noir et blanc?</h3>
          <br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem hic perspiciatis placeat quaerat quas reiciendis sed voluptate. Ab, asperiores consequuntur deleniti dolore eius, harum hic, natus porro quam saepe sunt!
          </p>
          <br>
          <div style="display: flex;justify-content: space-between;">
            <p>Hugo</p>
            <p>24/08/2022</p>
          </div>
        </div>
      </v-card>
    </v-card>
  </v-card>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  },

}


</script>
<style>

.v-parallax__image-container img{
  width: 100% !important;
  transform: none !important;
}
.v-parallax__image{
  left: 0 !important;
}
.v-parallax{
  height: 100vh !important;
}
.v-card__text{
  padding: 0;
}
.title-serv{
  padding: 50px;
  text-align: center;
}
.no-border{
  border: none !important;
  box-shadow: none !important;
}
.bg-transp{
  background-color: rgba(0,0,0,0.5);
  margin: -16px;
}
.f-wrap{
  flex-wrap: wrap;
}
</style>