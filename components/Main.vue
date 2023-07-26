<template>
  <div class="relative z-0 justify-center">
    <main class="bg-gray-200 w-full flex justify-center items-center">
      <div class="w-full">
        <div class="w-full flex items-center justify-center">
          <img
            src="/images/hero_img.jpg"
            class="w-screen object-cover brightness-50 h-104 relative sm:h-104 lg:object-cover"
            alt=""
          />
          <div class="absolute w-full top-8">
            <form class="md:container mx-auto p-4 md:p-8" action="">
              <div class="flex flex-col justify-center items-center mb-16">
                <h1
                  class="text-center text-white font-bold w-full text-4xl lg:text-5xl lg:w-2/3"
                >
                  Unesite detalje vašeg vozila
                </h1>
                <p class="text-white text-lg text-center mt-4 sm:text-left">
                  Pronađite savršene autodelove u nekoliko klikova
                </p>
              </div>

              <div
                class="flex flex-col gap-4 justify-center items-center md:flex-row md:w-full"
              >
                <select
                  class="p-3 w-80 rounded cursor-pointer focus:outline-none cursor md:w-full lg:w-64"
                  id="cars"
                  name="cars"
                >
                  <option value="year">Godište</option>
                </select>
                <select
                  class="p-3 w-80 rounded cursor-pointer focus:outline-none md:w-full lg:w-64"
                  id="cars"
                  name="cars"
                >
                  <option value="make">Marka</option>
                </select>
                <select
                  class="p-3 w-80 rounded cursor-pointer focus:outline-none md:w-full lg:w-64"
                  id="cars"
                  name="cars"
                >
                  <option value="model">Model</option>
                </select>
                <button
                  class="bg-yellow-500 p-3 w-52 mt-2 rounded text-gray-900 flex items-center justify-center gap-1 md:mt-0 md:w-40"
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

<script setup lang="ts">
</script>

<style lang="scss" scoped>
</style>