<template>
  <div
    class="mx-auto mt-[64px] flex min-h-[calc(100vh-64px)] w-full max-w-[1200px] flex-col px-6"
  >
    <div class="flex items-center justify-between border-b py-4">
      <div>
        <h1 class="text-2xl font-bold">Vozila ({{ 0 }})</h1>
        <p class="mt-1 text-sm">Upravljajte vozilima prodavnice</p>
      </div>
      <NuxtLink
        to="/admin/dodaj-vozilo"
        class="flex items-center justify-center gap-1 rounded-md bg-black px-4 py-3 text-sm text-white"
      >
        <Icon class="text-lg" name="mdi:plus" />
        Dodaj vozilo
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
  { id: 1, mark: "BMW", model: "M4", year: "2015" },
  { id: 2, mark: "Audi", model: "Q7", year: "2010" },
  { id: 3, mark: "Golf", model: "6", year: "2012" },
];
const tableColumns = [
  { name: "ID", key: "id" },
  { name: "Marka", key: "mark" },
  { name: "Model", key: "model" },
  { name: "Godište", key: "year" },
];
</script>

<style scoped></style>
