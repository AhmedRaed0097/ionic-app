<template>
  <ion-page>
    <ion-grid>
      <ion-row class="form-wrapper">
        <ion-col size="12">
          <!-- <img src="../../../public/assets/logo.png"/> -->
          <ion-img src="../../assets/images/logo2.png"></ion-img>
        </ion-col>
        <ion-col size="12">
          <ion-item class="login-field password-field">
            <ion-label position="floating">Name</ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item class="login-field password-field">
            <ion-label position="floating">Password</ion-label>
            <ion-input></ion-input>
          </ion-item>
        </ion-col>
        <ion-col size="12">
          <ion-button router-link="/home/tab1" color="primary" shape="round" expand="block">Login</ion-button>
        </ion-col>
       
      </ion-row>
    </ion-grid>
  </ion-page>
</template>

<script>
import {
  IonGrid,
  IonRow,
  IonCol,
  IonPage,
  IonImg,
  IonItem,
  IonButton,
  IonLabel,
  IonInput,
} from "@ionic/vue";

export default {
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonPage,
    IonImg,
    IonItem,
    IonLabel,
    IonInput,
    IonButton
  },
};
</script>

<style lang="scss" scoped>
.password-field{
    margin-bottom: 12px;
}
.form-wrapper{
  margin-top: 30%;
}
</style>
