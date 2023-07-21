
<template>
  <div>
    <!-- NavTop -->
    <div class="w-screen flex items-center justify-center bg-black h-8">
      <div
        class="max-w-7xl w-screen flex items-center justify-between p-4 lg:mx-14 lg:p-0 text-gray-100 lg:max-w-screen-2xl"
      >
        <div class="flex items-center justify-start">
          <span class="i-prime-phone" />
          <p class="text-xs">+381 6442786</p>
        </div>
        <div>
          <p class="text-xs hidden md:block">
            50% Popusta Na Odredjene Artikle
          </p>
        </div>
        <div>
          <ul>
            <li class="text-xs flex items-center gap-2">
              <NuxtLink to="/">Podrška</NuxtLink>
              <NuxtLink to="/">Prodavnica</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- NavBottom -->
    <div class="w-screen sticky z-10">
      <nav
        class="flex w-screen justify-center bg-white border-b border-gray-100"
      >
        <div
          class="max-w-7xl w-screen flex items-center justify-between p-4 lg:mx-14 lg:p-0 lg:max-w-screen-2xl"
        >
          <div class="flex items-center">
            <h1>Logo</h1>
            <ul class="hidden lg:flex gap-8 ml-28">
              <li
                v-for="(link, index) in navLinks"
                :key="index"
                class="group py-6 text-sm text-gray-900 hover:border-b border-black"
              >
                <NuxtLink :to="link.to" class="">
                  {{ link.names }}
                </NuxtLink>
                <div
                  v-if="link.categories"
                  class="absolute w-full top-full left-0 bg-white border border-gray-200 shadow-sm hidden group-hover:block"
                >
                  <ul class="w-5/6 max-w-7xl m-auto justify-between flex py-12">
                    <li
                      v-for="(category, subIndex) in link.categories"
                      :key="subIndex"
                    >
                      <p class="font-semibold mb-4">{{ category.title }}</p>
                      <ul>
                        <li
                          v-for="(sublink, subLinkIndex) in category.sublinks"
                          :key="subLinkIndex"
                        >
                          <NuxtLink
                            :to="sublink.to"
                            class="block py-1 text-gray-600 text-sm hover:text-gray-800"
                          >
                            {{ sublink.names }}
                          </NuxtLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div class="flex items-center">
            <label class="flex p-2 rounded-full sm:bg-gray-100" for="search">
              <span
                class="i-prime-search icon sm:text-2xl text-3xl"
                aria-hidden="true"
              />
              <input
                class="hidden bg-gray-100 ml-2 text-sm focus:outline-none sm:block"
                type="text"
                placeholder="Pretraži..."
              />
            </label>
            <div class="flex items-center lg:ml-4 gap-2">
              <span
                class="i-prime-heart icon text-3xl hidden lg:block"
                aria-hidden="true"
              />
              <span
                class="i-prime-shopping-bag icon text-3xl"
                aria-hidden="true"
              />
              <span
                @click="navStatus = !navStatus"
                class="i-prime-bars block text-4xl lg:hidden cursor-pointer"
                aria-hidden="true"
              ></span>
            </div>
          </div>
        </div>
      </nav>
      <!--  Mobile menu -->
      <div
        v-if="navStatus"
        class="bg-gray-100 w-screen h-screen overflow-y-auto lg:hidden"
      >
        <ul class="flex flex-col w-full">
          <li
            v-for="(link, index) in navLinks"
            :key="index"
            class="group text-sm border-b border-gray-200 text-gray-900 font-semibold flex flex-col"
          >
            <NuxtLink :to="link.to" class="py-6 px-8 w-full">
              {{ link.names }}
            </NuxtLink>

            <div v-if="link.categories" class="w-full">
              <div class="">
                <ul class="w-full flex flex-col">
                  <li
                    class="text-gray-500"
                    v-for="(category, subIndex) in link.categories"
                    :key="subIndex"
                  >
                    <p
                      class="cursor-pointer w-full px-8 py-4 border-b border-gray-200"
                    >
                      {{ category.title }}
                    </p>
                    <ul class="w-full flex flex-col">
                      <li
                        class="group text-sm border-b border-gray-200 text-gray-900 font-semibold flex flex-col"
                        v-for="(sublink, subLinkIndex) in category.sublinks"
                        :key="subLinkIndex"
                      >
                        <NuxtLink :to="sublink.to" class="px-10 py-3 w-full">
                          {{ sublink.names }}
                        </NuxtLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const navStatus = ref(false);
const navLinks = [
  { names: "Početna", to: "/home" },
  {
    names: "Kategorije",
    to: "/categories",
    categories: [
      {
        title: "Motor i Pogon",
        sublinks: [
          { names: "Motorne komponente", to: "/category2" },
          { names: "Kuleri i hladnjaci", to: "/category2" },
          { names: "Filteri za motor", to: "/category2" },
          { names: "Kaiševi i remeni", to: "/category2" },
          { names: "Pumpa za gorivo", to: "/category2" },
        ],
      },
      {
        title: "Elektrika i Elektronika",
        sublinks: [
          { names: "Akumulatori", to: "/category2" },
          { names: "Svećice i kablovi", to: "/category2" },
          { names: "Alnaseri i paljenje", to: "/category2" },
          { names: "Senzori i regulatori", to: "/category2" },
          { names: "Elektronske kontrole", to: "/category2" },
        ],
      },

      {
        title: "Osvetljenje i Signalizacija",
        sublinks: [
          { names: "Farovi i sijalice", to: "/category2" },
          { names: "Migavci i svetla za maglu", to: "/category2" },
          { names: "Stop svetla i reflektori", to: "/category2" },
          { names: "Svetla za regulisanje saobraćaja", to: "/category2" },
          { names: "Svetla unutar vozila", to: "/category2" },
        ],
      },
      {
        title: "Karoserija i Enterijer",
        sublinks: [
          { names: "Spoljna ogledala", to: "/category2" },
          { names: "Branici i amortizeri", to: "/category2" },
          { names: "Stakla i vetrobrani", to: "/category2" },
          { names: "Enterijerni delovi i tapacirung", to: "/category2" },
          { names: "Vrata i zaključavanje", to: "/category2" },
        ],
      },
      {
        title: "Pneumatici i Točkovi",
        sublinks: [
          { names: "Zimske i letnje gume", to: "/category2" },
          { names: "Felne i ratkapne", to: "/category2" },
          { names: "Rezervni točkovi", to: "/category2" },
          { names: "Ventili za gume", to: "/category2" },
          { names: "Pneumatski sistemi", to: "/category2" },
        ],
      },
    ],
  },
  { names: "Novosti", to: "/news" },
  { names: "Isporuka", to: "/delivery" },
];
</script>

<style scoped>
</style>