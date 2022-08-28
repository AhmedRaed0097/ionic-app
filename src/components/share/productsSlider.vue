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
        <ion-row v-if="mealsList">
          <ion-col size="5" v-for="(meal,i) in mealsList" :key="meal.id" :offset="(i+1) % 2 === 0 ? 2 : 0">
            <item-card :item="meal"  :forPagination="true" />
              
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
import { mapGetters } from "vuex";


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
   computed:{
    // mealsList(){
    //   return this.$store.state.meals.meals
    // },
    ...mapGetters('meals',{mealsList: 'mealsList'})

  }
};
</script>

<style lang="scss" scoped>
.productsSwiper{
  height: 50vh;
  position: relative;
  overflow-y: auto;
}
ion-grid{
  padding-top: 0;
}
ion-col {
  margin-bottom: 20px;
  min-height: 144px;
}
  ion-grid {
    height: max-content;
    ion-row {
      ion-col{
        height: max-content;
      }
    }
    position: absolute !important;
    top: 0 !important;
  }

</style>
