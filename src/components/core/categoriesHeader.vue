<template>
  <ion-row class="categories-row">
    <ion-col size="4">
      <ion-card
        mode="ios"
        :class="{ 'active-card': activeCard === 'food' }"
        button
        class="item-card"
        @click="setCardActive('food')"
      >
        <ion-card-header>
          <ion-img src="../../../assets/icons/categories/food.svg"> </ion-img>
        </ion-card-header>
        <ion-card-content> Food </ion-card-content>
      </ion-card>
    </ion-col>
    <ion-col size="4">
      <ion-card
        mode="ios"
        :class="{ 'active-card': activeCard === 'drink' }"
        button
        class="item-card"
        @click="setCardActive('drink')"
      >
        <ion-card-header>
          <ion-img src="../../../assets/icons/categories/drink.svg"> </ion-img>
        </ion-card-header>
        <ion-card-content> Drink </ion-card-content>
      </ion-card>
    </ion-col>
    <ion-col size="4">
      <ion-card
        mode="ios"
        :class="{ 'active-card': activeCard === 'dessert' }"
        button
        class="item-card"
        @click="setCardActive('dessert')"
      >
        <ion-card-header>
          <ion-img src="../../../assets/icons/categories/dessert.svg">
          </ion-img>
        </ion-card-header>
        <ion-card-content> Dessert </ion-card-content>
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
  IonImg,
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
    IonImg,
  },
  setup() {
    const activeCard = ref("food");

    const setCardActive = (cardType) => {
      activeCard.value = cardType;
    };

    return {
      cloudOutline,
      setCardActive,
      activeCard,
    };
  },
};
</script>

<style lang="scss" scoped>
.categories-row {
  padding: 0 16px 0 0;
  ion-col {
    // background: red;
    display: flex;
    justify-content: center;
  }
  .item-card {
    min-width: 66px;
    max-width: 100px;
    // height: max-content;

    --background: #ededed;
    ion-card-header {
      display: flex;
      justify-content: center;
      margin-bottom: 12px;
      margin-top: 12px;
      padding-top: 10px;
      padding-bottom: 0;
    }
    ion-card-content {
      padding-left: 0;
      padding-right: 0;
      text-align: center;
      color: #000;
      padding: 0;
    }
    .ion-activatable {
      --background: #ffd700;
    }
  }

  .active-card {
    @extend .item-card;
    --background: #ffd700;

    ion-card-header {
      padding: 10px;

      ion-img {
        width: 73px;
        margin-top: -8px;
        background: white;
        border-radius: 100%;
        padding: 10px;
      }
    }
    ion-card-content {
      position: relative;
      bottom: 3px;
    }
  }
}
</style>
