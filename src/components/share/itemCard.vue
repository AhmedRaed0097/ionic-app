<template>
  <ion-card mode="ios" :class="{ 'small-card': forPagination }">
    <!-- <ion-card-header>
      </ion-card-header> -->
    <ion-card-content>
      <div class="img-wrapper">
        <img height="120" class="prod-img" :src="item.img" />
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
        <ion-card-title :router-link="isMeal ? `/meals/${item.id}` : `/restaurants/${item.id}`">
          {{ item.name }}
        </ion-card-title>
        <ion-card-subtitle
          v-if="!forPagination"
          :router-link="isMeal ? '/meals/1' : '/restaurants/1'"
          >{{ item.description }}</ion-card-subtitle
        >

        <star-rating
          v-model="rating"
          :rating="item.rate"
          active-color="orange"
          :star-size="forPagination ? 12 : 15"
          :increment="0.5"
          :show-rating="isMeal ? true : false"
          text-class="rating"
        ></star-rating>

        <div v-if="isMeal && !forPagination" class="item-price">
          <span> {{ item.price }}$ </span>
        </div>
        <div v-if="!isMeal" class="restaurant-info">
          <div class="distance">
            <ion-icon :icon="locationOutline"></ion-icon>
            <span> {{ item.destination ? item.destination : 10 }}km </span>
          </div>
          <div class="time">
            <ion-icon :icon="timerOutline"></ion-icon>
            <span> {{ item.period ? item.period : 10 }}min </span>
          </div>
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

import { addCircle, locationOutline, timerOutline } from "ionicons/icons";
import { ref } from "vue";
export default {
  props: {
    isMeal: {
      type: Boolean,
      default: true,
    },
    item: {
      type: Object,
      default: () => {},
    },
    forPagination: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    IonCard,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    StarRating,
    IonIcon,
  },
  setup(_, context) {
    const cardClicked = () => {
      context.emit("clicked");
    };
    const rating = ref("");
    return {
      cardClicked,
      rating,
      addCircle,
      locationOutline,
      timerOutline,
    };
  },
};
</script>

<style lang="scss" scoped>
ion-card {
  height: 100%;
  margin: 0;
  text-align: left;

  ion-card-header {
    padding: 0;
  }
  ion-card-content {
    padding: 0;
  }
  .img-wrapper {
    width: 100%;
    ion-icon {
      position: absolute;
      z-index: 5;
      right: 5px;
      top: 5px;
    }
  }
    .prod-img {
  width: 100% !important;
}

  .details {
    padding: 5px 10px 5px;
    ion-card-title {
      font-size: 13px;
    }
    ion-card-subtitle {
      font-size: 10px;
    }
  }
}

.small-card {
  height: max-content;

  .details {
    // padding: 0;
    .vue-star-rating {
      // background: red;
      margin-bottom: 0;
    }
  }
  .img-wrapper {
    width: 100%;
    height: 13vh;
    background: rgb(50, 50, 50);
  }
  
}
.item-price {
  display: flex;
  justify-content: flex-end;
  color: #000;
  font-size: 14px;
  font-weight: bold;
}
.restaurant-info {
  display: flex;
  justify-content: space-between;
}
</style>
