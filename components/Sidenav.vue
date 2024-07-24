<template>
  <div
    class="top-0 hidden h-auto w-96 select-none overflow-y-auto border border-gray-200 bg-white text-black lg:relative lg:block"
  >
    <div class="bg-gray-200">
      <div class="flex w-full flex-col bg-white">
        <div
          class="flex items-center border-b border-gray-200 bg-gray-50 px-4 py-4 text-sm text-gray-500"
        >
          <NuxtLink aria-label="Pocetna" class="text-black/80" to="/"
            >Početna</NuxtLink
          >
          <Icon
            class="mt-[3px] text-lg text-gray-500"
            name="prime:chevron-right"
          />

          <NuxtLink aria-label="Prodavnica" to="/prodavnica"
            >Prodavnica</NuxtLink
          >
        </div>
        <div class="border-b border-gray-200">
          <h1 class="px-4 py-6 text-xl font-semibold">Kategorije</h1>
        </div>
        <div>
          <ul class="relative list-none pb-4 text-sm">
            <li
              v-for="(item, index) in structuredData"
              :key="index"
              class="relative flex flex-col items-start justify-between border-b border-gray-200 text-gray-600"
            >
              <div
                class="flex w-full items-center justify-between px-4 py-4"
                :class="{ 'border-b border-gray-200': showMore }"
              >
                <NuxtLink
                  aria-label="Link kategorije"
                  :to="'prodavnica' + item.category.to"
                  @click="$emit('filterByMainCategory', item.category.name)"
                  class="sidenav cursor-pointer text-sm font-semibold text-black"
                >
                  {{ item.category.name }} ({{ item.subcategories.length }})
                </NuxtLink>
                <Icon
                  @click="item.showMore = !item.showMore"
                  class="cursor-pointer text-2xl"
                  v-if="item.showMore"
                  name="prime:chevron-up"
                />
                <Icon
                  @click="item.showMore = !item.showMore"
                  class="cursor-pointer text-2xl"
                  v-if="!item.showMore"
                  name="prime:chevron-down"
                />
              </div>
              <ul
                v-if="item.showMore"
                class="relative w-full cursor-pointer list-none py-2"
              >
                <li
                  @click="$emit('filterBySubCategory', subcategory.name)"
                  class="hover-bg-gray-50 relative w-full px-6 py-1"
                  v-for="(subcategory, subIndex) in item.subcategories"
                  :key="subIndex"
                >
                  <p class="text-gray-500">{{ subcategory.name }}</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="border-b border-gray-200">
          <h1 class="px-4 py-6 text-xl font-semibold">Brend</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from "../store/product";
import { CarPart } from "../types/cardType";
import { storeToRefs } from "pinia";
import { useCategoriesStore } from "../store/categories";
import { useSubcategoriesStore } from "../store/subcategories";

const { categoriesData } = storeToRefs(useCategoriesStore());
const { subCategoriesData } = storeToRefs(useSubcategoriesStore());
const { getCategories } = useCategoriesStore();
const { getSubCategories } = useSubcategoriesStore();

interface Category {
  id: number;
  name: string;
}

interface Subcategory {
  id: number;
  category_id: number;
  name: string;
}

interface StructuredCategory {
  category: Category;
  subcategories: Subcategory[];
}

const getData = async () => {
  await getCategories();
  await getSubCategories();
  structureData();
};
getData();

const structuredData = ref<StructuredCategory[]>([]);
const showMore = ref(true);

const structureData = () => {
  structuredData.value = categoriesData.value.map((category) => {
    const subcategories = subCategoriesData.value
      .filter((subcategory) => subcategory.category_id === category.id)
      .map((subcategory) => ({
        name: subcategory.name,
        id: subcategory.id,
        category_id: subcategory.category_id,
      }));

    return {
      category,
      subcategories,
      showMore: false,
    };
  });
};

const { cards } = storeToRefs(useProductStore());
const productsMainCategory = (name: string) => {
  return cards.value.filter((card: CarPart) => card.main_category === name)
    .length;
};
const productsSubCategory = (name: string) => {
  return cards.value.filter((card: CarPart) => card.category === name).length;
};

// filter by mark model and year
const filterByCar = (mark: string, model: string, year: string) => {
  return cards.value.filter(
    (card: CarPart) =>
      card.mark === mark && card.model === model && card.year === year,
  );
};
</script>

<style scoped></style>
