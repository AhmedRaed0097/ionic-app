<template>
  <ion-page>
    <ion-content>
      <ion-button
        size="small"
        color="dark"
        class="back-button"
        @click="gotToDetails"
      >
        <!-- back -->
        {{ txt }}
      </ion-button>
      <div class="img-wapper">
        <img src="/assets/images/meals/meal1.2.jpg" />
      </div>
      <div class="card-wrapper">
        <ion-card>
          <div class="top-line"></div>
          <ion-card-content>
          <ion-card-header>
            <ion-card-title> Slow cooker beef stronganoff </ion-card-title>

            <ion-card-subtitle> Connie Restaurant </ion-card-subtitle>
          </ion-card-header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. ullam
              dolor quo iste praesentium voluptatibus tenetur! Quidem aliquam
              officia voluptates magni.
            </p>
            <p class="serving">4 servings</p>

            <span class="price">$24.99</span>

            <ion-button
              class="add-btn"
              size="large"
              router-link="/home/tab1"
              color="primary"
              shape="round"
              expand="block"
              >Add to cart</ion-button
            >
          </ion-card-content>
          <Tabs />
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from "@ionic/vue";
import Tabs from "../components/share/tabs.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { arrowRedoOutline, balloonOutline, bookOutline } from "ionicons/icons";

export default {
  name: "ItemDetials",
  components: {
    IonPage,
    IonContent,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    Tabs,
  },
  setup() {
    const txt = ref("back");
    const showAlert = () => {
      alert("clicked");
    };
    const router = useRouter();
    const gotToDetails = () => {
      router.back();
    };
    return {
      txt,
      gotToDetails,
      showAlert,
      arrowRedoOutline,
      balloonOutline,
      bookOutline,
    };
  },
};
</script>

<style lang="scss" scoped>
ion-img {
  // background: #070;
  height: 80%;
  &::part(image) {
    height: 100%; /* or whatever value */
    /* you can set the height value too */
  }
}
.img-wapper {
  // background: #080;
  height: 50%;
  img {
    width: 100%;
    height: 100%;
  }
}

.card-wrapper {

  height: 50%;
  position: relative;
  ion-card {

    position: absolute;
    width: 100%;
    height: 110%;
    overflow-y: auto;
    bottom: 0;
    margin: 0;
    border-radius: 30px 30px 0 0;
    ion-card-content {
        overflow-y: auto;
  // background: red;
  height: 72%;
      padding-bottom: 0;
    }
    .top-line {
      background: var(--ion-color-primary);
      /* padding: 10px; */
      margin-top: 5px;
      height: 7px;
      width: 79%;
      margin: 0 auto;
      border-radius: 13px;
    }
  }
}
.back-button {
  position: absolute;
  top: 40px;
  left: 30px;
}
.price {
  float: right;
  // margin: 20px 0 20px 0;
  margin-bottom: 20px;
  font-size: 25px;
  color: #000;
}
.add-btn {
  font-size: 20;
}
.serving {
  margin-top: 16px;
}
.content-wrapper{
  // background: red;
  // height: 70%;
}
</style>
