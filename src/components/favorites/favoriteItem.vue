<template>
  <div v-for="item in items" :key="item.id" class="res-img">
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
import { ref } from "vue";
export default {
    props:{
        type:{
            type:String,
            default:'meal'
        }
    },
  setup(props) {
    const items = ref([
      {
        id: 1,
        name: "Lorem, ipsum dolor.",
        img: `/assets/images/${props.type === 'meal' ? 'meals' : 'restaurants'}/${props.type === 'meal' ? 'meal1' : 'restaurant3'}.jpg`,
        description: "Lorem ipsum dolor sit amet consectetur.",
      },
      {
        id: 2,
        name: "Lorem, ipsum dolor.",
        img: `/assets/images/${props.type === 'meal' ? 'meals' : 'restaurants'}/${props.type === 'meal' ? 'meal2' : 'restaurant4'}.jpg`,
        description: "Lorem ipsum dolor sit amet consectetur.",
      },
    ]);
    return {
      items,
    };
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
