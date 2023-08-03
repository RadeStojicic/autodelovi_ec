<template>
  <div
    class="relative mt-24 h-auto w-96 select-none border border-gray-200 bg-white text-black"
  >
    <div class="flex w-full flex-col">
      <div class="border-b border-gray-200">
        <h1 class="px-4 py-6 text-xl font-semibold">Filteri</h1>
      </div>
      <div class="border-b border-gray-200">
        <div
          @click="showMore = !showMore"
          :class="{ 'border-b border-gray-200': showMore }"
          class="flex cursor-pointer items-center justify-between px-4 py-4"
        >
          <p class="text-sm font-semibold">Kategorije</p>
          <span
            class="text-2xl text-gray-400"
            :class="{
              'icon-[prime--chevron-up]': showMore,
              'icon-[prime--chevron-down]': !showMore,
            }"
          />
        </div>
        <ul v-if="showMore" class="relative list-none pb-4 text-sm">
          <li v-for="(link, index) in categories" :key="index" class="relative">
            <NuxtLink
              class="flex cursor-pointer flex-col items-start justify-between text-gray-600"
            >
              <p class="px-6 pt-3 text-sm font-semibold text-black">
                {{ link.title }}
              </p>
              <ul class="relative w-full list-none py-2">
                <li
                  class="relative w-full px-6 py-1 hover:bg-gray-50"
                  v-for="(rowLink, rowIndex) in link.sublinks"
                  :key="rowIndex"
                >
                  <p class="text-gray-500">{{ rowLink.names }}</p>
                </li>
              </ul>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showMore = ref(true);

const categories = [
  {
    title: "Motor i Pogon",
    sublinks: [
      { names: "Motorne komponente" },
      { names: "Kuleri i hladnjaci" },
      { names: "Filteri za motor" },
      { names: "Kaiševi i remeni" },
      { names: "Pumpa za gorivo" },
    ],
  },
  {
    title: "Elektrika i Elektronika",
    sublinks: [
      { names: "Akumulatori" },
      { names: "Svećice i kablovi" },
      { names: "Alnaseri i paljenje" },
      { names: "Senzori i regulatori" },
      { names: "Elektronske kontrole" },
    ],
  },
  {
    title: "Osvetljenje i Signalizacija",
    sublinks: [
      { names: "Farovi i sijalice" },
      { names: "Migavci i svetla za maglu" },
      { names: "Stop svetla i reflektori" },
      {
        names: "Svetla za regulisanje saobraćaja",
      },
      { names: "Svetla unutar vozila" },
    ],
  },
  {
    title: "Karoserija i Enterijer",
    sublinks: [
      { names: "Spoljna ogledala" },
      { names: "Branici i amortizeri" },
      { names: "Stakla i vetrobrani" },
      {
        names: "Enterijerni delovi i tapacirung",
      },
      { names: "Vrata i zaključavanje" },
    ],
  },
  {
    title: "Pneumatici",
    sublinks: [
      { names: "Zimske i letnje gume" },
      { names: "Felne i ratkapne" },
      { names: "Rezervni točkovi" },
      { names: "Ventili za gume" },
      { names: "Pneumatski sistemi" },
    ],
  },
];
</script>

<style scoped></style>
