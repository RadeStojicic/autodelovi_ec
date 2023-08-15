<template>
  <div>
    <div class="relative z-10 flex h-auto w-full justify-center">
      <img
        src="/images/hero_img.jpg"
        class="relative h-108 w-screen object-cover brightness-50 md:h-100 lg:object-cover"
        alt=""
      />

      <form
        class="absolute top-8 mx-auto flex w-full flex-col items-center justify-center p-4 md:container md:top-20 md:p-8"
      >
        <div class="mb-16 flex w-full flex-col items-center justify-center">
          <h1
            class="w-full text-center text-4xl font-bold text-white lg:w-2/3 lg:text-5xl"
          >
            Unesite detalje vašeg vozila
          </h1>
          <p class="mt-4 text-center text-lg text-white sm:text-left">
            Pronađite savršene autodelove u nekoliko klikova
          </p>
        </div>

        <div
          class="relative flex flex-col items-center justify-center gap-4 md:w-full md:flex-row"
        >
          <selection-button
            v-for="(selection, index) in multiSel"
            :key="index"
            :placeholderName="selection.placeholderName"
            :disabledInput="selection.disabledInput"
            :multipleSel="selection.multipleSel"
            :inputIndex="selection.inputIndex"
            :checkboxChecked="selection.options.checkboxChecked"
            :selection="selection.options"
            v-model:model="carFilters[index]"
            v-model:searchText="searchText[index]"
            :getFilteredOptions="getFilteredOptions(index)"
            @update:model="applyFilters(index)"
          ></selection-button>
          <button
            :class="{ 'brightness-90': buttonDisabled }"
            @click.prevent="filterCards"
            class="mt-4 flex w-52 items-center justify-center gap-1 rounded bg-yellow-500 p-3 text-gray-900 md:mt-0 md:w-40"
          >
            <span class="icon-[prime--search] text-lg" />
            Pretraži
          </button>
        </div>
      </form>
    </div>
    <div class="full mx-auto flex flex-col md:container md:flex-row">
      <Sidenav
        @filter-by-main-category="filterByMainCategory"
        @filter-by-sub-category="filterBySubCategory"
        class="hidden md:block"
      />

      <div class="w-full bg-gray-50">
        <div class="mt-32 flex md:mt-16">
          <div
            class="mx-6 flex w-full items-center justify-between border-b border-gray-200 md:mx-10"
          >
            <h1 class="py-4 text-2xl text-black md:text-3xl">Proizvodi</h1>
            <span class="icon-[prime--sliders-h] text-4xl md:hidden" />
          </div>
        </div>
        <div
          class="mx-6 mt-12 grid grid-cols-2 gap-x-2 gap-y-10 pb-24 pt-10 sm:grid-cols-2 md:mt-0 md:gap-12 lg:mx-10 lg:grid-cols-3 lg:gap-8"
        >
          <div
            class="relative w-full rounded-lg border border-gray-200 bg-white hover:border-gray-300"
            v-for="(card, index) in filteredCards"
            :key="index"
          >
            <NuxtLink :to="card.to + '/' + card.id">
              <div class="flex items-center justify-center rounded-lg p-12">
                <img class="w-40" :src="card.image" alt="product_image" />
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
                <NuxtLink to="/kontakt">
                  <div
                    class="flex items-center justify-center rounded-full bg-yellow-400 p-2"
                  >
                    <span
                      class="icon-[prime--shopping-cart] text-3xl text-white"
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
import { useProductStore } from "../store/product";
import { storeToRefs } from "pinia";

const { toggleWishList } = addToWishList();
const { cards } = storeToRefs(useProductStore());

definePageMeta({
  layout: "page-layout",
});

interface Selections {
  placeholderName: string;
  multipleSel: boolean;
  disabledInput: boolean;
  inputIndex: number;
  selectAll: boolean;
  options: {
    id: number;
    text: string;
    mark?: string;
    model?: string;
    checkboxChecked: boolean;
  }[];
}
const multiSel: Selections[] = [
  {
    placeholderName: "Marka",
    multipleSel: false,
    disabledInput: false,
    inputIndex: 0,
    selectAll: false,
    options: [
      { id: 0, text: "BMW", checkboxChecked: false },
      { id: 1, text: "Audi", checkboxChecked: false },
      { id: 2, text: "Mercedes", checkboxChecked: false },
      { id: 3, text: "Polo", checkboxChecked: false },
      { id: 4, text: "Ford", checkboxChecked: false },
    ],
  },
  {
    placeholderName: "Model",
    multipleSel: true,
    disabledInput: true,
    inputIndex: 1,
    selectAll: true,
    options: [
      { id: 0, text: "X4", mark: "BMW", checkboxChecked: false },
      { id: 1, text: "i8", mark: "BMW", checkboxChecked: false },
      { id: 2, text: "M4", mark: "BMW", checkboxChecked: false },
      { id: 3, text: "i4", mark: "BMW", checkboxChecked: false },
      { id: 4, text: "X6", mark: "BMW", checkboxChecked: false },
      { id: 5, text: "A3", mark: "Audi", checkboxChecked: false },
      { id: 6, text: "A4", mark: "Audi", checkboxChecked: false },
      { id: 7, text: "R8", mark: "Audi", checkboxChecked: false },
      { id: 8, text: "Q7", mark: "Audi", checkboxChecked: false },
      { id: 9, text: "Glc", mark: "Mercedes", checkboxChecked: false },
    ],
  },
  {
    placeholderName: "Godište",
    multipleSel: true,
    disabledInput: true,
    inputIndex: 2,
    selectAll: true,
    options: [
      {
        id: 0,
        text: "2003",
        mark: "BMW",
        model: "X4 i8",
        checkboxChecked: false,
      },
      {
        id: 1,
        text: "2004",
        mark: "BMW",
        model: "X4 i8",
        checkboxChecked: false,
      },
      {
        id: 2,
        text: "2005",
        mark: "BMW",
        model: "X4",
        checkboxChecked: false,
      },
      {
        id: 3,
        text: "2006",
        mark: "Audi",
        model: "Q7",
        checkboxChecked: false,
      },
      {
        id: 4,
        text: "2007",
        mark: "Audi",
        model: "Q7",
        checkboxChecked: false,
      },
      {
        id: 5,
        text: "2008",
        mark: "Audi",
        model: "Q7",
        checkboxChecked: false,
      },
      {
        id: 6,
        text: "2016",
        mark: "Mercedes",
        model: "Glc",
        checkboxChecked: false,
      },
    ],
  },
];
const carFilters = ref<string[]>(["", "", ""]);
const searchText = ref<string[]>(["", "", ""]);

const buttonDisabled = ref(true);
const getFilteredOptions = (index: number) => {
  const searchTextInput = searchText.value[index].toLowerCase().trim();
  if (index === 1) {
    const mark = carFilters.value[0];

    return mark
      ? multiSel[index].options.filter(
          (option) =>
            option.mark === mark &&
            option.text.toLowerCase().includes(searchTextInput),
        )
      : multiSel[index].options.filter((option) =>
          option.text.toLowerCase().includes(searchTextInput),
        );
  } else if (index === 2) {
    const model = carFilters.value[1];

    return model
      ? multiSel[index].options.filter(
          (option) =>
            option.model === model.replace(",", "") &&
            option.text.toLowerCase().includes(searchTextInput),
        )
      : multiSel[index].options.filter((option) =>
          option.text.toLowerCase().includes(searchTextInput),
        );
  } else {
    return multiSel[index].options.filter((option) =>
      option.text.toLowerCase().includes(searchTextInput),
    );
  }
};

const applyFilters = (index: number) => {
  if (
    carFilters.value[0] !== "" &&
    carFilters.value[1] !== "" &&
    carFilters.value[2] !== ""
  ) {
    buttonDisabled.value = false;
  } else {
    buttonDisabled.value = true;
  }
  if (index == 0) {
    [1, 2].forEach((i) => {
      carFilters.value[i] = "";
      multiSel[i].options.forEach((option) => (option.checkboxChecked = false));
    });
    multiSel[1].disabledInput = false;
    multiSel[2].disabledInput = true;
  }
  if (index == 1) {
    carFilters.value[2] = "";
    multiSel[2].disabledInput = false;
  }
};

// Filtered cards

const filteredCards = ref(cards.value);

const filterCards = () => {
  if (carFilters.value.some((filter) => filter.trim() === "")) {
    return;
  }
  filteredCards.value = cards.value.filter((card) => {
    const markMatch = carFilters.value[0].includes(card.mark);
    const modelMatch = carFilters.value[1].includes(card.model);
    const yearMatch = carFilters.value[2].includes(card.year);

    return markMatch && modelMatch && yearMatch;
  });
};

// Filters from sidenav

const filterBySubCategory = (name: string) => {
  filteredCards.value = cards.value.filter((card) => card.category === name);
};

const filterByMainCategory = (name: string) => {
  filteredCards.value = cards.value.filter(
    (card) => card.main_category === name,
  );
};
</script>

<style scoped></style>
