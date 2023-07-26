<template>
  <div class="relative z-0 justify-center">
    <main class="b flex w-full items-center justify-center bg-gray-200">
      <div class="w-full">
        <div class="flex w-full items-center justify-center">
          <img
            src="/images/hero_img.jpg"
            class="relative h-104 w-screen object-cover brightness-50 sm:h-104 lg:object-cover"
            alt=""
          />
          <div class="absolute top-8 w-full">
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
                <select
                  class="cursor w-80 cursor-pointer rounded p-3 focus:outline-none md:w-full lg:w-64"
                  id="cars"
                  name="cars"
                >
                  <option value="year">Godište</option>
                </select>
                <select
                  class="w-80 cursor-pointer rounded p-3 focus:outline-none md:w-full lg:w-64"
                  id="cars"
                  name="cars"
                >
                  <option value="make">Marka</option>
                </select>
                <select
                  class="w-80 cursor-pointer rounded p-3 focus:outline-none md:w-full lg:w-64"
                  id="cars"
                  name="cars"
                >
                  <option value="model">Model</option>
                </select>
                <button
                  class="mt-2 flex w-52 items-center justify-center gap-1 rounded bg-yellow-500 p-3 text-gray-900 md:mt-0 md:w-40"
                >
                  <span class="i-prime-search text-lg" />
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

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
