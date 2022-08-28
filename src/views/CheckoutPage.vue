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
        <ion-title>Checkout</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen class="ion-padding">
    
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
      <section class="cash">
        <ion-item lines="none">
          <ion-label> Cash on Delivery </ion-label>
          <ion-checkbox slot="start"></ion-checkbox>
        </ion-item>
          <ion-grid>
            <ion-row>
              <ion-col size="9">
                <ion-item>
                  <div class="payment-logos" slot="end">
                    <img width="28" src="../../public/assets/images/mastercard.svg" alt="">
                    <img width="28" src="../../public/assets/images/visa.svg" alt="">
                  </div>
                <ion-input placeholder="0000 0000 0000 0000" type="number"></ion-input>
                </ion-item>
              </ion-col>
              <ion-col size="3">
                <ion-item>
                <ion-input placeholder="CVV" type="number"></ion-input>
                </ion-item>
              </ion-col>
              
              <ion-col size="6">
                <ion-item>
                <ion-input placeholder="" value="" type="date" pattern="\d{4}-\d{2}-\d{2}"></ion-input>
                </ion-item>
              </ion-col>
            </ion-row>
          </ion-grid>
      </section>
      <ion-button
        mode="ios"
        size="large"
        router-link="/home/tab1"
        color="primary"
        shape="round"
        expand="block"
        class="checkout-btn"
        >Pay</ion-button
      >
    </ion-content>
  </ion-page>
</template>

<script>
import { ref } from "vue";
import { search } from "ionicons/icons";
import { mapGetters } from "vuex";

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
  IonCheckbox,
  IonInput,
  IonRow,
  IonGrid,
  IonCol
} from "@ionic/vue";
export default {
  components: {
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
    IonCheckbox,
    IonInput,
    IonRow,
    IonGrid,
    IonCol
  },
  setup() {
    const itemsCount = ref(1);
    return {
      itemsCount,
      search,
    };
  },
  computed:{
    ...mapGetters('cart',{cartItems: 'cartItems'}),
    ...mapGetters('cart',{total: 'total'})
    
  }
};
</script>
<style lang="scss">
.cash {
  ion-checkbox {
    margin-right: 10px;
    margin-left: 0;
  }
  ion-label {
    margin-bottom: 10px;
  }
}
.payment-logos{
  display: flex;
  align-items: center;
  gap: 6px;
}
</style>
