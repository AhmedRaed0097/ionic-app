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
              <img :src="resturant.img" />
              <div class="res-details">
                <h2>{{resturant.name}}</h2>
                <h5>{{resturant.description}}</h5>
                <star-rating
                  v-model="rating"
                  :rating="resturant.rate"
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
          <ion-col class="col-content" size="12">
            <productsSlider />
          </ion-col>

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
  IonRow,
  IonGrid,
  IonCol,
} from "@ionic/vue";
import Tabs from "../components/share/tabs.vue";
import { ref } from "vue";
import chipsSlider from "../components/share/chipsSlider.vue";
import { mapGetters } from "vuex";

export default {
  name: "RestaurantDetails",
  components: {
    IonPage,
    IonContent,
    IonButton,
    StarRating,
    chipsSlider,
    productsSlider,
    Tabs,
    IonRow,
    IonGrid,
    IonCol,
  },
  setup() {
    const rating = ref(4);
    const resturant = ref({});

    return {
      rating,
      resturant
    };
  },
  computed:{
    ...mapGetters('resturants',{resturantById: 'resturantById'})

  },

  mounted(){
    this.resturant = this.resturantById(this.$route.params.id)
  }
};
</script>

<style lang="scss" scoped>
.res-img {
  position: relative;
  img {
    width: 100%;
    height: 30vh;
  }
}

.slider-wrapper {
  margin-top: -10px;
}
.small-tabs {
  position: relative;
}

ion-grid {
  padding: 0;
  height: 100%;
  .res-row {
    height: 100%;
    .slider-col {
      background: aqua;
      position: relative;
      height: 294px;
      .products-wrapper {
        height: 93% !important;
        .products-slider-wrapper {
          height: 100%;
        }
      }
    }

    .taps-col {
      height: 96px;
      ion-tabs {
        position: relative !important;
        top: 0 !important;
        margin-top: -8px;
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
  height: 50px;
  // background: red;
  margin-top: -5px;
  margin-bottom: 10px;
  // position: relative;
  // bottom: 50px;
}
.col-content {
  // margin-top: -13px;
}
</style>
