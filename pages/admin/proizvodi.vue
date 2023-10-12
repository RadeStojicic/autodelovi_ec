<template>
  <div class="mx-auto flex h-[100vh] w-full max-w-[1200px] flex-col px-6">
    <div class="flex justify-between border-b py-5">
      <h1 class="text-2xl font-bold">Proizvodi</h1>
      <button class="w-32 rounded-full bg-black p-2 text-sm text-white">
        <Icon size="32" name="mdi:plus" />
        Dodaj proizvod
      </button>
    </div>
    <div class="mt-8 flex gap-4">
      <div class="flex flex-col items-center gap-4">
        <input
          v-model="formFields.title"
          class="w-80 rounded-md border bg-white p-2"
          type="text"
          placeholder="Ime proizvoda"
        />
        <input
          v-model="formFields.oldPrice"
          class="w-80 rounded-md border bg-white p-2"
          type="text"
          placeholder="Stara cena"
        />
        <input
          v-model="formFields.newPrice"
          class="w-80 rounded-md border bg-white p-2"
          type="text"
          placeholder="Nova cena"
        />
        <input
          v-model="formFields.main_category"
          class="w-80 rounded-md border bg-white p-2"
          type="text"
          placeholder="Glavna kategorija"
        />
        <input
          v-model="formFields.category"
          class="w-80 rounded-md border bg-white p-2"
          type="text"
          placeholder="Podkategorija"
        />
        <label class="flex flex-col gap-1">
          Slika
          <input
            class="w-80 rounded-md border bg-white p-2"
            type="file"
            name="Slika"
          />
        </label>
      </div>
      <div class="flex flex-col items-center gap-4">
        <input
          v-model="formFields.discount"
          class="w-80 rounded-md border bg-white p-2"
          type="text"
          placeholder="Popust (%)"
        />
        <input
          v-model="formFields.mark"
          class="w-80 rounded-md border bg-white p-2"
          type="text"
          placeholder="Marka"
        />
        <input
          v-model="formFields.model"
          class="w-80 rounded-md border bg-white p-2"
          type="text"
          placeholder="Model"
        />
        <input
          v-model="formFields.year"
          class="w-80 rounded-md border bg-white p-2"
          type="text"
          placeholder="Godina"
        />
        <input
          v-model="formFields.type"
          class="w-80 rounded-md border bg-white p-2"
          type="text"
          placeholder="Tip"
        />
        <label class="flex flex-col gap-1">
          Ostale slike
          <input
            class="w-80 rounded-md border bg-white p-2"
            type="file"
            placeholder="Ostale slike"
            multiple
          />
        </label>
      </div>
      <div class="flex flex-col items-center gap-4">
        <textarea
          v-model="formFields.aboutProduct"
          class="h-32 w-96 p-2"
          name="Opis proizvoda"
          placeholder="Opis proizvoda"
        ></textarea>
        <textarea
          v-model="formFields.additionalInfo"
          class="h-32 w-full p-2"
          name="Dodatne informacije"
          placeholder="Dodatne informacije"
        ></textarea>
        <textarea
          v-model="formFields.description"
          class="h-32 w-full p-2"
          name="O proizvodu"
          placeholder="O proizvodu"
        ></textarea>
      </div>
    </div>
    <button
      @click="sendData"
      class="mt-6 w-52 cursor-pointer rounded-full bg-black p-2 py-3 text-white"
    >
      Ubaci u bazu
    </button>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: "admin-layout",
});
const { data } = useAsyncData("products", () => $fetch("/api/products"));

import { storeToRefs } from "pinia";
import { useProductStore } from "~/store/product";
import { products } from "~/server/schemas/products.schema";
import { boolean } from "drizzle-orm/mysql-core";
import { uuid } from "drizzle-orm/pg-core";

const formFields = ref({
  title: "",
  oldPrice: "",
  newPrice: "",
  main_category: "",
  category: "",
  quantity: 1,
  discount: "",
  mark: "",
  model: "",
  year: "",
  type: "",
  aboutProduct: "",
  additionalInfo: "",
  description: "",
});
// const client = useSupabaseClient();
// async function uploadImagesToSupabase(image: string) {
//   const { data, error } = await client.storage
//     .from("products")
//     .upload("my-image.png", image);

//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log(data);
// }

// function sendData() {
//   $fetch("/api/products", {
//     method: "POST",
//     body: {
//       category: formFields.value.category || "auto",
//       title: formFields.value.title || "auto",
//       oldPrice: parseFloat(formFields.value.oldPrice) || 0,
//       newPrice: parseFloat(formFields.value.newPrice) || 0,
//       quantity: formFields.value.quantity || 0,
//       mark: formFields.value.mark || "auto",
//       model: formFields.value.model || "auto",
//       year: formFields.value.year || "auto",
//       type: formFields.value.type || "auto",
//       aboutProduct: formFields.value.aboutProduct || "",
//       description: formFields.value.description || "",
//       additionalInfo: formFields.value.additionalInfo || "",
//       other_images: "",
//       discount: parseFloat(formFields.value.discount) || 0,
//       showFilledHeart: false,
//       id: 123,
//     } satisfies typeof products.$inferInsert,
//   });
// }
</script>
<style lang="scss" scoped></style>
