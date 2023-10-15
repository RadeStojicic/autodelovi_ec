<template>
  <div
    class="mx-auto mt-[64px] flex min-h-[calc(100vh-64px)] w-full max-w-[1200px] flex-col px-6"
  >
    <div class="flex items-center justify-between border-b py-4">
      <div>
        <h1 class="text-2xl font-bold">Tipovi ({{ 0 }})</h1>
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
definePageMeta({
  layout: "admin-layout",
});

const tableData = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Bob", age: 40 },
];
const tableColumns = [
  { name: "ID", key: "id" },
  { name: "Tip", key: "name" },
];
</script>

<style scoped></style>
