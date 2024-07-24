<template>
  <div
    class="mx-auto mt-[64px] flex min-h-[calc(100vh-64px)] w-full max-w-[1200px] flex-col px-6"
  >
    <div class="flex items-center justify-between border-b py-4">
      <div>
        <h1 class="text-2xl font-bold">Proizvodi ({{ 0 }})</h1>
        <p class="mt-1 text-sm">Upravljajte proizvodima prodavnice</p>
      </div>
      <NuxtLink
        to="/admin/dodaj-proizvod"
        class="flex items-center justify-center gap-1 rounded-md bg-black px-4 py-3 text-sm text-white"
      >
        <Icon class="text-lg" name="mdi:plus" />
        Dodaj proizvod
      </NuxtLink>
    </div>
    <AdminTable
      class="overflow-x-auto"
      :tableData="tableData"
      :tableColumns="tableColumns"
    />
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: "admin-layout",
});

const tableData = [
  {
    id: 1,
    name: "MOBIL ulje 1323",
    price: 1200,
    category: "Ulja",
    subcategories: "Motorna ulja",
    vehicles: "Audi A4",
    supplies: "5",
    aboutProduct: "Motorna ulja",
    description: "Motorna ulja",
    additionalInfo: "Motorna ulja",
    discount: "0",
  },
  {
    id: 2,
    name: "Tocak 3231",
    price: 2200,
    category: "Enterijer",
    subcategories: "Tockovi",
    vehicles: "Audi A4",
    supplies: "5",
    aboutProduct: "Motorna ulja",
    description: "Motorna ulja",
    additionalInfo: "Motorna ulja",
    discount: "0",
  },
];

const tableColumns = [
  { name: "Ime", key: "name" },
  { name: "Cena", key: "price" },
  { name: "Kategorija", key: "category" },
  { name: "Podkategorija", key: "subcategories" },
  { name: "Vozilo", key: "vehicles" },
  { name: "Zalihe", key: "supplies" },
  { name: "O proizvodu", key: "aboutProduct" },
  { name: "Opis", key: "description" },
  { name: "Dodatne informacije", key: "additionalInfo" },
  { name: "Popust", key: "discount" },
];
</script>
<style lang="scss" scoped></style>
