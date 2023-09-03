<template>
  <!-- NavTop -->
  <div class="bg-primary pt-4 text-white">
    <div class="mx-auto px-4 md:container">
      <div
        class="flex items-center justify-between border-b border-gray-700 pb-3"
      >
        <div class="flex items-center gap-4 text-sm md:text-xs">
          <div class="flex items-center justify-start gap-[2px]">
            <span class="icon-[prime--phone] text-lg" />
            <p class="text-sm">+381 6442786</p>
          </div>
          <div class="hidden items-center justify-start gap-[2px] md:flex">
            <span class="icon-[prime--envelope] text-lg" />
            <p class="text-sm">radestojicicsd@gmail.com</p>
          </div>
        </div>
        <div>
          <ul>
            <li class="flex items-center gap-2 text-sm">
              <NuxtLink aria-label="Podrska" to="/podrska">Podrška</NuxtLink>
              <NuxtLink aria-label="Prodavnica" to="/prodavnica"
                >Prodavnica</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- NavBottom -->
  <div class="sticky top-0 z-[50] w-full bg-primary">
    <div>
      <nav class="mx-auto px-4 md:container">
        <div class="flex items-center justify-between py-3 lg:py-0">
          <div class="flex items-center">
            <NuxtLink aria-label="Logo" to="/">
              <h1
                class="flex items-center text-2xl font-bold text-white sm:text-2xl"
              >
                <span>AutoParts</span
                ><span
                  class="mb-[-12px] ml-[3px] h-2 w-2 rounded-full bg-secondary text-4xl text-secondary"
                ></span>
              </h1>
            </NuxtLink>
            <ul class="ml-20 hidden h-18 gap-2 lg:flex">
              <li
                v-for="(link, index) in navLinks"
                :key="index"
                class="group flex items-center py-0 text-sm text-gray-300 hover:border-b-2 hover:border-secondary lg:py-6"
              >
                <MyLink class="p-2 lg:py-6" :to="link.to">
                  {{ link.names }}
                </MyLink>
                <div
                  v-if="link.categories"
                  class="absolute left-0 top-full hidden w-full border-b border-gray-200 bg-white shadow-sm group-hover:block"
                >
                  <ul class="m-auto flex w-5/6 justify-between py-12">
                    <li
                      v-for="(category, subIndex) in link.categories"
                      :key="subIndex"
                    >
                      <NuxtLink aria-label="Navbar link">
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
                          <MyLink
                            :to="'/prodavnica' + sublink.to"
                            class="block py-1 text-sm text-gray-600 hover:bg-gray-50"
                          >
                            {{ sublink.names }}
                          </MyLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div class="z-50 flex items-center justify-end">
            <label class="flex rounded-full sm:bg-[#294b6b]" for="search">
              <input
                class="placeholder:line ml-2 hidden w-64 rounded-full bg-[#294b6b] px-2 text-sm text-white placeholder:text-white focus:outline-none sm:block"
                type="text"
                placeholder="Pretraži..."
                v-model="searchInput"
                @input="handleInput"
                :disabled="searchArea"
              />
              <div
                @click="handleInput"
                class="flex cursor-pointer items-center justify-center rounded-full transition duration-150 sm:p-[7px] sm:hover:bg-gray-200"
              >
                <span
                  class="icon-[prime--search] text-4xl text-white sm:text-3xl"
                  aria-hidden="true"
                />
              </div>
            </label>
            <div
              class="flex items-center justify-between gap-0 sm:gap-1 lg:ml-1"
            >
              <NuxtLink
                class="hidden sm:block"
                aria-label="Lista zelja"
                to="/lista-zelja"
              >
                <div class="relative ml-1 p-1 sm:ml-0">
                  <span
                    class="icon-[prime--heart] relative bg-white text-4xl sm:block sm:text-3xl lg:block"
                    aria-hidden="true"
                  />
                  <span
                    class="absolute right-[2px] top-[2px] flex h-4 w-4 items-center justify-center rounded-full bg-secondary p-2 text-xs sm:right-0 sm:top-0"
                  >
                    {{ wishList.length }}
                  </span>
                </div>
              </NuxtLink>
              <div
                @click="toggleAddToCart"
                class="relative ml-1 mt-[4px] block cursor-pointer p-1 sm:ml-0"
              >
                <span
                  class="icon-[prime--shopping-bag] bg-white text-[2rem]"
                  aria-hidden="true"
                />
                <span
                  class="absolute right-[2px] top-[2px] flex h-4 w-4 items-center justify-center rounded-full bg-secondary p-2 text-xs sm:right-[2px] sm:top-[2px]"
                >
                  {{ localStorageCart.length }}
                </span>
              </div>

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
      class="mx-auto flex w-full items-center justify-between gap-10 border-b border-gray-200 bg-primary px-4 py-3 sm:gap-10"
    >
      <NuxtLink aria-label="Logo" class="hidden sm:flex" to="/">
        <h1 class="flex items-center text-2xl font-bold text-white sm:text-2xl">
          <span>AutoParts</span
          ><span
            class="mb-[-12px] ml-[3px] h-2 w-2 rounded-full bg-secondary text-4xl text-secondary"
          ></span>
        </h1>
      </NuxtLink>
      <label
        class="relative flex w-full rounded-full bg-gray-100 lg:w-1/2"
        for="search"
      >
        <input
          class="text-md ml-2 w-full rounded-full bg-gray-100 p-3 px-2 focus:outline-none sm:block"
          type="text"
          v-model="searchInput"
          @input="filterLinksByText"
          placeholder="Pretraži..."
          v-focus
        />
        <NuxtLink
          aria-label="Pretraga"
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
        class="cursor-pointer py-1 text-lg text-white hover:text-gray-200 lg:text-base"
      >
        Izadji
      </p>
    </div>
    <div
      v-if="searchInput.length < 1"
      class="container mx-auto flex w-full justify-center px-6 py-14 sm:py-12"
    >
      <ul class="flex w-full flex-col items-start lg:w-1/2 lg:px-6">
        <h1 class="text-md mb-3 text-gray-600 md:text-sm">
          Popularna Pretraživanja
        </h1>
        <li
          class="flex text-xl md:text-lg"
          v-for="(link, index) in popularSearches"
          :key="index"
        >
          <NuxtLink aria-label="Link" class="hover:text-gray-600" :to="link.to"
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
        <h1 class="text-md mb-3 text-gray-600 md:text-sm">Predlozi</h1>
        <li
          class="flex text-lg"
          v-for="(link, index) in filteredLinks"
          :key="index"
        >
          <NuxtLink
            aria-label="Link"
            class="cursor-pointer hover:text-gray-600"
            :to="'/prodavnica' + link.to"
            @mouseover="filterCardsByText(link.names)"
            >{{ link.names }}
          </NuxtLink>
          <hr />
        </li>
      </ul>
      <div class="w-full pb-6">
        <h1 class="text-md mb-3 text-gray-600 md:text-sm">Proizvodi</h1>
        <div
          class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-2 md:mt-0 lg:grid-cols-4"
        >
          <NuxtLink
            aria-label="Proizvod"
            @click="handleExit"
            v-for="(card, index) in filteredCards"
            :key="index"
            :to="'/prodavnica/' + +card.to + '/' + card.id"
          >
            <div
              class="relative w-full rounded-lg border border-gray-200 bg-white"
            >
              <div class="flex items-center justify-center rounded-lg">
                <NuxtImg
                  format="webp"
                  quality="100"
                  sizes="112px sm:128px"
                  class="md:p-0"
                  :src="card.image"
                  alt="product_image"
                />
              </div>

              <div
                class="mt-4 flex flex-col items-start justify-start px-4 pb-4"
              >
                <p class="mt-1 text-xs text-gray-400">{{ card.category }}</p>
                <h1 class="mt-[2px] text-xs font-bold text-gray-900">
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
    @click="handleExit"
    class="h-gray fixed z-[99] h-screen w-full bg-black/30 backdrop-blur-sm"
  ></div>
  <!--Moja Korpa-->
  <div>
    <MojaKorpa @toggleAddToCart="toggleAddToCart" :showCart="showCart" />
    <div
      v-if="showCart"
      @click="toggleAddToCart"
      class="fixed top-0 z-[1100] h-screen w-full bg-black/40"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { CarPart } from "../types/cardType";
import { useProductStore } from "../store/product";
import { useLinkStore } from "../store/navlinks";
import { storeToRefs } from "pinia";

import { showCart } from "../store/constants";
import { toggleSideNav } from "../store/constants";

const { wishList } = addToWishList();
const { localStorageCart } = addToCart();

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

// MyCart
const toggleAddToCart = () => {
  showCart.value = !showCart.value;
  toggleSideNav.value = false;
  document.body.style.overflow = showCart.value ? "hidden" : "";
};
</script>

<style scoped></style>
