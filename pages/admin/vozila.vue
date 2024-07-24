<template>
  <div
    class="mx-auto mt-[64px] flex min-h-[calc(100vh-64px)] w-full max-w-[1200px] flex-col px-6"
  >
    <div class="flex items-center justify-between border-b py-4">
      <div>
        <h1 class="text-2xl font-bold">Vozila ({{ vehiclesLength }})</h1>
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
import { useVehiclesStore } from "../../store/vehicles";
import { storeToRefs } from "pinia";

definePageMeta({
  layout: "admin-layout",
});

const tableData = ref<object[]>([]);
const vehiclesLength = ref(0);
const { brandsData } = storeToRefs(useVehiclesStore());
const { modelsData } = storeToRefs(useVehiclesStore());
const { yearsData } = storeToRefs(useVehiclesStore());

watchEffect(() => {
  tableData.value = brandsData.value.map((brand) => {
    const brandModels = modelsData.value.filter(
      (model: { brand_id: number; id: number; name: string }) =>
        model.brand_id === brand.id,
    );
    const brandYears = brandModels.map((model: { id: number }) =>
      yearsData.value.filter(
        (year: { model_id: number; id: number; name: string }) =>
          year.model_id === model.id,
      ),
    );
    return {
      id: brand.id,
      brand: brand.name,
      models: brandModels,
      years: brandYears.flat(),
    };
  });

  vehiclesLength.value = brandsData.value.length;
});

const tableColumns = [
  { name: "Marka", key: "brand", showPopup: false },
  {
    name: "Modeli",
    key: "models",
    showPopup: true,
  },
  {
    name: "Godišta",
    key: "years",
    showPopup: true,
  },
];
</script>

<style scoped></style>
