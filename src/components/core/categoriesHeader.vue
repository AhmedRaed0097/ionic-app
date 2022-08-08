<template>
  <ion-row class="categories-row">
    <ion-col size="4">
      <ion-card button class="item-card" @click="setCardActive()">
        <ion-card-header>
          <!-- <ion-card-subtitle>Card Subtitle</ion-card-subtitle> -->
          <!-- <ion-card-title>Card Title</ion-card-title> -->
          <ion-icon class="tab-icon" :icon="cloudOutline" />
        </ion-card-header>
        <ion-card-content> Drink </ion-card-content>
      </ion-card>
    </ion-col>
    <ion-col size="4">
      <ion-card c button class="item-card" @click="setCardActive()">
        <ion-card-header>
          <!-- <ion-card-subtitle>Card Subtitle</ion-card-subtitle> -->
          <!-- <ion-card-title>Card Title</ion-card-title> -->
          <ion-icon class="tab-icon" :icon="cloudOutline" />
        </ion-card-header>
        <ion-card-content> Drink </ion-card-content>
      </ion-card>
    </ion-col>
    <ion-col size="4">
      <ion-card c button class="item-card" @click="setCardActive()">
        <ion-card-header>
          <!-- <ion-card-subtitle>Card Subtitle</ion-card-subtitle> -->
          <!-- <ion-card-title>Card Title</ion-card-title> -->
          <ion-icon class="tab-icon" :icon="cloudOutline" />
        </ion-card-header>
        <ion-card-content> Drink </ion-card-content>
      </ion-card>
    </ion-col>
  </ion-row>
</template>

<script>
import {
  IonCard,
  IonCardHeader,
  IonRow,
  IonCol,
  IonCardContent,
  IonIcon,
} from "@ionic/vue";
import { cloudOutline } from "ionicons/icons";
import { ref } from "vue";
export default {
  props: {
    cardType: {
      type: String,
      defalut: () => "",
    },
  },
  components: {
    IonCard,
    IonCardHeader,
    IonRow,
    IonCol,
    IonCardContent,
    IonIcon,
  },
  setup() {
    const activeCard = ref("");

    const setCardActive = (cardType) => {
      activeCard.value = cardType;
    };

    return {
      cloudOutline,
      setCardActive,
    };
  },
};
</script>

<style lang="scss" scoped>
.categories-row {
  padding: 16px 16px 0 0;
  .item-card {
    width: 80%;
    height: 80%;
    ion-card-header {
      text-align: center;
      margin-bottom:  15px;
      padding-top: 10px;
      padding-bottom: 0;
      ion-icon {
        width: 35px;
        height: 40px;
      }
    }
    ion-card-content {
      padding-left: 0;
      padding-right: 0;
      text-align: center;
    }
    .ion-activatable {
      --background: #ffd700;
    }
  }
}
</style>