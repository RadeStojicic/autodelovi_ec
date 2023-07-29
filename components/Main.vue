<template>
  <div class="relative z-0 justify-center">
    <main class="flex w-full items-center justify-center bg-gray-200">
      <div class="w-full">
        <div class="flex w-full items-center justify-center">
          <img
            src="/images/hero_img.jpg"
            class="relative h-108 w-screen object-cover brightness-50 sm:h-104 lg:object-cover"
            alt=""
          />
          <div class="absolute top-12 w-full md:top-24">
            <form class="mx-auto p-4 md:container md:p-8" action="">
              <div class="mb-16 flex flex-col items-center justify-center">
                <h1
                  class="w-full text-center text-4xl font-bold text-white lg:w-2/3 lg:text-5xl"
                >
                  Unesite detalje vašeg vozila
                </h1>
                <p class="mt-4 text-center text-lg text-white sm:text-left">
                  Pronađite savršene autodelove u nekoliko klikova
                </p>
              </div>

              <div
                class="flex flex-col items-center justify-center gap-4 md:w-full md:flex-row"
              >
                <selection-button
                  v-for="(selection, index) in multiSel"
                  :key="index"
                  :placeholderName="selection.placeholderName"
                  :multipleSel="selection.multipleSel"
                  :selection="selection.options"
                ></selection-button>

                <button
                  class="mt-4 flex w-52 items-center justify-center gap-1 rounded bg-yellow-500 p-3 text-gray-900 md:mt-0 md:w-40"
                >
                  <span class="icon-[prime--search] text-lg" />
                  Pretraži
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
interface Selections {
  placeholderName: string;
  multipleSel: boolean;
  options: { text: string }[];
}
const multiSel: Selections[] = [
  {
    placeholderName: "Marka",
    multipleSel: false,
    options: [
      { text: "BMW" },
      { text: "Audi" },
      { text: "Mercedes" },
      { text: "Polo" },
      { text: "Ford" },
    ],
  },
  {
    placeholderName: "Model",
    multipleSel: true,
    options: [
      { text: "X4" },
      { text: "i8" },
      { text: "M4" },
      { text: "i4" },
      { text: "X6" },
    ],
  },
  {
    placeholderName: "Godište",
    multipleSel: true,
    options: [
      { text: "2003" },
      { text: "2004" },
      { text: "2005" },
      { text: "2006" },
      { text: "2007" },
    ],
  },
];
</script>

<style lang="scss" scoped></style>
