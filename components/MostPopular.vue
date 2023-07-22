<template>
  <div class="mt-12 z-0 justify-center bg-gray-100">
    <div class="container mx-auto w-full p-4 lg:p-6">
      <div class="flex justify-between mt-12">
        <h1 class="text-2xl font-bold">Najpopularniji proizvodi</h1>
        <button>Vidi još</button>
      </div>
      <div
        class="grid grid-cols-1 gap-6 mt-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div class="x w-full relative bg-white p-12">
          <div class="flex items-center justify-center rounded-md">
            <img class="w-36" src="/images/main_image_1.png" alt="" />
          </div>

          <span
            class="i-prime-heart p-3 cursor-pointer absolute top-4 right-4 text-gray-900"
          />

          <div class="mt-4 flex flex-col justify-center items-center">
            <h1 class="font-bold">Valmarin Motorno Ulje</h1>
            <p class="text-xs text-gray-400 mt-1">Filteri</p>
            <p class="text-priceColor text-xl font-black mt-4">499 RSD</p>
            <p
              class="text-gray-900 line-through decoration-1 text-xs font-black mt-4"
            >
              799.99 RSD
            </p>

            <button
              class="mt-4 border-2 bg-primary text-white border-none font-semibold text-sm p-3 w-36 rounded-md"
            >
              Dodaj u korpu
            </button>
          </div>
        </div>
        <div class="x w-full relative bg-white p-12">
          <div class="flex items-center justify-center rounded-md">
            <img class="w-36" src="/images/main_image_1.png" alt="" />
          </div>

          <span
            class="i-prime-heart p-3 cursor-pointer absolute top-4 right-4 text-gray-900"
          />

          <div class="mt-4 flex flex-col justify-center items-center">
            <h1 class="font-bold">Valmarin Motorno Ulje</h1>
            <p class="text-xs text-gray-400 mt-1">Filteri</p>
            <p class="text-priceColor text-xl font-black mt-4">499 RSD</p>
            <p
              class="text-gray-900 line-through decoration-1 text-xs font-black mt-4"
            >
              799.99 RSD
            </p>

            <button
              class="mt-4 border-2 bg-primary text-white border-none font-semibold text-sm p-3 w-36 rounded-md"
            >
              Dodaj u korpu
            </button>
          </div>
        </div>
        <div class="x w-full relative bg-white p-12">
          <div class="flex items-center justify-center rounded-md">
            <img class="w-36" src="/images/main_image_1.png" alt="" />
          </div>

          <span
            class="i-prime-heart p-3 cursor-pointer absolute top-4 right-4 text-gray-900"
          />

          <div class="mt-4 flex flex-col justify-center items-center">
            <h1 class="font-bold">Valmarin Motorno Ulje</h1>
            <p class="text-xs text-gray-400 mt-1">Filteri</p>
            <p class="text-priceColor text-xl font-black mt-4">499 RSD</p>
            <p
              class="text-gray-900 line-through decoration-1 text-xs font-black mt-4"
            >
              799.99 RSD
            </p>

            <button
              class="mt-4 border-2 bg-primary text-white border-none font-semibold text-sm p-3 w-36 rounded-md"
            >
              Dodaj u korpu
            </button>
          </div>
        </div>
        <div class="x w-full relative bg-white p-12">
          <div class="flex items-center justify-center rounded-md">
            <img class="w-36" src="/images/main_image_1.png" alt="" />
          </div>

          <span
            class="i-prime-heart p-3 cursor-pointer absolute top-4 right-4 text-gray-900"
          />

          <div class="mt-4 flex flex-col justify-center items-center">
            <h1 class="font-bold">Valmarin Motorno Ulje</h1>
            <p class="text-xs text-gray-400 mt-1">Filteri</p>
            <p class="text-priceColor text-xl font-black mt-4">499 RSD</p>
            <p
              class="text-gray-900 line-through decoration-1 text-xs font-black mt-4"
            >
              799.99 RSD
            </p>

            <button
              class="mt-4 border-2 bg-primary text-white border-none font-semibold text-sm p-3 w-36 rounded-md"
            >
              Dodaj u korpu
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const cards = [{}];
</script>

<style lang="scss" scoped>
</style>