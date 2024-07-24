<template>
  <div
    class="mx-auto mt-[64px] flex min-h-[calc(100vh-64px)] w-full max-w-[1200px] flex-col px-6"
  >
    <div class="flex items-center justify-between border-b py-4">
      <div>
        <h1 class="text-2xl font-bold">
          Kategorije ({{ categoriesData.length }})
        </h1>
        <p class="mt-1 text-sm">Upravljajte kategorijama prodavnice</p>
      </div>
      <NuxtLink
        to="/admin/dodaj-kategoriju"
        class="flex items-center justify-center gap-1 rounded-md bg-black px-4 py-3 text-sm text-white"
      >
        <Icon class="text-lg" name="mdi:plus" />
        Dodaj kategoriju
      </NuxtLink>
    </div>
    <AdminTable :tableData="tableData" :tableColumns="tableColumns" />
  </div>
</template>

<script setup lang="ts">
import { useCategoriesStore } from "../../store/categories";
import { useSubcategoriesStore } from "../../store/subcategories";
import { storeToRefs } from "pinia";

definePageMeta({
  layout: "admin-layout",
});

const { categoriesData } = storeToRefs(useCategoriesStore());
const { subCategoriesData } = storeToRefs(useSubcategoriesStore());
const { getCategories } = useCategoriesStore();
const { getSubCategories } = useSubcategoriesStore();

const tableData = ref<object[]>([]);

const getData = async () => {
  await getCategories();
  await getSubCategories();
};
getData();
watchEffect(() => {
  tableData.value = categoriesData.value.map((category) => {
    const subcategories = subCategoriesData.value.filter(
      (subcategory) => subcategory.category_id === category.id,
    );
    return {
      name: category.name,
      subcategories: subcategories.map((subcategory) => subcategory.name),
    };
  });
});

const tableColumns = [
  { name: "Kategorija", key: "name", showPopup: false },
  { name: "Podkategorije", key: "subcategories", showPopup: true },
];
</script>

<style scoped></style>
