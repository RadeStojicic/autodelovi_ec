<template>
  <transition name="slideRight" mode="out-in">
    <div
      class="scrollbar fixed left-0 top-0 z-[80] h-screen w-5/6 select-none overflow-y-auto border border-gray-200 bg-white text-black lg:hidden"
      v-if="sideNavFilters"
    >
      <div class="flex items-center justify-between border-b p-4 lg:hidden">
        <h1 class="text-2xl font-semibold">Filteri</h1>

        <Icon
          class="cursor-pointer text-3xl text-gray-500"
          @click="handleExit"
          name="prime:times"
        />
      </div>
      <div class="w-full bg-gray-200">
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

            <NuxtLink to="/prodavnica">Prodavnica</NuxtLink>
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
        </div>
      </div>
    </div>
  </transition>
  <div
    v-if="sideNavFilters"
    @click="handleExit"
    class="fixed top-0 z-[60] h-screen w-full bg-black/40 lg:hidden"
  ></div>
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

defineProps({
  sideNavFilters: Boolean,
});

const filtersRef = ref(null);
const emit = defineEmits(["handleSideFilters"]);

const handleExit = () => {
  emit("handleSideFilters");
};
</script>

<style scoped>
.slideRight-enter-active,
.slideRight-leave-active {
  transition: transform 0.3s ease;
}

.slideRight-enter-from,
.slideRight-leave-to {
  transform: translateX(-100%);
}
</style>
