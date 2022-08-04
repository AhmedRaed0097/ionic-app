<template>
  <ion-page class="homepage">
    <ion-content>
      <ion-grid class="grid">
        <ion-row class="row">
          <ion-col class="small-col" size="2">
            <ion-segment
              @ionChange="segmentChanged($event)"
              value="sunny"
              class="segment"
            >
              <ion-segment-button value="sunny">
                <ion-label>Sunny</ion-label>
              </ion-segment-button>
              <ion-segment-button value="rainy">
                <ion-label>Rainy</ion-label>
              </ion-segment-button>
            </ion-segment>
          </ion-col>
          <ion-col class="larg-col" size="10">
          <ion-row>
            <ion-col>
              Lorem, ipsum.
            </ion-col>
            <ion-col>
              Lorem, ipsum.
            </ion-col>
            <ion-col>
              Lorem, ipsum.
            </ion-col>
          </ion-row>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from "@ionic/vue";

export default {
  components: {
    IonContent,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonSegment,
    IonSegmentButton,
    IonLabel,
  },
  
};
</script>
<style lang="scss" scoped>
  .small-col {
    position: relative;
    background: var(--ion-color-primary);
    color: #000;
    // border-radius: 25px 0 0 25px  ;
  }
  .larg-col {
    // background: blue;
  }
  .grid,
  .row {
    height: 100%;
  }
    .grid{
      padding: 0 !important;
    }
  .segment {
    transform: rotate(90deg);
    // position: absolute;
    margin-top: 80px;
    // width: 168px;
    z-index: 1;
    width: 162px;
    right: 56px;
    ion-segment-button {
      // background: red;
    }
  }
  ion-segment {
    // display : block;
  }

</style>
