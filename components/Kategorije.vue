<template>
  <div class="z-0 mx-auto mt-12 flex justify-center px-4 md:container">
    <div class="w-full">
      <div class="mb-6 flex w-full justify-between">
        <h1 class="mt-4 text-center text-2xl font-semibold">
          Kategorije autodelova
        </h1>
      </div>

      <div
        class="grid w-full grid-cols-1 content-center gap-4 rounded-lg bg-white px-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5"
      >
        <div
          class="flex w-full flex-col items-center justify-center gap-4 rounded-lg py-6 lg:py-20"
          v-for="(category, index) in categories"
          :key="index"
        >
          <div class="flex rounded-full bg-gray-200">
            <NuxtImg
              width="120"
              height="120"
              :src="category.category_image"
              alt="Slika kategorije"
            />
          </div>
          <div>
            <p class="mt-2 text-lg font-semibold md:text-base">
              {{ category.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLinkStore } from "../store/navlinks";
import { storeToRefs } from "pinia";
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
