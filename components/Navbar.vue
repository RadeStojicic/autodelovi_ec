<template>
  <div>
    <!-- NavTop -->
    <div class="bg-black py-2 text-white">
      <div
        class="mx-auto flex items-center justify-between bg-black px-6 md:container"
      >
        <div class="flex items-center justify-start">
          <span class="icon-[prime--phone]" />
          <p class="text-xs">+381 6442786</p>
        </div>
        <div>
          <p class="hidden text-xs md:block">
            50% Popusta Na Odredjene Artikle
          </p>
        </div>
        <div>
          <ul>
            <li class="flex items-center gap-2 text-xs">
              <NuxtLink to="/">Podrška</NuxtLink>
              <NuxtLink to="/">Prodavnica</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- NavBottom -->
    <div class="relative z-50 border-b border-gray-100 bg-white">
      <nav class="mx-auto px-6 md:container">
        <div class="flex items-center justify-between py-2 lg:py-0">
          <div class="flex items-center">
            <h1>Logo</h1>
            <ul class="ml-28 hidden gap-6 lg:flex">
              <li
                v-for="(link, index) in navLinks"
                :key="index"
                class="group py-0 text-sm text-gray-900 lg:py-6"
              >
                <NuxtLink :to="link.to">
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
                      <p class="mb-4 font-semibold">
                        {{ category.title }}
                      </p>
                      <ul>
                        <li
                          v-for="(sublink, subLinkIndex) in category.sublinks"
                          :key="subLinkIndex"
                        >
                          <NuxtLink
                            :to="sublink.to"
                            class="block py-1 text-sm text-gray-600 hover:text-gray-800"
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
            <label class="flex rounded-full p-2 sm:bg-gray-100" for="search">
              <span
                class="icon-[prime--search] text-3xl sm:text-2xl"
                aria-hidden="true"
              />
              <input
                class="ml-2 hidden bg-gray-100 text-sm focus:outline-none sm:block"
                type="text"
                placeholder="Pretraži..."
              />
            </label>
            <div class="flex items-center justify-between gap-2 lg:ml-4">
              <span
                class="icon-[prime--heart] hidden text-3xl lg:block"
                aria-hidden="true"
              />
              <span
                class="icon-[prime--shopping-bag] text-3xl"
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

<script setup lang="ts">
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
  { names: "Novosti", to: "/news" },
  { names: "Isporuka", to: "/delivery" },
];
</script>

<style scoped></style>
