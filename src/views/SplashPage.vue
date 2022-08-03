<template>
  <swiper
    ref="mySlides"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :pagination="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <img
        class="slide-img"
        src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"
        alt=""
      />
    </swiper-slide>
    <swiper-slide :isVisible="true">
      <img
        class="slide-img"
        src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt=""
      />
    </swiper-slide>
    <swiper-slide>
      <img
        class="slide-img"
        src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt=""
      />
    </swiper-slide>
    <ion-button v-if="!isEnd" size="small" fill="clear" class="option-btn " @click="swiper.slideNext()">
      Enter
      <ion-icon
        slot="end"
        size="small"
        :icon="chevronForwardOutline"
      ></ion-icon>
    </ion-button>
    <ion-button v-else size="small" fill="clear" class="option-btn swiper-button-prev">
      skip
      <ion-icon
        slot="end"
        size="small"
        :icon="chevronForwardOutline"
      ></ion-icon>
    </ion-button>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide,useSwiper  } from "swiper/vue";
import { IonButton, IonIcon } from "@ionic/vue";
import { heart, chevronForwardOutline } from "ionicons/icons";
import {onMounted, ref} from 'vue';

// Import Swiper styles
import "swiper/css";

import "swiper/scss/pagination";

import "../scss/global.scss";

// import required modules
import { Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
    IonButton,
    IonIcon,
  },
  setup() {
    const swiper = useSwiper();
    const mySlides = ref(null)
    const isEnd = ref(false)
    const onSwiper = (swiper) => {
      console.log('x ',(swiper));
    };
    const onSlideChange = (swiper) => {
        isEnd.value = swiper.isEnd
      
        console.log("slide change ",swiper);
        return isEnd
      

    };

  onMounted( ()=>{
      console.log('zxxAA ', {...mySlides.value});
  })


    const nextSilde = async () => {
      
      // const s= await mySlides?.value?.$el.getSwiper()
      // console.log('s ',s);
    };
    return {
      modules: [Pagination],
      heart,
      chevronForwardOutline,
      isEnd,
      onSwiper,
      onSlideChange,
      mySlides,
      swiper,
      nextSilde
    };
  },
};
</script>
