<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button
            color="dark"
            defaultHref="/home/tab1"
          ></ion-back-button>
        </ion-buttons>
        <ion-title>Cart</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen class="ion-padding">
      <section class="cart-items">
        <div class="section-content">
          <cart-items-list />
        </div>
      </section>

      <section class="order-details">
        <h3>Order Details</h3>
        <div class="section-content">
          <ion-item v-for="i in 3" :key="i">
            <ion-label>
              <h3>Lorem ipsum</h3>
              <p>(qt.1)</p>
            </ion-label>
            <span>20$</span>
          </ion-item>
        </div>
      </section>
      <section class="total">
        <div class="section-content">
          <ion-item lines="none">
            <ion-label>Total: </ion-label>
            <span>24.00$</span>
          </ion-item>
         
         <ion-item lines="none">
            <ion-label> Delivery Fee: </ion-label>
            <span>5.00$</span>
          </ion-item>
          <ion-item lines="none">
            <ion-label> Sub Total: </ion-label>
            <span>24.00$</span>
          </ion-item>
         
        </div>
      </section>

      <ion-button
        mode="ios"
        size="large"
        router-link="/checkout"
        color="primary"
        shape="round"
        expand="block"
        class="checkout-btn"
        >Checkout</ion-button
      >
    </ion-content>
  </ion-page>
</template>

<script>
import { ref } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonItem,
  IonButton,
  IonLabel,
} from "@ionic/vue";
import cartItemsList from "../components/cart/cartItemsList.vue";
export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonContent,
    cartItemsList,
    IonItem,
    IonButton,
    IonLabel,
  },
  setup() {
    const itemsCount = ref(1);
    return {
      itemsCount,
    };
  },
};
</script>
<style lang="scss">

</style>
