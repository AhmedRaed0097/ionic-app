<template>
  <ion-page>
    <!-- <h2 class="title">Favorites</h2> -->
    <ion-header translucent>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button
            color="dark"
            defaultHref="/home/tab1"
          ></ion-back-button>
        </ion-buttons>
        <ion-title>Favorites</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-grid class="grid">
        <ion-row>
          <ion-col size="12">
            <sectionTitle :title="'Food'" :view-all-route="'/home'" />
            <favoriteItem v-for="meal in favoriteMeals" :key="meal.id" :item-data="meal" />
          </ion-col>
          <ion-col size="12">
            <sectionTitle :title="'Resturants'" :view-all-route="'/home'" />
            <favoriteItem v-for="resturant in favoriteResturants" :key="resturant.id" :item-data="resturant" />
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonGrid,
  IonRow,
  IonCol,
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonTitle,
  IonButtons
} from "@ionic/vue";
import favoriteItem from "../components/favorites/favoriteItem.vue";
import sectionTitle from "../components/share/sectionTitle.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonPage,
    IonContent,
    favoriteItem,
    sectionTitle,
    IonHeader,
    IonToolbar,
    IonBackButton,
    IonTitle,
    IonButtons
  },
  computed: {
    ...mapGetters("meals", { favoriteMeals: "favoriteMeals" }),
    ...mapGetters("resturants", { favoriteResturants: "favoriteResturants" }),

  },
};
</script>
<style lang="scss" scoped>
.ion-page {
  height: 86%;
}
.title {
  text-align: center;
}
</style>
