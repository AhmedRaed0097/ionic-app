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
          <ion-item v-for="item in cartItems" :key="item.id">
            <ion-label>
              <h3>{{item.name}}</h3>
              <p>(qt.{{item.count}})</p>
            </ion-label>
            <span>{{item.price}}$</span>
          </ion-item>
        </div>
      </section>
      <section class="total">
        <div class="section-content">
          <ion-item lines="none">
            <ion-label>Total: </ion-label>
            <span>{{total}}$</span>
          </ion-item>
         
         <ion-item lines="none">
            <ion-label> Delivery Fee: </ion-label>
            <span>5.00$</span>
          </ion-item>
          <ion-item lines="none">
            <ion-label> Sub Total: </ion-label>
            <span>{{total + 5 }}$</span>
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
import { mapGetters } from "vuex";

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
  computed:{
    ...mapGetters('cart',{cartItems: 'cartItems'}),
    ...mapGetters('cart',{total: 'total'})
    
  }
};
</script>
<style lang="scss">

</style>
