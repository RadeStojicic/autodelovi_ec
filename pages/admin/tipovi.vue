<template>
  <div
    class="mx-auto mt-[64px] flex min-h-[calc(100vh-64px)] w-full max-w-[1200px] flex-col px-6"
  >
    <div class="flex items-center justify-between border-b py-4">
      <div>
        <h1 class="text-2xl font-bold">Tipovi ({{ tableData.length }})</h1>
        <p class="mt-1 text-sm">Upravljajte tipovima proizvoda</p>
      </div>
      <NuxtLink
        to="/admin/dodaj-tip"
        class="flex items-center justify-center gap-1 rounded-md bg-black px-4 py-3 text-sm text-white"
      >
        <Icon class="text-lg" name="mdi:plus" />
        Dodaj tip proizvoda
      </NuxtLink>
    </div>
    <AdminTable :tableData="tableData" :tableColumns="tableColumns" />
  </div>
</template>

<script setup lang="ts">
import { useTypesStore } from "../../store/product_types";
import { storeToRefs } from "pinia";
definePageMeta({
  layout: "admin-layout",
});

const tableData = ref<object[]>([]);
const { typesData } = storeToRefs(useTypesStore());
const { getTypes } = useTypesStore();

const getData = async () => {
  await getTypes();
};
getData();

watchEffect(() => {
  tableData.value = typesData.value.map((type) => {
    return {
      name: type.name,
    };
  });
});
const tableColumns = [{ name: "Tip", key: "name" }];
</script>

<style scoped></style>
