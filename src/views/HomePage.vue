<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar class="tabs-bar" slot="bottom">
          <ion-tab-button class="tab-button" tab="tab1" href="/home/tab1">
            <ion-icon class="tab-icon" :icon="arrowRedoOutline" />
            <ion-label>Tab 1</ion-label>
          </ion-tab-button>

          <ion-tab-button class="tab-button" tab="tab2" href="/home/tab2">
            <ion-icon class="tab-icon" :icon="balloonOutline" />
            <ion-label>Tab 2</ion-label>
          </ion-tab-button>

          <ion-tab-button class="tab-button" tab="tab3" href="/home/tab3">
            <ion-icon class="tab-icon" :icon="bookOutline" />
            <ion-label>Tab 3</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonContent,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import { arrowRedoOutline, balloonOutline, bookOutline } from "ionicons/icons";

export default {
  name: "HomePage",
  components: {
    IonContent,
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  },
  setup() {
    return {
      arrowRedoOutline,
      balloonOutline,
      bookOutline,
    };
  },
};
</script>
