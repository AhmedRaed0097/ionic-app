<template>
  <ion-page>
    <ion-content>
      <ion-grid>
        <ion-row class="res-row">
          <ion-col class="img-col" size="12">
            <div class="res-img">
              <ion-button
                size="small"
                color="dark"
                class="back-button"
                @click="$router.back()"
              >
                back
              </ion-button>
              <!-- <div class="res-overlay"></div> -->
              <!-- <div> -->
              <img src="/assets/images/meals/meal1.2.jpg" />
              <div class="res-details">
                <h2>Lorem, ipsum dolor.</h2>
                <h5>Lorem ipsum dolor sit amet consectetur.</h5>
                <star-rating
                  v-model="rating"
                  :rating="rating"
                  active-color="orange"
                  :star-size="15"
                  :increment="0.5"
                  :show-rating="false"
                  text-class="rating"
                ></star-rating>
              </div>
            </div>
          </ion-col>

          <ion-col class="chips-col" size="12">
            <div class="slider-wrapper">
              <chips-slider />
            </div>
          </ion-col>

         
                <productsSlider />
         
          <ion-col class="taps-col" size="12">
            <Tabs />
          </ion-col>
        </ion-row>
      </ion-grid>

      <!-- </div> -->
    </ion-content>
  </ion-page>
</template>

<script>
import StarRating from "vue-star-rating";
import productsSlider from "../components/share/productsSlider.vue";

import {
  IonPage,
  IonContent,
  IonButton,
  // IonCard,
  // IonCardContent,
  // IonCardHeader,
  // IonCardTitle,
  // IonCardSubtitle,
} from "@ionic/vue";
import Tabs from "../components/share/tabs.vue";
import { ref } from "vue";
// import { useRouter } from "vue-router";
// import { arrowRedoOutline, balloonOutline, bookOutline } from "ionicons/icons";
import chipsSlider from "../components/share/chipsSlider.vue";
export default {
  name: "RestaurantDetails",
  components: {
    IonPage,
    IonContent,
    IonButton,
    StarRating,
    chipsSlider,
    productsSlider,
    // IonCard,
    // IonCardContent,
    // IonCardHeader,
    // IonCardTitle,
    // IonCardSubtitle,
    Tabs,
  },
  setup() {
    const rating = ref(4);
    return {
      rating,
    };
  },
};
</script>

<style lang="scss" scoped>
.res-img {
  position: relative;
  img {
    width: 100%;
    height: 240px;
  }
  .res-details {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 16px;
    background: rgba(254, 254, 254, 0.715);
    * {
      margin: 0;
    }
  }
}

.slider-wrapper {
  // height: 45px;
}
.products-wrapper {
  // height: 55%;
  // background: red;
  .products-slider-wrapper {
    // height: 79%;
    // background: green;
  }
  .small-tabs {
    position: relative;
    //   height: 100px !important;
  }
}
ion-grid {
  padding: 0;
  height: 100%;
  .res-row {
    height: 100%;
    // background: red;
    .slider-col {
      background: aqua;
      position: relative;
      // bottom: px;
      height: 294px;
      // overflow: auto;
      .products-wrapper {
        height: 93% !important;
        // background: green;
        .products-slider-wrapper {
          height: 100%;
        }
      }
    }

    .taps-col {
      height: 96px;
      // position: relative;
      // bottom: 0;
      // background: rgb(23, 131, 226);
      // display: flex !important;
      // flex-direction: column;
      // align-items: flex-end !important;
      ion-tabs {
        // margin-top: -70px !important;
        position: relative !important;
        top: 0 !important;
      }
    }
    .img-col {
      height: max-content;
      padding: 0;
    }
  }
}
img {
  width: 100%;
}
.chips-col {
  height: max-content;
  // background: red;
  // position: relative;
  // bottom: 50px;
}
</style>
