<template>
  <ion-card button @click="cardClicked()">
    <!-- <ion-card-header>
      </ion-card-header> -->
    <ion-card-content>
      <div class="img-wrapper">
        <slot class="item-img" name="item-img"></slot>
        <!-- <ion-button fill="clear"> -->
        <ion-icon
          size="large"
          slot="icon-only"
          shape="round"
          color="light"
          :icon="addCircle"
        ></ion-icon>
        <!-- </ion-button> -->
      </div>
      <div class="details">
        <ion-card-title>Lorem, ipsum.</ion-card-title>
        <ion-card-subtitle>Lorem ipsum dolor sit.</ion-card-subtitle>
        <star-rating
          v-model="rating"
          active-color="orange"
          :star-size="15"
          :increment="0.5"
          text-class="rating"
        ></star-rating>

        <div class="item-price">
          <span> 22.8$ </span>
        </div>
      </div>
    </ion-card-content>
  </ion-card>
</template>
<script>
import {
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
} from "@ionic/vue";
import StarRating from "vue-star-rating";

import { addCircle } from "ionicons/icons";
import { ref } from "vue";
export default {
  components: {
    IonCard,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    StarRating,
    IonIcon,
  },
  setup() {
    const cardClicked = () => {
      console.log("clicked");
    };
    const rating = ref("");
    return {
      cardClicked,
      rating,
      addCircle,
    };
  },
};
</script>

<style lang="scss" scoped>
ion-card {
  max-width: 100%;
  margin: 0;
  ion-card-header {
    padding: 0;
  }
  ion-card-content {
    padding: 0;
  }
  .img-wrapper {
    ion-icon {
      position: absolute;
      z-index: 5;
      right: 5px;
      top: 5px;
    }
  }
  .details {
    padding: 10px 10px 5px;
    ion-card-title {
      font-size: 14px;
    }
    ion-card-subtitle {
      font-size: 10px;
    }
  }
}
.item-price {
  display: flex;
  justify-content: flex-end;
  color: #000;
  font-size: 14px;
  font-weight: bold;
}
</style>
