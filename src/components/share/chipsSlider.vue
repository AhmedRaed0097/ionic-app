<template>
  <swiper
    :pagination="true"
    :slidesPerView="4"
    :initial-slide="0"
    :loop="true"
    :space-between="10"
    class="chipsSwiper"
    color="transparent"
  >
    <swiper-slide v-for="i in categoriesList" :key="i.id">
      <ion-chip
      :outline="selectedCategory === i.categoryName ? false : true"
        :class="{ 'active-chip': selectedCategory === i.categoryName }"
        @click="selectCategory(i.categoryName)"
        >{{ i.categoryName }}</ion-chip
      >
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import { IonChip } from "@ionic/vue";
import { ref } from "vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
    IonChip,
  },
  setup() {
    const categoriesList = ref([
      {
        id: "1",
        categoryName: "Burger",
      },
      {
        id: "2",
        categoryName: "Pizza",
      },
      {
        id: "3",
        categoryName: "Salad",
      },
      {
        id: "4",
        categoryName: "Coffee",
      },
      {
        id: "5",
        categoryName: "Beverages",
      },
    ]);
    const selectedCategory = ref("Burger");
    const selectCategory = (categoryName) => {
      selectedCategory.value = categoryName;
    };
    return {
      categoriesList,
      selectedCategory,
      selectCategory,
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper .swiper-slide {
  background-color: transparent !important;
  height: 66px;
}
ion-chip {
  --background: #fff;
  --color: #000;
  cursor: pointer;
}
.active-chip {
  @extend ion-chip;
  box-shadow: -1px 4px 8px 2px rgb(209 209 209);
  background: var(--ion-color-primary);
}
</style>
