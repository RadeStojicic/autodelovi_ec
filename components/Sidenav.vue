<template>
  <div
    class="top-0 hidden h-auto w-96 select-none overflow-y-auto border border-gray-200 bg-white text-black lg:relative lg:block"
  >
    <div class="bg-gray-200">
      <div class="flex w-full flex-col bg-white">
        <div
          class="flex items-center border-b border-gray-200 bg-gray-50 px-4 py-4 text-sm text-gray-500"
        >
          <NuxtLink aria-label="Pocetna" class="text-black/80" to="/"
            >Početna</NuxtLink
          >
          <Icon
            class="mt-[3px] text-lg text-gray-500"
            name="prime:chevron-right"
          />

          <NuxtLink aria-label="Prodavnica" to="/prodavnica"
            >Prodavnica</NuxtLink
          >
        </div>
        <div class="border-b border-gray-200">
          <h1 class="px-4 py-6 text-xl font-semibold">Kategorije</h1>
        </div>
        <div>
          <ul class="relative list-none pb-4 text-sm">
            <li
              v-for="(link, index) in categories"
              :key="index"
              class="relative flex flex-col items-start justify-between border-b border-gray-200 text-gray-600"
            >
              <div
                class="flex w-full items-center justify-between px-4 py-4"
                :class="{ 'border-b border-gray-200': link.showMore }"
              >
                <NuxtLink
                  aria-label="Link kategorije"
                  :to="'prodavnica' + link.to"
                  @click="$emit('filterByMainCategory', link.title)"
                  class="sidenav cursor-pointer text-sm font-semibold text-black"
                >
                  {{ link.title }} ({{ productsMainCategory(link.title) }})
                </NuxtLink>

                <Icon
                  @click="link.showMore = !link.showMore"
                  class="cursor-pointer text-2xl"
                  v-if="link.showMore"
                  name="prime:chevron-up"
                />
                <Icon
                  @click="link.showMore = !link.showMore"
                  class="cursor-pointer text-2xl"
                  v-if="!link.showMore"
                  name="prime:chevron-down"
                />
              </div>
              <ul
                v-if="link.showMore"
                class="relative w-full cursor-pointer list-none py-2"
              >
                <li
                  @click="$emit('filterBySubCategory', rowLink.names)"
                  class="relative w-full px-6 py-1 hover:bg-gray-50"
                  v-for="(rowLink, rowIndex) in link.sublinks"
                  :key="rowIndex"
                >
                  <p class="text-gray-500">
                    {{ rowLink.names }} ({{
                      productsSubCategory(rowLink.names)
                    }})
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="border-b border-gray-200">
          <h1 class="px-4 py-6 text-xl font-semibold">Brend</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLinkStore } from "../store/navlinks";
import { useProductStore } from "../store/product";
import { storeToRefs } from "pinia";
import { CarPart } from "../types/cardType";
const { categories } = storeToRefs(useLinkStore());

const { cards } = storeToRefs(useProductStore());
const productsMainCategory = (name: string) => {
  return cards.value.filter((card: CarPart) => card.main_category === name)
    .length;
};
const productsSubCategory = (name: string) => {
  return cards.value.filter((card: CarPart) => card.category === name).length;
};

//filter by mark model and year
const filterByCar = (mark: string, model: string, year: string) => {
  return cards.value.filter(
    (card: CarPart) =>
      card.mark === mark && card.model === model && card.year === year,
  );
};
</script>

<style scoped></style>
