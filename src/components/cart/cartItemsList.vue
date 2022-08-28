<template>
  <ion-list>
    <ion-item v-for="item in cartItems" :key="item.id">
      <ion-thumbnail slot="start">
        <img :src="item.img" />
      </ion-thumbnail>
      <ion-label>
        <h3>{{ item.title }}</h3>
        <p>{{ item.subTitle }}</p>
        <div class="count-wrapper">
          <ion-label>Qt</ion-label>
          <div class="count">
            <ion-button
              :disabled="item.count === 1"
              @click="item.count--"
              size="small"
            >
              -
            </ion-button>
            <span>{{ item.count }}</span>
            <ion-button @click="item.count++" size="small"> + </ion-button>
          </div>
        </div>
      </ion-label>
      <span class="item-price">{{ item.price }}$</span>
    </ion-item>
  </ion-list>
</template>

<script>
import {
  IonList,
  IonItem,
  IonThumbnail,
  IonLabel,
  IonButton,
} from "@ionic/vue";
import { mapGetters } from "vuex";

export default {
  components: {
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonButton,
  },
  setup() {
    return {};
  },
  computed: {
    ...mapGetters("cart", { cartItems: "cartItems" }),
  },
};
</script>

<style lang="scss" scoped>
ion-thumbnail {
  img {
    border-radius: 10px;
  }
}
h3 {
  font-weight: bold;
}
.count-wrapper {
  display: flex;
  align-items: center;
  // gap: 5px;
  .count {
    // width: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
    margin-left: 6px;
    ion-button {
      width: 15px;
      height: 20px;
      margin: 0;
    }
    span {
      background: #eee;
      padding: 0 7px 0 15px;
    }
  }
}
.item-price {
  margin-top: 30px;
}
</style>
