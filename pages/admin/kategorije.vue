<template>
  <div
    class="mx-auto mt-[64px] flex min-h-[calc(100vh-64px)] w-full max-w-[1200px] flex-col px-6"
  >
    <div class="flex items-center justify-between border-b py-4">
      <div>
        <h1 class="text-2xl font-bold">Kategorije ({{ 0 }})</h1>
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
definePageMeta({
  layout: "admin-layout",
});
const tableData = [
  { id: 1, category: "John", subcategories: "sub2" },
  { id: 2, category: "Jane", subcategories: "sub1" },
  { id: 3, category: "Bob", subcategories: "sub3" },
];
const tableColumns = [
  { name: "ID", key: "id" },
  { name: "Kategorija", key: "category" },
  { name: "Podkategorije", key: "subcategories" },
];
</script>

<style scoped></style>
