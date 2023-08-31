<template>
  <div>
    <div class="full mx-auto flex flex-col md:container md:flex-row">
      <Sidenav
        class="hidden lg:block"
        @filter-by-main-category="filterByMainCategory"
        @filter-by-sub-category="filterBySubCategory"
      />
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
            <h1 class="py-4 text-2xl text-black md:text-3xl">Proizvodi</h1>
          </div>
          <div class="mt-4 w-full lg:hidden">
            <button
              aria-label="Filteri"
              @click="handleSideFilters"
              class="flex w-44 items-center justify-between rounded-lg border border-gray-200 bg-gray-100 px-4 py-3"
            >
              Filteri<span
                class="icon-[prime--chevron-down] text-2xl text-gray-950/70"
              />
            </button>
          </div>
        </div>

        <div
          class="mx-6 mt-12 grid grid-cols-1 gap-x-2 gap-y-5 pb-20 pt-6 sm:grid-cols-2 md:mt-0 md:gap-12 lg:mx-10 lg:grid-cols-3 lg:gap-8"
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
                  width="160"
                  height="160"
                  quality="100"
                  format="webp"
                  :src="card.image"
                  alt="product_image"
                />
              </div>
            </NuxtLink>
            <div
              class="absolute top-0 flex w-full items-center justify-between p-4"
            >
              <span
                v-if="card.discount"
                class="rounded bg-black px-2 py-1 text-xs font-bold text-white"
                >{{ card.discount }}%</span
              >
              <div
                @click="toggleWishList(card)"
                class="absolute right-2 top-2 flex cursor-pointer items-center justify-center rounded-full p-2 transition duration-300 hover:bg-gray-100"
                :class="card.showFilledHeart ? ' bg-gray-100' : ''"
              >
                <span
                  :class="
                    card.showFilledHeart
                      ? 'icon-[prime--heart-fill] '
                      : 'icon-[prime--heart] '
                  "
                  class="p-3 text-gray-900"
                />
              </div>
            </div>

            <div class="mt-4 flex flex-col items-start justify-start px-4 pb-4">
              <p class="mt-1 text-xs text-gray-400">{{ card.category }}</p>
              <h1 class="text-sm font-bold">
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
                <NuxtLink aria-label="Kontakt" to="/kontakt">
                  <div
                    class="flex items-center justify-center rounded-full bg-secondary p-[10px]"
                  >
                    <span
                      class="icon-[prime--shopping-cart] text-3xl text-gray-900"
                    />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from "../../store/product";
import { storeToRefs } from "pinia";

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
  console.log(queryParams.marka, queryParams.model, queryParams.godiste);
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
</script>

<style scoped></style>
