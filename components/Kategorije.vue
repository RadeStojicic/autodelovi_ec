<template>
  <div class="z-0 mx-auto mt-12 flex flex-col justify-center px-4 md:container">
    <div class="flex w-full justify-center bg-white py-8">
      <Splide
        class="flex w-[100%] justify-center px-10"
        :options="options"
        aria-label="Kategorije"
      >
        <SplideSlide
          class="flex flex-col items-center justify-center"
          v-for="(category, index) in categories"
          :key="index"
        >
          <button @click="goToCategory">
            <div class="h-40 w-40 rounded-full bg-gray-100">
              <NuxtImg
                width="150"
                height="150"
                :src="category.category_image"
                alt="Slika kategorije"
              />
            </div>
            <p class="mt-2 text-center text-lg font-semibold md:text-base">
              {{ category.title }}
            </p>
          </button>
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLinkStore } from "../store/navlinks";
import { storeToRefs } from "pinia";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

const options = {
  perPage: 4,
  arrows: true,
  gap: "3rem",
  pagination: false,
  width: "100%",
  breakpoints: {
    1200: {
      perPage: 3,
    },
    800: {
      perPage: 2,
      gap: "0rem",
    },
    540: {
      perPage: 1,
    },
  },
};

const { categories } = storeToRefs(useLinkStore());

const infoCards = [
  {
    name: "Preko 1000 autodelova",
    class: "icon-[prime--cog]  text-secondary text-5xl ",
  },
  {
    name: "Besplatna dostava",
    class: "icon-[prime--truck] text-secondary text-5xl ",
  },
  {
    name: "14-dnevna garancija",
    class: "icon-[prime--sync] text-secondary text-5xl ",
  },
  {
    name: "14-dnevna garancija",
    class: "icon-[prime--credit-card] text-secondary text-5xl ",
  },
];
</script>

<style lang="scss" scoped></style>
