<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet,isPlatform } from '@ionic/vue';
import { StatusBar, Style } from '@capacitor/status-bar';

export default {
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  setup(){
    if(isPlatform('android')){

      StatusBar.setBackgroundColor({color: '#ffdd40'})
      StatusBar.setStyle({ style: Style.Light });
    }

  }
  
};
</script>
<style>
.ion-page{
  overflow-y: auto;
}
</style>