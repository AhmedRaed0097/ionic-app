<template>
  <ion-page>
    <swiper
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :pagination="true"
      :modules="modules"
      :initial-slide="0"
      
      class="mySwiper"
    >
      <swiper-slide>

        <!-- Slide 1 -->
        <img src="/assets/images/restaurants/restaurant2.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <!-- Slide 2 -->
        <img src="/assets/images/restaurants/restaurant3.jpg" alt="">

      </swiper-slide>
      <swiper-slide>
        
        <!-- Slide 3 -->
        <img src="/assets/images/restaurants/restaurant4.jpg" alt="">

      </swiper-slide>
    </swiper>
    <ion-button
      v-if="!isEnd"
      slot="button-next"
      size="small"
      class="option-btn"
      @click="mySlides.slideNext()"
    >
      Enter
      <ion-icon
        slot="end"
        size="small"
        :icon="chevronForwardOutline"
      ></ion-icon>
    </ion-button>
    <ion-button
      v-else
      size="small"
      class="option-btn swiper-button-prev"
      router-link="/auth/login"
    >
      skip
      <ion-icon
        slot="end"
        size="small"
        :icon="chevronForwardOutline"
      ></ion-icon>
    </ion-button>
  </ion-page>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { IonButton, IonPage, IonIcon } from "@ionic/vue";
import { useIonRouter } from "@ionic/vue";
import { chevronForwardOutline } from "ionicons/icons";
import { ref } from "vue";

import "swiper/css";
import "@ionic/vue/css/ionic-swiper.css";

import "swiper/css/pagination";

import "../scss/global.scss";

import { Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
    IonButton,
    IonIcon,
    IonPage,
  },
  setup() {
    const mySlides = ref(null);
    const ionRouter = useIonRouter();
    const isEnd = ref(false);
    const onSwiper = (swiper) => {
      mySlides.value = swiper;
    };
    const onSlideChange = (swiper) => {
      isEnd.value = swiper.isEnd;
      return isEnd;
    };
    const skip = () => {
      ionRouter.replace("/home");
    };
    return {
      modules: [Pagination],
      chevronForwardOutline,
      isEnd,
      onSwiper,
      onSlideChange,
      mySlides,
      skip,
    };
  },
};
</script>
<style scoped>
swiper-slide {
  background: #202020;
}
</style>
