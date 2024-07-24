<template>
  <div class="mt-[64px] min-h-[calc(100vh-64px)] bg-[#f5f6f8]">
    <div class="mx-auto max-w-[1200px] px-6">
      <div class="flex items-center justify-between border-b py-4">
        <div>
          <h1 class="text-2xl font-bold">Kreiraj tip</h1>
          <p class="mt-1 text-sm">Dodajte novi tip proizvoda</p>
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
              placeholder="Ime Tipa"
          /></label>
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
import { productTypes } from "~/server/schemas/productTypes.schema";

definePageMeta({
  layout: "admin-layout",
});

const formFields = reactive({
  name: "",
});

async function sendData() {
  const typesResponse = await $fetch("/api/types_d/productTypes", {
    method: "POST",
    body: {
      name: formFields.name,
    } satisfies typeof productTypes.$inferInsert,
  });
  formFields.name = "";
  useRouter().push("/admin/tipovi");
}
</script>

<style scoped></style>
