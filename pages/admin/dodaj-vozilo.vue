<template>
  <div class="mt-[64px] min-h-[calc(100vh-64px)] bg-[#f5f6f8]">
    <div class="mx-auto max-w-[1200px] px-6">
      <div class="flex items-center justify-between border-b py-4">
        <div>
          <h1 class="text-2xl font-bold">Kreiraj vozilo</h1>
          <p class="mt-1 text-sm">Dodajte novo vozilo</p>
        </div>
      </div>
      <div class="mt-8 flex gap-4">
        <div class="flex items-start gap-6">
          <label class="w-72" for="marka"
            ><p class="p-1 font-medium">Marka</p>
            <input
              v-model="formFields.brand"
              class="w-full rounded-md border bg-white p-2 text-sm"
              type="text"
              placeholder="Ime marke"
          /></label>
          <label class="w-72" for="model"
            ><p class="p-1 font-medium">Modeli</p>
            <div class="flex items-center gap-2">
              <input
                v-model="formFields.model"
                @keydown.enter="addModel"
                maxlength="35"
                class="w-full rounded-md border bg-white p-2 text-sm"
                type="text"
                placeholder="Naziv modela"
              />
              <button
                @click="addModel"
                class="flex items-center gap-1 rounded-md border bg-blueColor px-4 py-2 text-sm text-white"
              >
                <Icon name="prime:plus" /> Dodaj
              </button>
            </div>
            <ul
              class="mt-4 flex w-72 flex-col items-start justify-start rounded-md border-l border-r border-t bg-white text-sm"
            >
              <li class="w-full" v-if="modelsArr.length > 0">
                <div
                  class="flex w-full items-center justify-between border-b px-2 py-2"
                  v-for="(model, index) in modelsArr"
                  :key="index"
                >
                  <p>{{ model }}</p>
                  <Icon
                    @click="deleteModel(index)"
                    class="cursor-pointer text-xl"
                    name="prime:times"
                  />
                </div>
              </li>
              <li class="w-full rounded-b-md border-b p-2" v-else>
                Ne postoje modeli.
              </li>
            </ul>
          </label>
          <label class="w-72" for="godiste"
            ><p class="p-1 font-medium">Godišta</p>
            <AdminDropdown
              v-model:model="selectedModel"
              :placeholderName="model"
              :dropdownOptions="modelsArr"
            />
            <div class="mt-4 flex items-center gap-2">
              <input
                v-model="formFields.year"
                @keydown.enter="addYear"
                maxlength="35"
                class="w-full rounded-md border bg-white p-2 text-sm"
                type="text"
                placeholder="Godište modela"
              />
              <button
                @click="addYear"
                class="flex items-center gap-1 rounded-md border bg-blueColor px-4 py-2 text-sm text-white"
              >
                <Icon name="prime:plus" /> Dodaj
              </button>
            </div>
            <ul
              class="mt-4 flex w-72 flex-col items-start justify-start rounded-md border-l border-r border-t bg-white text-sm"
            >
              <li
                class="w-full"
                v-if="
                  yearsArr[selectedModel] && yearsArr[selectedModel].length > 0
                "
              >
                <div
                  class="flex w-full items-center justify-between border-b px-2 py-2"
                  v-for="(year, index) in yearsArr[selectedModel]"
                  :key="index"
                >
                  <p>{{ year }}</p>
                  <Icon
                    @click="deleteYear(index)"
                    class="cursor-pointer text-xl"
                    name="prime:times"
                  />
                </div>
              </li>
              <li class="w-full rounded-b-md border-b p-2" v-else>
                Ne postoje godišta.
              </li>
            </ul>
          </label>
        </div>
      </div>
      <div class="w-full">
        <button
          @click="sendData"
          class="my-6 w-52 cursor-pointer rounded-full bg-black p-2 py-3 text-white"
        >
          Sačuvaj
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { brands } from "~/server/schemas/brands.schema";
import { models } from "~/server/schemas/models.schema";
import { years } from "~/server/schemas/years.schema";

definePageMeta({
  layout: "admin-layout",
});

const formFields = reactive({
  brand: "",
  model: "",
  year: "",
});

const modelValue = ref<string>("");
const modelsArr = ref<string[]>([]);
const selectedModel = ref<string>("");
const yearsArr = ref<Record<string, string[]>>({});

const addModel = () => {
  if (formFields.model.length < 1) return;
  modelsArr.value.push(formFields.model);
  formFields.model = "";
};

const addYear = () => {
  if (formFields.year.length < 1 || !selectedModel.value) return;
  if (!yearsArr.value[selectedModel.value]) {
    yearsArr.value[selectedModel.value] = [];
  }
  yearsArr.value[selectedModel.value].push(formFields.year);
  formFields.year = "";
};

const deleteModel = (index: number) => {
  modelsArr.value.splice(index, 1);
  selectedModel.value = "";
};

const deleteYear = (index: number) => {
  yearsArr.value[selectedModel.value].splice(index, 1);
};

async function sendData() {
  const brandsResponse = await $fetch("/api/vehicles_d/brands", {
    method: "POST",
    body: {
      name: formFields.brand,
    } satisfies typeof brands.$inferInsert,
  });
  console.log(brandsResponse);

  modelsArr.value.forEach(async (model) => {
    const modelResponse = await $fetch("/api/vehicles_d/models", {
      method: "POST",
      body: {
        brand_id: brandsResponse[0].id,
        name: model,
      } satisfies typeof models.$inferInsert,
    });
    console.log(modelResponse);
  });

  for (const model in yearsArr.value) {
    for (const year of yearsArr.value[model]) {
      const modelResponse = await $fetch("/api/vehicles_d/models", {
        method: "POST",
        body: {
          brand_id: brandsResponse[0].id,
          name: model,
        } satisfies typeof models.$inferInsert,
      });
      await $fetch("/api/vehicles_d/years", {
        method: "POST",
        body: {
          model_id: modelResponse[0].id,
          name: year,
        } satisfies typeof years.$inferInsert,
      });
    }
  }
  formFields.brand = "";
  modelsArr.value = [];
  yearsArr.value = {};

  useRouter().push("/admin/vozila");
}
</script>

<style scoped></style>
