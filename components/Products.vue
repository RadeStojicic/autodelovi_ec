<template>
  <div class="z-0 mt-12 justify-center bg-gray-100 pb-14 pt-8">
    <div class="mx-auto w-full p-4 md:container lg:p-6">
      <div
        class="flex flex-col justify-between gap-4 border-b border-gray-200 pb-4 sm:flex-row sm:gap-0 sm:pb-3"
      >
        <h1 class="text-3xl font-bold sm:text-2xl">Proizvodi u ponudi</h1>
        <div class="flex items-center gap-2 pb-1 pt-3 sm:pb-0 sm:pt-0">
          <button
            aria-label="Popularni"
            @click="handleFilter('popular')"
            class="rounded-lg px-6 py-3 text-gray-900 sm:text-sm"
            :class="
              selectedType === 'popular' ? 'bg-secondary ' : ' bg-gray-50'
            "
          >
            Popularni
          </button>
          <button
            aria-label="Preporuceni"
            @click="handleFilter('feautured')"
            class="rounded-lg border border-gray-200 bg-gray-50 px-6 py-3 transition duration-300 hover:bg-secondary sm:text-sm"
            :class="
              selectedType === 'feautured' ? 'bg-secondary ' : ' bg-gray-50'
            "
          >
            Preporučeni
          </button>
          <button
            aria-label="Novi"
            @click="handleFilter('new')"
            class="rounded-lg border border-gray-200 bg-gray-50 px-6 py-3 transition duration-300 hover:bg-secondary sm:text-sm"
            :class="selectedType === 'new' ? 'bg-secondary ' : ' bg-gray-50'"
          >
            Novi
          </button>
        </div>
      </div>
      <div
        class="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 2xl:gap-8"
      >
        <div
          class="relative w-full rounded-lg border border-gray-200 bg-white hover:border-gray-300"
          v-for="(card, index) in filteredCards"
          :key="index"
        >
          <NuxtLink
            aria-label="Proizvod"
            :to="'/prodavnica/' + card.to + '/' + card.id"
          >
            <div class="flex items-center justify-center rounded-lg p-12">
              <NuxtImg
                :src="card.image"
                alt="product_image"
                width="130"
                quality="100"
                format="webp"
              />
            </div>
          </NuxtLink>
          <div
            class="absolute top-0 flex w-full items-center justify-between p-4"
          >
            <span
              v-if="card.discount"
              class="rounded bg-black px-3 py-[0.4rem] text-xs font-bold text-white sm:px-2 sm:py-1"
              >{{ card.discount }}%</span
            >
            <div
              @click="toggleWishList(card)"
              class="absolute right-2 top-2 flex cursor-pointer items-center justify-center rounded-full bg-gray-100 p-2 transition duration-300 hover:bg-gray-100"
              :class="card.showFilledHeart ? ' bg-[gray-100]' : ''"
            >
              <Icon
                v-if="card.showFilledHeart"
                class="text-2xl text-gray-900"
                name="prime:heart-fill"
              />

              <Icon
                v-if="!card.showFilledHeart"
                class="text-2xl text-gray-900"
                name="prime:heart"
              />
            </div>
          </div>

          <div class="mt-4 flex flex-col items-start justify-start px-4 pb-4">
            <p class="mt-1 text-xs text-gray-400">{{ card.category }}</p>
            <h1 class="text-base font-bold sm:text-sm">
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
              <button @click="insertCard(card.id)" aria-label="Dodaj u korpu">
                <div
                  class="flex items-center justify-center rounded-full bg-secondary p-[10px]"
                >
                  <Icon
                    class="text-[2rem] text-gray-900"
                    name="prime:shopping-cart"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from "../store/product";
import { storeToRefs } from "pinia";

const { toggleWishList } = addToWishList();
const { insertCard } = addToCart();
const { cards } = storeToRefs(useProductStore());

const selectedType = ref("popular");

const handleFilter = (type: string) => {
  selectedType.value = type;
};

const filteredCards = computed(() => {
  return cards.value.filter((card) => card.type === selectedType.value);
});
</script>

<style lang="scss" scoped></style>
