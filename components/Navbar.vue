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
            <NuxtLink to="/">
              <h1 class="flex items-center text-xl font-bold text-black">
                Car<span class="text-yellow-400">Gear.</span>
              </h1>
            </NuxtLink>
            <ul class="ml-24 hidden h-18 gap-2 lg:flex">
              <li
                v-for="(link, index) in navLinks"
                :key="index"
                class="group flex items-center py-0 text-sm text-navbarText hover:border-b-2 hover:border-yellow-400 lg:py-6"
              >
                <NuxtLink class="p-2 lg:py-6" :to="link.to">
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
                      <NuxtLink>
                        <p
                          class="mb-4 py-1 font-semibold text-gray-700 hover:bg-gray-50"
                        >
                          {{ category.title }}
                        </p>
                      </NuxtLink>
                      <ul>
                        <li
                          v-for="(sublink, subLinkIndex) in category.sublinks"
                          :key="subLinkIndex"
                        >
                          <NuxtLink
                            :to="'/prodavnica' + sublink.to"
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
                v-model="searchInput"
                @input="handleInput"
                :disabled="searchArea"
              />
              <div
                @click="handleInput"
                class="flex cursor-pointer items-center justify-center rounded-full p-2 transition duration-150 hover:bg-gray-200"
              >
                <span
                  class="icon-[prime--search] text-3xl sm:text-3xl"
                  aria-hidden="true"
                />
              </div>
            </label>
            <div class="flex items-center justify-between gap-2 lg:ml-4">
              <NuxtLink to="/lista-zelja">
                <div class="relative p-1">
                  <span
                    class="icon-[prime--heart] relative hidden text-3xl lg:block"
                    aria-hidden="true"
                  />
                  <span
                    class="absolute right-0 top-0 hidden h-4 w-4 items-center justify-center rounded-full bg-yellow-400 p-2 text-xs lg:flex"
                  >
                    {{ wishList.length }}
                  </span>
                </div>
              </NuxtLink>

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
  <!-- Search Section -->
  <div
    ref="searchRef"
    class="scrollbar fixed top-0 z-[100] h-screen w-full overflow-y-auto bg-white lg:h-auto"
    v-if="searchArea"
  >
    <div
      class="container mx-auto flex w-full items-center justify-between gap-10 border-b border-gray-200 bg-white px-6 py-3"
    >
      <h1 class="hidden items-center text-xl font-bold text-black lg:flex">
        Car<span class="text-yellow-400">Gear.</span>
      </h1>
      <label
        class="4 relative flex w-full rounded-full bg-gray-100 lg:w-1/2"
        for="search"
      >
        <input
          class="text-md ml-2 w-full rounded-full bg-gray-100 p-3 px-2 focus:outline-none sm:block"
          type="text"
          v-model="searchInput"
          @input="filterLinksByText"
          placeholder="Pretraži po imenu ili kategoriji..."
          v-focus
        />
        <NuxtLink
          class="rounded-full p-2 transition duration-150 hover:bg-gray-200"
          :to="'/prodavnica' + '/' + searchInput"
        >
          <div class="flex cursor-pointer items-center justify-center">
            <span
              class="icon-[prime--search] text-3xl sm:text-3xl"
              aria-hidden="true"
            />
          </div>
        </NuxtLink>
      </label>
      <p
        @click="handleExit"
        class="text-md cursor-pointer py-1 hover:text-gray-600"
      >
        Izadji
      </p>
    </div>
    <div
      v-if="searchInput.length < 1"
      class="container mx-auto flex w-full justify-center px-6 py-12"
    >
      <ul class="flex w-full flex-col items-start lg:w-1/2 lg:px-6">
        <h1 class="mb-3 text-sm text-gray-600">Popularna Pretraživanja</h1>
        <li
          class="flex text-lg"
          v-for="(link, index) in popularSearches"
          :key="index"
        >
          <NuxtLink class="hover:text-gray-600" :to="link.to"
            >{{ link.names }}
          </NuxtLink>
          <hr />
        </li>
      </ul>
    </div>
    <div
      v-else
      class="container mx-auto flex w-full flex-col gap-14 px-6 py-12 lg:flex-row lg:gap-0"
    >
      <ul class="w-full lg:w-1/3">
        <h1 class="mb-3 text-sm text-gray-600">Predlozi</h1>
        <li
          class="flex text-lg"
          v-for="(link, index) in filteredLinks"
          :key="index"
        >
          <NuxtLink
            class="cursor-pointer hover:text-gray-600"
            :to="'/prodavnica' + link.to"
            @mouseover="filterCardsByText(link.names)"
            >{{ link.names }}
          </NuxtLink>
          <hr />
        </li>
      </ul>
      <div class="w-full">
        <h1 class="mb-3 text-sm text-gray-600">Proizvodi</h1>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <NuxtLink
            @click="handleExit"
            v-for="(card, index) in filteredCards"
            :key="index"
            :to="'/' + card.to + '/' + card.id"
          >
            <div
              class="relative w-full rounded-lg border border-gray-200 bg-white"
            >
              <div class="flex items-center justify-center rounded-lg">
                <img class="w-32" :src="card.image" alt="product_image" />
              </div>

              <div
                class="mt-4 flex flex-col items-start justify-start px-4 pb-4"
              >
                <p class="mt-1 text-xs text-gray-400">{{ card.category }}</p>
                <h1 class="text-xs font-bold text-gray-900">
                  {{ card.title }}
                </h1>
                <div class="mt-2">
                  <p class="ml-[-2px] text-lg font-bold text-gray-800">
                    {{ card.newPrice }} RSD
                  </p>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="searchArea"
    class="h-gray fixed z-[99] h-screen w-full bg-black/10 backdrop-blur-sm"
  ></div>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { CarPart } from "../types/cardType";
import { useProductStore } from "../store/product";
import { useLinkStore } from "../store/navlinks";
import { storeToRefs } from "pinia";

const { wishList } = addToWishList();
const { cards } = storeToRefs(useProductStore());
const { navLinks } = storeToRefs(useLinkStore());

// input settings
const popularSearches = [
  { names: "Akumulatori", to: "/akumulatori" },
  { names: "Svećice i kablovi", to: "/svecice-i-kablovi" },
  { names: "Alnaseri i paljenje", to: "/alnaseri-i-paljenje" },
  { names: "Senzori i regulatori", to: "/senzori-i-regulatori" },
  { names: "Elektronske kontrole", to: "/elektronske-kontrole" },
];

const suggestedLinks = [
  { names: "Motorne komponente", to: "/motorne-komponente" },
  { names: "Kuleri i hladnjaci", to: "/kuleri-i-hladnjaci" },
  { names: "Filteri za motor", to: "/filteri-za-motor" },
  { names: "Kaiševi i remeni", to: "/kaisevi-i-remeni" },
  { names: "Pumpa za gorivo", to: "/pumpa-za-gorivo" },
  { names: "Akumulatori", to: "/akumulatori" },
  { names: "Svećice i kablovi", to: "/svecice-i-kablovi" },
  { names: "Alnaseri i paljenje", to: "/alnaseri-i-paljenje" },
  { names: "Senzori i regulatori", to: "/senzori-i-regulatori" },
  { names: "Elektronske kontrole", to: "/elektronske-kontrole" },
  { names: "Farovi i sijalice", to: "/farovi-i-sijalice" },
  { names: "Migavci i svetla za maglu", to: "/migavci-i-svetla-za-maglu" },
  { names: "Stop svetla i reflektori", to: "/stop-svetla-i-reflektori" },
  {
    names: "Svetla za regulisanje saobraćaja",
    to: "/svetla-za-regulisanje-saobracaja",
  },
  { names: "Svetla unutar vozila", to: "/svetla-unutar-vozila" },
];

const searchArea = ref(false);
const searchInput = ref("");
const searchRef = ref(null);
onClickOutside(searchRef, () => handleExit());
const vFocus = {
  mounted: (el: any) => el.focus(),
};

const handleInput = () => {
  searchArea.value = true;
  document.body.style.overflow = searchArea.value ? "hidden" : "";
};

const handleExit = () => {
  searchArea.value = false;
  searchInput.value = "";
  document.body.style.overflow = searchArea.value ? "hidden" : "";
};

// filtered links
interface Link {
  names: string;
  to: string;
}
const filteredLinks = ref<Link[]>([]);
const linkRef = ref();
filteredLinks.value = suggestedLinks.slice(0, 5);
const filterLinksByText = () => {
  const searchText = searchInput.value.toLowerCase();

  filteredLinks.value = suggestedLinks
    .filter((link) => {
      return link.names.toLowerCase().includes(searchText);
    })
    .slice(0, 5);

  if (filteredLinks.value.length < 1) {
    filteredLinks.value = suggestedLinks?.slice(0, 5);
  }
};

const filteredCards = ref(cards.value.slice(0, 4));
watch(filteredLinks, (newFilteredLinks) => {
  if (newFilteredLinks.length > 0) {
    filterCardsByText(newFilteredLinks[0].names);
  }
});

const filterCardsByText = (text: string) => {
  const searchText = text.toLowerCase();

  filteredCards.value = cards.value
    .filter((card) => {
      return (
        card.title.toLowerCase().includes(searchText) ||
        card.category.toLowerCase().includes(searchText)
      );
    })
    .slice(0, 4);
  if (filteredCards.value.length < 1) {
    filteredCards.value = cards.value.slice(0, 4);
  }
};
</script>

<style scoped></style>
