
<template>
  <div class="w-screen fixed">
    <nav class="flex w-screen justify-center bg-white border-b border-gray-100">
      <div
        class="max-w-7xl w-screen flex items-center justify-between p-4 lg:mx-14 lg:p-0"
      >
        <div class="flex items-center">
          <h1>Logo</h1>
          <ul class="hidden lg:flex gap-8 ml-28">
            <li
              v-for="(link, index) in navLinks"
              :key="index"
              class="group py-6 text-sm text-gray-900"
            >
              <NuxtLink :to="link.to" class="group-hover:text-gray-800">
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
</template>

<script setup>
import { ref } from "vue";

const navStatus = ref(false);
const navLinks = ref([
  { names: "Početna", to: "/home" },
  {
    names: "Kategorije",
    to: "/categories",
    categories: [
      {
        title: "Delovi motora",
        sublinks: [
          { names: "Klipovi", to: "/category2" },
          { names: "Glave motora", to: "/category2" },
          { names: "Bregaste osovine", to: "/category2" },
          { names: "Radilice", to: "/category2" },
          { names: "Delovi za vreme paljenja", to: "/category2" },
        ],
      },
      {
        title: "Izduvni sistem",
        sublinks: [
          { names: "Auspusi", to: "/category2" },
          { names: "Katalizatori", to: "/category2" },
          { names: "Izduvne cevi", to: "/category2" },
          { names: "Izduvni kolektori", to: "/category2" },
        ],
      },

      {
        title: "Delovi za suspenziju",
        sublinks: [
          { names: "Amortizeri", to: "/category2" },
          { names: "Nosači točkova", to: "/category2" },
          { names: "Poprečne stabilizatorske šipke", to: "/category2" },
          { names: "Kugle viljuške", to: "/category2" },
        ],
      },
      {
        title: "Električni delovi",
        sublinks: [
          { names: "Baterije", to: "/category2" },
          { names: "Alternatori", to: "/category2" },
          { names: "Anlaseri", to: "/category2" },
          { names: "Bobine paljenja", to: "/category2" },
          { names: "Svećice", to: "/category2" },
        ],
      },
      {
        title: "Filteri i tečnosti",
        sublinks: [
          { names: "Filteri za ulje", to: "/category2" },
          { names: "Filteri za vazduh", to: "/category2" },
          { names: "Filteri za gorivo", to: "/category2" },
          { names: "Tečnost za menjač", to: "/category2" },
          { names: "Motorno ulje", to: "/category2" },
        ],
      },
    ],
  },
  { names: "Novosti", to: "/news" },
  { names: "Isporuka", to: "/delivery" },
]);
</script>

<style scoped>
</style>