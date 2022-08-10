<template>
  <ion-segment
    @ionChange="segmentChanged($event)"
    value="breakfast"
    class="segment"
    color="dark"
  >
    <ion-segment-button value="breakfast">
      <ion-label>Breakfast</ion-label>
    </ion-segment-button>
    <ion-segment-button value="lunch">
      <ion-label>Lunch</ion-label>
    </ion-segment-button>
    <ion-segment-button value="dinner">
      <ion-label>Dinner</ion-label>
    </ion-segment-button>
  </ion-segment>
</template>

<script>
import { IonSegment, IonSegmentButton, IonLabel } from "@ionic/vue";
export default {
  name: "tabPage",

  components: {
    IonSegment,
    IonSegmentButton,
    IonLabel,
  },
  setup() {
    const segmentChanged = (e) => {
      console.log("event ", e);
    };
    return {
      segmentChanged,
    };
  },
};
</script>
<style lang="scss" scoped>
.segment {
  transform: rotate(90deg);
  margin-top: 312px;
  z-index: 1;
  width: 430px;
  right: 182px;
  ion-label {
    color: #000;
  }
}
</style>