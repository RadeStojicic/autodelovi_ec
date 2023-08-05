<template>
  <!-- NavTop -->
  <div class="bg-yellow-400 py-2 text-black">
    <div
      class="mx-auto flex items-center justify-between bg-yellow-400 px-6 md:container"
    >
      <div class="flex items-center justify-start">
        <span class="icon-[prime--phone]" />
        <p class="text-xs">+381 6442786</p>
      </div>
      <div>
        <p class="hidden text-xs md:block">50% Popusta Na Odredjene Artikle</p>
      </div>
      <div>
        <ul>
          <li class="flex items-center gap-2 text-xs">
            <NuxtLink to="/podrska">Podrška</NuxtLink>
            <NuxtLink to="/prodavnica">Prodavnica</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- NavBottom -->
  <div class="sticky top-0 z-50 w-full">
    <div class="border-b border-gray-200 bg-white">
      <nav class="mx-auto px-6 md:container">
        <div class="flex items-center justify-between py-2 lg:py-0">
          <div class="flex items-center">
            <h1 class="flex items-center text-xl font-bold text-black">
              Car<span class="text-yellow-400">Gear.</span>
            </h1>
            <ul class="ml-24 hidden h-18 gap-2 lg:flex">
              <li
                v-for="(link, index) in navLinks"
                :key="index"
                class="group flex items-center py-0 text-sm text-navbarText hover:border-b-2 hover:border-yellow-400 lg:py-6"
              >
                <NuxtLink class="p-2" :to="link.to">
                  {{ link.names }}
                </NuxtLink>
                <div
                  v-if="link.categories"
                  class="absolute left-0 top-full hidden w-full border-b border-gray-200 bg-white shadow-sm group-hover:block"
                >
                  <ul class="m-auto flex w-5/6 justify-between py-12">
                    <li
                      v-for="(category, subIndex) in link.categories"
                      :key="subIndex"
                    >
                      <p class="mb-4 font-semibold text-gray-700">
                        {{ category.title }}
                      </p>
                      <ul>
                        <li
                          v-for="(sublink, subLinkIndex) in category.sublinks"
                          :key="subLinkIndex"
                        >
                          <NuxtLink
                            :to="sublink.to"
                            class="block py-1 text-sm text-gray-600 hover:bg-gray-50"
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

          <div class="z-50 flex items-center justify-end">
            <label class="flex rounded-full sm:bg-gray-100" for="search">
              <input
                class="ml-2 hidden w-64 rounded-full bg-gray-100 px-2 text-sm focus:outline-none sm:block"
                type="text"
                placeholder="Pretraži..."
              />
              <div
                class="flex cursor-pointer items-center justify-center rounded-full p-2 transition duration-150 hover:bg-gray-200"
              >
                <span
                  class="icon-[prime--search] text-3xl sm:text-3xl"
                  aria-hidden="true"
                />
              </div>
            </label>
            <div class="flex items-center justify-between gap-2 lg:ml-4">
              <div class="relative p-1">
                <span
                  class="icon-[prime--heart] relative hidden text-3xl lg:block"
                  aria-hidden="true"
                />
                <span
                  class="absolute right-0 top-0 hidden h-4 w-4 items-center justify-center rounded-full bg-yellow-400 p-2 text-xs lg:flex"
                  >0</span
                >
              </div>

              <span
                class="icon-[prime--shopping-bag] text-3xl"
                aria-hidden="true"
              />

              <responsive-nav :navLinks="navLinks"></responsive-nav>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const navLinks = [
  { names: "Početna", to: "/" },
  {
    names: "Kategorije",
    to: "/kategorije",
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
          {
            names: "Svetla za regulisanje saobraćaja",
            to: "/category2",
          },
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
          {
            names: "Enterijerni delovi i tapacirung",
            to: "/category2",
          },
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
  { names: "Novosti", to: "/novosti" },
  { names: "Kontakt", to: "/kontakt" },
];
</script>

<style scoped></style>
