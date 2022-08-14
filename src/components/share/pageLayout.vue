<template>
  <ion-page>

      <slot name="header"></slot>
      <slot name="content"></slot>
  </ion-page>
</template>

<script>
import { IonPage } from "@ionic/vue";
export default {
  components: {
    IonPage,
  },
};
</script>

<style></style>
