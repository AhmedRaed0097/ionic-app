<template>
  <ion-tabs :class="{ 'small-tabs': showOutlet === false }">
    <ion-router-outlet
      :class="{ 'hidden-outlet': showOutlet === false }"
    ></ion-router-outlet>
    <ion-tab-bar class="tabs-bar" slot="bottom">
      <ion-tab-button class="tab-button" tab="tab1" href="/home/tab1">
        <ion-icon class="tab-icon" :icon="homeOutline" />
        <ion-label>Home</ion-label>
      </ion-tab-button>

      <ion-tab-button class="tab-button" tab="tab2" href="/home/tab2">
        <ion-icon
          class="tab-icon"
          :icon="heartOutline"
        />
        <ion-label>Favorite</ion-label>
      </ion-tab-button>
      <ion-tab-button class="tab-button" tab="tab3" href="/home/tab3">
        <ion-icon class="tab-icon" :icon="notificationsOutline" />
        <ion-label>Notifications</ion-label>
      </ion-tab-button>
      <ion-tab-button class="tab-button" tab="tab4" href="/home/tab3">
        <ion-label>Profile</ion-label>
        <ion-icon class="tab-icon" :icon="personOutline" />
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script>
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonRouterOutlet,
  IonLabel,
  IonIcon,
} from "@ionic/vue";

import {
  homeOutline,
  heart,
  heartOutline,
  notificationsOutline,
  personOutline,
} from "ionicons/icons";

export default {
  name: "HomePage",
  props: {
    showOutlet: {
      type: Boolean,
      defalut: false,
    },
  },
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonRouterOutlet,
  },
  setup() {
    return {
      homeOutline,
      heartOutline,
      heart,
      notificationsOutline,
      personOutline,
    };
  },
};
</script>
<style lang="scss" scoped>
.hidden-outlet {
  display: none;
}
.small-tabs {
  height: 100px !important;
  top: 78% !important;
}
</style>
