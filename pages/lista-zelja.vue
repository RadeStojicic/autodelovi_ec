<template>
  <div class="z-0 mx-auto flex justify-center px-4 md:container md:px-6">
    <div class="h-auto w-full bg-white py-16">
      <div class="flex w-full flex-col border-b border-gray-200">
        <div class="flex justify-between border-b border-gray-200 pb-4">
          <h1 class="text-3xl font-bold sm:text-4xl">Moja lista želja</h1>
          <p class="mt-2 text-lg">{{ wishList.length || 0 }} proizvoda</p>
        </div>
        <div
          v-if="wishList.length > 0"
          class="grid grid-cols-1 gap-6 py-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div
            class="relative w-full rounded-lg border border-gray-200 bg-white hover:border-gray-300"
            v-for="(card, index) in wishList"
            :key="index"
          >
            <NuxtLink :to="'/prodavnica/' + card.to + '/' + card.id">
              <div class="flex items-center justify-center rounded-lg p-12">
                <img class="w-40" :src="card.image" alt="product_image" />
              </div>
            </NuxtLink>
            <div
              class="absolute top-0 flex w-full items-center justify-between p-4"
            >
              <span
                v-if="card.discount"
                class="rounded bg-black px-2 py-1 text-xs font-bold text-white"
                >{{ card.discount }}%</span
              >
              <div
                @click="toggleWishList(card)"
                class="absolute right-2 top-2 flex cursor-pointer items-center justify-center rounded-full p-2 transition duration-300 hover:bg-gray-100"
                :class="card.showFilledHeart ? ' bg-gray-100' : ''"
              >
                <span
                  :class="
                    card.showFilledHeart
                      ? 'icon-[prime--heart-fill] '
                      : 'icon-[prime--heart] '
                  "
                  class="p-3 text-gray-900"
                />
              </div>
            </div>

            <div class="mt-4 flex flex-col items-start justify-start px-4 pb-4">
              <p class="mt-1 text-xs text-gray-400">{{ card.category }}</p>
              <h1 class="text-sm font-bold">
                {{ card.title }}
              </h1>
              <div class="mt-4 flex w-full items-center justify-between">
                <div class="flex flex-col items-start">
                  <p
                    v-if="card.oldPrice"
                    class="text-xs text-gray-400 line-through decoration-1"
                  >
                    {{ card.oldPrice }} RSD
                  </p>
                  <p class="ml-[-2px] text-2xl font-bold text-gray-800">
                    {{ card.newPrice }} RSD
                  </p>
                  <p
                    v-if="card.oldPrice"
                    class="mt-1 text-xs font-semibold text-red-600"
                  >
                    Ušteda: {{ card.oldPrice - card.newPrice }} RSD
                  </p>
                </div>
                <NuxtLink to="/kontakt">
                  <div
                    class="flex items-center justify-center rounded-full bg-yellow-400 p-2"
                  >
                    <span
                      class="icon-[prime--shopping-cart] text-3xl text-white"
                    />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="w-full py-20 text-center text-lg">
          Nema dodatih proizvoda u listi želja.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from "../store/product";
import { storeToRefs } from "pinia";

const { wishList, toggleWishList } = addToWishList();
const { cards } = storeToRefs(useProductStore());

definePageMeta({
  layout: "page-layout",
});
</script>

<style lang="scss" scoped></style>
