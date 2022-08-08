<template>
  <ion-card button @click="cardClicked()">
    <ion-img src="../../../assets/images/logo2.png"></ion-img>
    <ion-card-header>
      <ion-card-subtitle>Destination</ion-card-subtitle>
      <ion-card-title>Madison, WI</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <div class="item-price">
        <span> 22.8$ </span>
      </div>
    </ion-card-content>
  </ion-card>
</template>
<script>
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonImg,
} from "@ionic/vue";
export default {
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonImg,
  },
  setup() {
    const cardClicked = () => {
      console.log("clicked");
    };
    return {
      cardClicked,
    };
  },
};
</script>

<style lang="scss" scoped>
ion-card {
  width: 100%;
  margin: 0;
  ion-card-title {
    font-size: 16px;
  }
  ion-card-subtitle {
    font-size: 10px;
  }
}
.item-price {
  display: flex;
  justify-content: flex-end;
}
</style>