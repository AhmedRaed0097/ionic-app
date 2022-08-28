<template>
  <ion-page>
    <ion-content>
      <ion-grid class="grid">
        <ion-row class="row">
          <ion-col class="small-col" size="2">
            <sideTabs></sideTabs>
          </ion-col>
          <ion-col class="larg-col" size="10">
            <ion-row>
              <ion-col class="cart-col" size="12">
                <div class="btn-wrapper ion-padding">
                  <ion-button color="light" size="small" fill="clear">
                    <ion-icon
                      slot="icon-only"
                      class="tab-icon"
                      :icon="search"
                    />
                  </ion-button>

                  <!-- router-link="/cart" -->
                  <ion-button
                    @click="navigate"
                    color="light"
                    size="small"
                    fill="clear"
                  >
                    <ion-icon
                      class="tab-icon"
                      slot="icon-only"
                      :icon="cartOutline"
                    />
                  </ion-button>
                </div>
              </ion-col>
              <ion-col size="12">
                <categories-header></categories-header>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="12">
                <sectionTitle
                  :title="'Popular Breakfast'"
                  :view-all-route="'/home'"
                />
              </ion-col>
              <ion-col size="6">
                <item-card>
                  <template #item-img>
                    <img
                      height="120"
                      class="item-img"
                      src="assets/images/meals/meal1.jpg"
                    />
                  </template>
                </item-card>
              </ion-col>
              <ion-col size="6">
                <item-card>
                  <template #item-img>
                    <img
                      height="120"
                      class="item-img"
                      src="assets/images/meals/meal2.jpg"
                    />
                  </template>
                </item-card>
              </ion-col>
            </ion-row>
            <ion-row class="ion-margin-top">
              <ion-col size="12">
                <sectionTitle
                  :title="'Shop Near You'"
                  :view-all-route="'/home'"
                />
              </ion-col>
              <ion-col size="6">
                <item-card :isMeal="false">
                  <template #item-img>
                    <img
                      height="120"
                      class="item-img"
                      src="assets/images/restaurants/restaurant1.jpg"
                    />
                  </template>
                </item-card>
              </ion-col>
              <ion-col size="6">
                <item-card :isMeal="false">
                  <template #item-img>
                    <img
                      height="120"
                      class="item-img"
                      src="assets/images/restaurants/restaurant2.jpg"
                    />
                  </template>
                </item-card>
              </ion-col>
            </ion-row>
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
  IonButton,
  IonIcon,
} from "@ionic/vue";
import categoriesHeader from "../components/core/categoriesHeader.vue";
import sideTabs from "../components/core/sideTaps.vue";
import itemCard from "../components/share/itemCard.vue";
import { useRouter } from "vue-router";
import { search, cartOutline } from "ionicons/icons";

export default {
  name: "tabPage",

  components: {
    IonGrid,
    IonRow,
    IonCol,
    sideTabs,
    categoriesHeader,
    itemCard,
    IonPage,
    IonContent,
    IonButton,
    IonIcon,
  },

  setup() {
    const router = useRouter();
    const gotToDetails = (id) => {
      router.push(`/item/${id}`);
    };
    return {
      gotToDetails,
      search,
      cartOutline,
    };
  },
  methods: {
    navigate() {
      this.$router.push("/cart");
    },
  },
};
</script>
<style lang="scss" scoped>
.small-col {
  position: relative;
  background: var(--ion-color-primary);
  color: #000;
  padding-left: 0;
  min-height: 100vh;
}
.larg-col {
  // height: 116vh;
  margin-bottom:100px;
@media (min-height :300px) and (max-height:800px){
  height: 1020px;
  margin-bottom: 0;
  // display: none;
  
};
}
.grid,
.row {
}
.grid {
  padding: 0 !important;
}
.btn-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  * {
    padding: 0 !important;
  }
}
.cart-col {
  position: relative;
  top: 30px;
  right: 10px;
}
.item-img{
  width: 100% !important;
}
</style>
