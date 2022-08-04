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
      <img
        class="slide-img"
        src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"
        alt=""
      />
      <!-- Slide 1 -->
    </swiper-slide>
    <swiper-slide>
      <img
        class="slide-img"
        src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt=""
      />
      <!-- Slide 2 -->

    </swiper-slide>
    <swiper-slide>
      <img
        class="slide-img"
        src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt=""
      />
      <!-- Slide 3 -->

    </swiper-slide>
  

  </swiper>
    <ion-button v-if="!isEnd" fill="clear" slot="button-next" size="small" class="option-btn" @click="mySlides.slideNext()">
      Enter
      <ion-icon
        slot="end"
        size="small"
        :icon="chevronForwardOutline"
      ></ion-icon>
    </ion-button>
    <ion-button v-else size="small" fill="clear" class="option-btn swiper-button-prev" router-link="/auth/login">
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
// Import Swiper Vue.js components
import { Swiper, SwiperSlide   } from "swiper/vue";
import { IonButton, IonIcon,IonPage } from "@ionic/vue";
import { useIonRouter } from '@ionic/vue';

import { chevronForwardOutline } from "ionicons/icons";
import { ref} from 'vue';

// Import Swiper styles
import "swiper/css";
  import '@ionic/vue/css/ionic-swiper.css';

import "swiper/css/pagination";

import "../scss/global.scss";

// import required modules
import { Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
    IonButton,
    IonIcon,
    IonPage
  },
  setup() {
    const mySlides = ref(null)
    const ionRouter = useIonRouter();
    const isEnd = ref(false)
    const onSwiper = (swiper) => {
      mySlides.value = swiper
    };
    const onSlideChange = (swiper) => {
        isEnd.value = swiper.isEnd
        return isEnd
    };
    const skip = ()=>{
      ionRouter.replace('/home')
    }
    return {
      modules: [Pagination],
      chevronForwardOutline,
      isEnd,
      onSwiper,
      onSlideChange,
      mySlides,
      skip
    };
  },
};
</script>
<style scoped>
</style>