<template>
  <ion-page class="homepage">
    <ion-content fullscreen>
      <ion-grid class="grid">
        <ion-row class="row">
          <ion-col class="small-col" size="2">
            <sideTabs></sideTabs>
          </ion-col>
          <ion-col class="larg-col" size="10">
            <ion-row>
              <ion-col size="12">
                <categories-header></categories-header>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="12">
                <ion-item class="section-header native">
                  <ion-label>Popular Breakfast</ion-label>

                  <ion-button
                    color="light"
                    size="small"
                    fill="clear"
                    slot="end"
                  >
                    View All
                    <ion-icon
                      slot="end"
                      size="small"
                      :icon="chevronForwardOutline"
                    ></ion-icon>
                  </ion-button>
                </ion-item>
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
                <ion-item class="section-header native">
                  <ion-label>Shop Near You</ion-label>
                  <ion-button
                    color="light"
                    size="small"
                    fill="clear"
                    slot="end"
                  >
                    View All
                    <ion-icon
                      slot="end"
                      size="small"
                      :icon="chevronForwardOutline"
                    ></ion-icon>
                  </ion-button>
                </ion-item>
              </ion-col>
              <ion-col size="6">
                <item-card>
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
                <item-card>
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
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonLabel,
  IonItem,
  IonIcon,
} from "@ionic/vue";
import { chevronForwardOutline } from "ionicons/icons";
import categoriesHeader from "../components/core/categoriesHeader.vue";
import sideTabs from "../components/core/sideTaps.vue";
import itemCard from "../components/share/itemCard.vue";
export default {
  name: "tabPage",

  components: {
    IonContent,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    sideTabs,
    categoriesHeader,
    itemCard,
    IonButton,
    IonLabel,
    IonItem,
    IonIcon,
  },
  setup() {
    return {
      chevronForwardOutline,
    };
  },
};
</script>
<style lang="scss" scoped>
.small-col {
  position: relative;
  background: var(--ion-color-primary);
  color: #000;
  padding-left: 0;
}
.larg-col {
  margin-bottom: 100px;
}
.grid,
.row {
}
.grid {
  padding: 0 !important;
}
.section-header {
  font-size: 20px;
  font-weight: bold;
}
</style>
