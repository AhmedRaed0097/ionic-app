<template>
  <ion-page>
    <ion-content>
      <swiper :modules="modules">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>

<script>
// import Tabs from '@/src/components/tabs'
// import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import "swiper/scss";
import "@ionic/vue/css/ionic-swiper.css";
  import 'swiper/scss/autoplay';
  import 'swiper/scss/keyboard';
  import 'swiper/scss/pagination';
  import 'swiper/scss/scrollbar';
  import 'swiper/scss/zoom';
  import '@ionic/vue/css/ionic-swiper.css';

  import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { IonContent, IonPage } from '@ionic/vue';
export default {
  name: "SplashPage",
  components: {
  Swiper, SwiperSlide, IonContent, IonPage 
  },
  setup() {
      return {
        modules: [Autoplay, Keyboard, Pagination, Scrollbar, Zoom],
      };
    },
};
</script>
<style lang="scss" scoped>
.swiper{
  background-color: var(--ion-color-light);
  // background: red;
}
</style>
