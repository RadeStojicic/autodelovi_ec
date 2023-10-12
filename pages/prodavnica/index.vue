<template>
  <div>
    <div class="full mx-auto flex flex-col md:container md:flex-row">
      <transition name="sidenav-slide">
        <Sidenav
          v-if="sidenav"
          class="hidden"
          @filter-by-main-category="filterByMainCategory"
          @filter-by-sub-category="filterBySubCategory"
        />
      </transition>
      <ResponsiveSidenav
        @filter-by-main-category="filterByMainCategory"
        @filter-by-sub-category="filterBySubCategory"
        :sideNavFilters="sideNavFilters"
        @handleSideFilters="handleSideFilters"
        class="fixed lg:hidden"
      ></ResponsiveSidenav>
      <div class="w-full bg-gray-50">
        <div class="mt-10 flex flex-col px-6 lg:px-10">
          <div
            class="flex w-full items-center justify-between border-b border-gray-200"
          >
            <div class="flex items-center gap-1">
              <Icon
                @click="toggleFilters"
                name="prime:sliders-h"
                class="mt-[2px] hidden cursor-pointer items-center text-3xl lg:flex"
              />
              <h1 class="py-4 text-2xl text-black md:text-3xl">Proizvodi</h1>
            </div>

            <div class="hidden items-center gap-3 lg:flex">
              <p>Sortiraj po:</p>
              <div class="relative w-40 cursor-pointer">
                <button
                  @click="openSortBy = !openSortBy"
                  class="flex w-40 items-center justify-between rounded-md bg-gray-200 px-3 py-2 text-sm"
                >
                  {{ choosedSort }}
                  <Icon
                    name="prime:chevron-down"
                    class="flex items-center text-xl"
                  />
                </button>
                <ul
                  v-if="openSortBy"
                  class="absolute z-[40] w-full border bg-white text-xs shadow"
                >
                  <li
                    @click="applySort('Cena opadajuće')"
                    class="cursor-pointer border-b px-2 py-2 hover:bg-gray-100 hover:text-black"
                  >
                    Cena opadajuće
                  </li>
                  <li
                    @click="applySort('Cena rastuće')"
                    class="cursor-pointer border-b px-2 py-2 hover:bg-gray-100 hover:text-black"
                  >
                    Cena rastuće
                  </li>
                  <li
                    @click="applySort('Popusti opadajuće')"
                    class="cursor-pointer px-2 py-2 hover:bg-gray-100 hover:text-black"
                  >
                    Popusti opadajuće
                  </li>
                </ul>
              </div>
            </div>
            <div
              v-if="openSortBy"
              @click="openSortBy = false"
              class="absolute left-0 top-0 z-[39] h-full w-full"
            ></div>
          </div>
          <div class="mt-4 flex w-full gap-2 lg:hidden">
            <button
              aria-label="Filteri"
              @click="handleSideFilters"
              class="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-gray-100 px-4 py-3"
            >
              Filteri<Icon
                name="prime:chevron-down"
                class="text-2xl text-gray-950/70"
              />
            </button>
            <div
              class="relative flex w-full items-center justify-between rounded-lg border border-gray-200 bg-gray-100 px-4 py-3"
            >
              <button
                @click="openSortBy = !openSortBy"
                class="flex w-full items-center justify-between text-sm"
              >
                {{ choosedSort }}
                <Icon
                  name="prime:chevron-down"
                  class="flex items-center text-2xl text-gray-950/70"
                />
              </button>
              <ul
                v-if="openSortBy"
                class="absolute left-0 top-12 z-40 w-full border bg-white text-sm"
              >
                <li
                  @click="applySort('Cena opadajuće')"
                  class="cursor-pointer border-b px-3 py-3"
                >
                  Cena opadajuće
                </li>
                <li
                  @click="applySort('Cena rastuće')"
                  class="cursor-pointer border-b px-3 py-3"
                >
                  Cena rastuće
                </li>
                <li
                  @click="applySort('Popusti opadajuće')"
                  class="cursor-pointer px-3 py-3"
                >
                  Popusti opadajuće
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-4 flex w-full gap-1 px-6 text-gray-500 lg:px-10">
          <div
            class="flex w-auto gap-2 rounded-full bg-gray-200 px-3 py-2 text-sm"
          >
            <div class="flex items-center gap-2">
              <p>Izabrano vozilo:</p>
              <p
                v-if="
                  queryParams.marka == null ||
                  queryParams.model == null ||
                  queryParams.godiste == null
                "
              >
                (Sva)
              </p>
              <p v-else>
                {{ queryParams.marka }} {{ queryParams.model }}
                {{ queryParams.godiste }}
              </p>
            </div>
            <Icon
              name="prime:times"
              class="flex cursor-pointer items-center text-xl"
            />
          </div>
        </div>
        <transition name="slide-width" mode="out-in">
          <div
            :class="
              sidenav
                ? 'sm:grid-cols-2 md:gap-12 lg:grid-cols-3 '
                : '  sm:grid-cols-3 md:gap-4 lg:grid-cols-4'
            "
            class="mt-12 grid grid-cols-1 gap-x-2 gap-y-5 px-6 pb-20 pt-6 md:mt-0 lg:gap-8 lg:px-10"
          >
            <div
              class="relative w-full rounded-lg border border-gray-200 bg-white hover:border-gray-300"
              v-for="(card, index) in filteredCards"
              :key="index"
            >
              <NuxtLink
                aria-label="Proizvod"
                :to="'/prodavnica/' + card.to + '/' + card.id"
              >
                <div class="flex items-center justify-center rounded-lg p-12">
                  <NuxtImg
                    :src="card.image"
                    alt="product_image"
                    width="130"
                    quality="100"
                    format="webp"
                  />
                </div>
              </NuxtLink>
              <div
                class="absolute top-0 flex w-full items-center justify-between p-4"
              >
                <span
                  v-if="card.discount"
                  class="rounded bg-black px-3 py-[0.4rem] text-xs font-bold text-white sm:px-2 sm:py-1"
                  >{{ card.discount }}%</span
                >
                <div
                  @click="toggleWishList(card)"
                  class="absolute right-2 top-2 flex cursor-pointer items-center justify-center rounded-full bg-gray-100 p-2 transition duration-300 hover:bg-gray-100"
                  :class="card.showFilledHeart ? ' bg-gray-100' : ''"
                >
                  <Icon
                    v-if="card.showFilledHeart"
                    class="text-2xl text-gray-900"
                    name="prime:heart-fill"
                  />

                  <Icon
                    v-if="!card.showFilledHeart"
                    class="text-2xl text-gray-900"
                    name="prime:heart"
                  />
                </div>
              </div>

              <div
                class="mt-4 flex flex-col items-start justify-start px-4 pb-4"
              >
                <p class="mt-1 text-xs text-gray-400">{{ card.category }}</p>
                <h1 class="text-base font-bold sm:text-sm">
                  {{ card.title }}
                </h1>
                <div class="mt-4 flex w-full items-center justify-between">
                  <div class="flex flex-col items-start">
                    <p
                      v-if="card.oldPrice"
                      class="text-xs text-gray-400 line-through decoration-1"
                    >
                      {{ card.oldPrice }} RSD
                    </p>
                    <p class="ml-[-2px] text-2xl font-bold text-gray-800">
                      {{ card.newPrice }} RSD
                    </p>
                    <p
                      v-if="card.oldPrice"
                      class="mt-1 text-xs font-semibold text-red-600"
                    >
                      Ušteda: {{ card.oldPrice - card.newPrice }} RSD
                    </p>
                  </div>
                  <button
                    @click="insertCard(card.id)"
                    aria-label="Dodaj u korpu"
                  >
                    <div
                      class="flex items-center justify-center rounded-full bg-secondary p-[10px]"
                    >
                      <Icon
                        class="text-[2rem] text-gray-900"
                        name="prime:shopping-cart"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from "../../store/product";
import { storeToRefs } from "pinia";
import { CarPart } from "../../types/cardType";

const { insertCard } = addToCart();
const { toggleWishList } = addToWishList();
const { cards } = storeToRefs(useProductStore());

definePageMeta({
  layout: "page-layout",
});

const sideNavFilters = ref(false);

const handleSideFilters = () => {
  sideNavFilters.value = !sideNavFilters.value;
  document.body.style.overflow = sideNavFilters.value ? "hidden" : "";
};

interface QueryParams {
  marka: string | null;
  model: string | null;
  godiste: string | null;
}
// Filtered cards
const route = useRoute();
const queryParams = reactive<QueryParams>({
  marka: null,
  model: null,
  godiste: null,
});
const filteredCards = ref();

const filterCards = () => {
  queryParams.marka = route.query.marka as string;
  queryParams.model = route.query.model as string;
  queryParams.godiste = route.query.godiste as string;
  if (
    queryParams.marka != null &&
    queryParams.model != null &&
    queryParams.godiste != null
  ) {
    filteredCards.value = cards.value.filter((card) => {
      const markMatch = card.mark.includes(queryParams.marka!);
      const modelMatch = card.model.includes(queryParams.model!);
      const yearMatch = card.year.includes(queryParams.godiste!);
      return markMatch && modelMatch && yearMatch;
    });
  } else {
    filteredCards.value = cards.value;
  }
};
onMounted(filterCards);

// Filters from sidenav
const filterBySubCategory = (name: string) => {
  filteredCards.value = cards.value.filter((card) => card.category === name);
  sideNavFilters.value = false;
};

const filterByMainCategory = (name: string) => {
  filteredCards.value = cards.value.filter(
    (card) => card.main_category === name,
  );
  sideNavFilters.value = false;
};

const openSortBy = ref(false);
const choosedSort = ref("Cena opadajuće");
const applySort = (sortName: string) => {
  choosedSort.value = sortName;
  openSortBy.value = false;
  if (sortName === "Cena opadajuće") {
    filteredCards.value = filteredCards.value.sort(
      (a: CarPart, b: CarPart) => b.newPrice - a.newPrice,
    );
  } else if (sortName === "Cena rastuće") {
    filteredCards.value = filteredCards.value.sort(
      (a: CarPart, b: CarPart) => a.newPrice - b.newPrice,
    );
  } else if (sortName === "Popusti opadajuće") {
    filteredCards.value = filteredCards.value.sort(
      (a: CarPart, b: CarPart) => b.discount - a.discount,
    );
  }
};

const sidenav = ref(true);
const toggleFilters = () => {
  sidenav.value = !sidenav.value;
};
</script>

<style scoped>
.sidenav-slide-enter-active,
.sidenav-slide-leave-active {
  transition: width 0.3s ease;
}

.sidenav-slide-enter-from,
.sidenav-slide-leave-to {
  width: 0;
  opacity: 0;
}

.sidenav-slide-enter-to,
.sidenav-slide-leave-from {
  width: 384px;
  opacity: 1;
}
</style>
