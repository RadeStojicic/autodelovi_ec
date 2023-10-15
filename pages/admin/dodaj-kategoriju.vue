<template>
  <div class="mt-[64px] min-h-[calc(100vh-64px)] bg-[#f5f6f8]">
    <div class="mx-auto max-w-[1200px] px-6">
      <div class="flex items-center justify-between border-b py-4">
        <div>
          <h1 class="text-2xl font-bold">Kreiraj kategoriju</h1>
          <p class="mt-1 text-sm">Dodajte novu kategoriju i podkategorije</p>
        </div>
      </div>
      <div class="mt-8 flex flex-col gap-4">
        <div class="flex flex-col items-start gap-4">
          <label class="w-72" for="ime"
            ><p class="p-1 font-medium">Ime</p>
            <input
              v-model="formFields.name"
              class="w-full rounded-md border bg-white p-2 text-sm"
              type="text"
              placeholder="Ime Kategorije"
          /></label>
          <label class="w-72" for="podkategorije"
            ><p class="p-1 font-medium">Podkategorije</p>
            <div class="flex items-center gap-2">
              <input
                v-model="formFields.subcategory"
                @keydown.enter="addSubcategory"
                maxlength="35"
                class="w-full rounded-md border bg-white p-2 text-sm"
                type="text"
                placeholder="Naziv podkategorije"
              />
              <button
                @click="addSubcategory"
                class="flex items-center gap-1 rounded-md border bg-blueColor px-4 py-2 text-sm text-white"
              >
                <Icon name="prime:plus" /> Dodaj
              </button>
            </div>
          </label>
        </div>
        <ul
          class="flex w-72 flex-col items-start justify-start rounded-md border-l border-r border-t bg-white text-sm"
        >
          <li class="w-full" v-if="subcategories.length > 0">
            <div
              class="flex w-full items-center justify-between border-b px-2 py-2"
              v-for="(subcategory, index) in subcategories"
              :key="index"
            >
              <p>{{ subcategory }}</p>
              <Icon
                @click="deleteSubcategory(index)"
                class="cursor-pointer text-xl"
                name="prime:times"
              />
            </div>
          </li>
          <li class="w-full rounded-b-md border-b p-2" v-else>
            Ne postoje podkategorije.
          </li>
        </ul>
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
definePageMeta({
  layout: "admin-layout",
});

const formFields = reactive({
  name: "",
  category: "",
  subcategory: "",
});

const subcategories = ref<string[]>([]);
const addSubcategory = () => {
  if (formFields.subcategory.length < 3) return;
  subcategories.value.push(formFields.subcategory);
  formFields.subcategory = "";
};

const deleteSubcategory = (index: number) => {
  subcategories.value.splice(index, 1);
};
</script>

<style scoped></style>
