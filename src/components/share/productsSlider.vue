<template>
  <swiper
    :pagination="true"
    :scrollbar="true"
    :modules="modules"
    :slidesPerView="1"
    :initial-slide="0"
    class="productsSwiper"
    color="transparent"
  >
    <swiper-slide v-for="i in 3" :key="i">
      <ion-grid class="ion-padding">
        <ion-row>
          <ion-col size="5" v-for="x in 4" :key="x" :offset="x % 2 === 0 ? 2 : 0">
            <item-card :forPagination="true">
              <template #item-img>
                <img
                  class="prod-img"
                  :src="`/assets/images/meals/burgers/burger${x}.jpg`"
                />
              </template>
            </item-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </swiper-slide>
  </swiper>
</template>

<script>
import "swiper/css";
import "@ionic/vue/css/ionic-swiper.css";

import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/vue";
import { IonGrid, IonRow, IonCol } from "@ionic/vue";
// import { ref } from "vue";
import itemCard from "./itemCard.vue";
import { Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
    IonGrid,
    IonRow,
    IonCol,
    itemCard,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<style lang="scss" scoped>
.productsSwiper{
  background: red;
  height: 40vh;
}
ion-col {
  // padding: 0 15px;
  margin-bottom: 20px;
  min-height: 144px;
}
.prod-img {
  width: 100% !important;
}

  ion-grid {
      // margin-top: 19px;
    // background: red;
    // padding-right: 16px;
    height: max-content;
    // overflow: scroll;

    ion-row {
      // height: 80%;
      ion-col{
        height: max-content;
      }
    }
    position: absolute !important;
    top: 0 !important;
  }

</style>
