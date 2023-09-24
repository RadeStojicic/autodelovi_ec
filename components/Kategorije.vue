<template>
  <div
    class="z-0 mx-auto mt-12 flex flex-col justify-center px-4 md:container md:px-12"
  >
    <div class="flex w-full justify-center bg-white py-8">
      <Splide class="w-full" :options="options" aria-label="Kategorije">
        <SplideSlide
          class="flex flex-col items-center justify-center"
          v-for="(category, index) in categories"
          :key="index"
        >
          <NuxtLink :to="category.to">
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
          </NuxtLink>
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
  perPage: 5,
  arrows: true,
  gap: ".5rem",
  pagination: false,
  width: "100%",
  breakpoints: {
    1600: {
      perPage: 4,
      gap: "0rem",
    },
    1200: {
      perPage: 3,
      gap: "0rem",
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
</script>

<style lang="scss" scoped></style>
