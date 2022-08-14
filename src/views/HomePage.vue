<template>
  <ion-page>
    <ion-content>
      <Tabs :showOutlet="true" />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import Tabs from "../components/share/tabs.vue";

export default {
  name: "HomePage",
  components: {
    Tabs,
    IonPage,
    IonContent,
  },

  created() {
    this.$router.push("/home/tab1");
  },
};
</script>
