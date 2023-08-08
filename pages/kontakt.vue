<template>
  <div class="w-full bg-gray-100 py-16">
    <div
      class="container mx-auto flex w-full flex-col gap-8 px-6 md:grid md:grid-cols-2 md:gap-4 lg:gap-12"
    >
      <div
        class="flex w-full flex-col rounded-lg bg-white px-8 py-12 md:px-6 md:py-8 lg:px-8 lg:py-12"
      >
        <h1 class="w-full text-4xl font-bold">
          Brzo i jednostavno naručivanje uz svega par klikova.
        </h1>
        <p class="mt-4 w-full text-gray-500">
          Potrebne su vam dodatne informacije ocenama ili dostupnosti autodelova
          ? Naš tim stoji vam na raspolaganju za sva pitanja i nedoumice.
        </p>
        <img
          class="mt-6 w-full rounded-md"
          src="/images/office_2.jpg"
          alt="office"
        />
        <div class="mb-2 mt-10">
          <div
            class="flex flex-col items-start justify-between gap-10 lg:flex-row"
          >
            <div class="flex flex-col">
              <h1 class="text-xl font-bold">Važne informacije</h1>
              <div class="mt-2 flex flex-col text-sm">
                <div class="flex items-center gap-1 text-gray-500">
                  <span
                    class="icon-[prime--envelope] mt-[2px] text-xl"
                  />radestojicicsd@gmail.com
                </div>
                <div class="flex items-center gap-1 text-gray-500">
                  <span class="icon-[prime--phone] mt-[2px] text-xl" />
                  <p class="underline">
                    <a href="tel:+3816442788">+3816442788</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-col">
              <h1 class="text-xl font-bold">Lokacija</h1>
              <div class="mt-2 flex gap-1 text-sm text-gray-500">
                <span class="icon-[prime--map-marker] mt-[2px] text-xl" />
                <p>4, Bulevar Mihajla Pupina 10 z, Beograd 11070</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="white flex w-full flex-col rounded-lg bg-white px-8 py-12 md:px-6 md:py-8 lg:px-8 lg:py-12"
      >
        <div class="mb-8 flex flex-col border-b-2 border-gray-100 pb-6">
          <h1 class="text-2xl font-bold">Kontaktirajte nas</h1>
          <p class="mt-3 text-gray-500">
            Pošaljite nam poruku sa svojim zahtevima i dobićete odgovore u
            najbržem mogućem roku.
          </p>
        </div>
        <form>
          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-6 lg:flex-row">
              <div class="flex w-full flex-col">
                <label class="font-medium text-gray-800" for="Ime"
                  >Ime <span class="text-red-500">*</span></label
                >
                <input
                  class="mt-2 w-full rounded-sm border px-3 py-2 focus:border focus:border-gray-300 focus:outline-none"
                  type="text"
                  name="ime"
                  placeholder="Unesite..."
                />
              </div>
              <div class="flex w-full flex-col">
                <label class="font-medium text-gray-800" for="Prezime">
                  Prezime <span class="text-red-500">*</span></label
                >
                <input
                  class="mt-2 w-full rounded-sm border border-gray-200 px-3 py-2 focus:border focus:border-gray-300 focus:outline-none"
                  type="text"
                  name="prezime"
                  placeholder="Unesite..."
                />
              </div>
            </div>
            <div class="flex w-full flex-col">
              <label class="font-medium text-gray-800" for="Eail"
                >Vaš Email <span class="text-red-500">*</span></label
              >
              <input
                class="mt-2 rounded-sm border px-3 py-2 focus:border focus:border-gray-300 focus:outline-none"
                type="email"
                name="ime"
                placeholder="Unesite..."
              />
            </div>

            <div class="flex w-full flex-col">
              <label class="font-medium text-gray-800" for="Poruka"
                >Poruka <span class="text-red-500">*</span></label
              >
              <textarea
                class="mt-2 rounded-sm border px-3 py-2 focus:border focus:border-gray-300 focus:outline-none"
                name="poruka"
                cols="30"
                rows="8"
                placeholder="Unesite..."
              ></textarea>
            </div>
            <button class="focus mt-3 w-1/3 rounded-md bg-yellow-400 py-2">
              <p class="flex w-full items-center justify-center text-white">
                Posalji
                <span
                  class="icon-[prime--arrow-up-right] ml-[2px] mt-[3px] text-lg"
                />
              </p>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "page-layout",
});
</script>

<style scoped></style>
