<template>
  <div class="relative">
    <div class="mx-auto h-auto px-4 md:container md:h-72">
      <div
        class="flex h-full w-full flex-col items-center justify-between gap-14 rounded-lg rounded-b-none bg-yellow-400 px-10 py-10 sm:px-4 md:gap-0 lg:flex-row lg:gap-12 lg:px-12 lg:py-4"
      >
        <div class="flex h-full w-full flex-col items-start justify-center">
          <h1 class="text-5xl font-bold text-white">
            Imate pitanja ili nedoumice?
          </h1>
          <p class="text-md mt-4 text-white md:mt-2 md:text-lg">
            Naš tim korisničke podrške stoji vam na raspolaganju za sva pitanja
            o autodelovima
          </p>
        </div>
        <div
          class="flex w-full flex-col justify-end gap-4 sm:flex-row sm:justify-center md:flex-row lg:justify-end lg:gap-4"
        >
          <NuxtLink class="w-full md:w-auto" to="/kontakt">
            <button
              class="w-full rounded-lg border-2 border-white bg-transparent bg-white px-4 py-2 text-gray-800 hover:bg-transparent hover:text-white hover:duration-300 focus:select-none md:mt-6"
            >
              Kontaktirajte nas
            </button>
          </NuxtLink>
          <NuxtLink class="w-full md:w-auto" to="/pitanja">
            <button
              class="w-full rounded-lg border-2 border-white bg-transparent px-4 py-2 text-white hover:bg-white hover:text-gray-800 hover:duration-300 focus:select-none md:mt-6"
            >
              Najčešća pitanja
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
