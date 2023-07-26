
<template>
  <div>
    <!-- NavTop -->
    <div class="bg-black text-white py-2">
      <div
        class="md:container bg-black mx-auto flex justify-between items-center px-6"
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
    <div class="border-b border-gray-100 z-50 relative bg-white">
      <nav class="md:container mx-auto px-6">
        <div class="flex justify-between items-center py-2 lg:py-0">
          <div class="flex items-center">
            <h1>Logo</h1>
            <ul class="hidden gap-6 ml-28 lg:flex">
              <li
                v-for="(link, index) in navLinks"
                :key="index"
                class="group text-sm py-0 lg:py-6 text-gray-900"
              >
                <NuxtLink :to="link.to">
                  {{ link.names }}
                </NuxtLink>
                <div
                  v-if="link.categories"
                  class="absolute w-full left-0 top-full bg-white border-b border-gray-200 shadow-sm hidden group-hover:block"
                >
                  <ul class="w-5/6 m-auto justify-between flex py-12">
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

          <div class="flex items-center justify-end z-50">
            <label class="flex p-2 rounded-full sm:bg-gray-100" for="search">
              <span
                class="i-prime-search icon text-3xl sm:text-2xl"
                aria-hidden="true"
              />
              <input
                class="hidden bg-gray-100 ml-2 text-sm focus:outline-none sm:block"
                type="text"
                placeholder="Pretraži..."
              />
            </label>
            <div class="flex items-center justify-between gap-2 lg:ml-4">
              <span
                class="i-prime-heart icon text-3xl hidden lg:block"
                aria-hidden="true"
              />
              <span
                class="i-prime-shopping-bag icon text-3xl"
                aria-hidden="true"
              />
              <ClientOnly>
                <responsive-nav :navLinks="navLinks" />
              </ClientOnly>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup  lang="ts">
import { ref } from "vue";

const navLinks = [
  { names: "Početna", to: "/home" },
  {
    names: "Kategorije",
    to: "/categories",
    categories: [
      {
        title: "Motor i Pogon",
        to: "/motor-i-pogon",
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
        to: "/elektrika-i-elektronika",
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
        to: "/osvetljenje-i-signalizacija",
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
        to: "/karoserija-i-enterijer",
        sublinks: [
          { names: "Spoljna ogledala", to: "/category2" },
          { names: "Branici i amortizeri", to: "/category2" },
          { names: "Stakla i vetrobrani", to: "/category2" },
          { names: "Enterijerni delovi i tapacirung", to: "/category2" },
          { names: "Vrata i zaključavanje", to: "/category2" },
        ],
      },
      {
        title: "Pneumatici",
        to: "/pneumatici",
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