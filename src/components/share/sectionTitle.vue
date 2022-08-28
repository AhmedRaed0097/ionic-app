<template>
  <ion-item class="section-header native">
    <ion-label>{{ title }}</ion-label>

    <ion-button color="dark" size="small" fill="clear" slot="end">
      View All
      <ion-icon
        color="dark"
        slot="end"
        size="small"
        :icon="chevronForwardOutline"
      ></ion-icon>
    </ion-button>
  </ion-item>
</template>

<script>
import { IonButton, IonLabel, IonItem, IonIcon } from "@ionic/vue";
import { chevronForwardOutline } from "ionicons/icons";

export default {
  components: {
    IonButton,
    IonLabel,
    IonItem,
    IonIcon,
  },
  setup() {
    return {
      chevronForwardOutline,
    };
  },
  props: ["title", "viewAllRoute"],
};
</script>

<style scoped>
.section-header {
  font-size: 20px;
  font-weight: bold;
}
</style>
