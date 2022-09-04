<template>
  <div v-for="item in itemData" :key="item.id" class="res-img">
    <!-- <div class="res-overlay"></div> -->
    <!-- <div> -->
    <img :src="item.img" />
    <div class="res-details">
      <h4>{{ item.name }}</h4>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script>

export default {
    props:{
        itemData:{
            type:Object,
            default:()=>{}
        }
    },
    
};
</script>

<style lang="scss" scoped>
.res-img {
  margin-top: 20px;
  img {
    width: 100%;
    height: 22vh;
    @media (min-width:500px) {
    height: 46vh;
      
    }
    border-radius: 14px;
  }
  .res-details {
    font-weight: bold;
    line-height: 1.8;
  }
}
</style>
