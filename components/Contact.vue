<template>
  <div class="relative">
    <div class="mx-auto h-auto md:container md:h-72 md:px-4">
      <div
        class="flex h-full w-full flex-col items-center justify-between gap-10 rounded-none rounded-b-none bg-[#183aa1] px-10 py-14 sm:gap-14 sm:px-4 md:gap-0 md:rounded-t-lg lg:flex-row lg:gap-12 lg:px-12 lg:py-4"
      >
        <div class="flex h-full w-full flex-col items-start justify-center">
          <h1
            class="text-4xl font-extrabold text-white lg:text-5xl lg:font-bold"
          >
            Imate pitanja ili nedoumice?
          </h1>
          <p class="mt-4 text-lg text-white md:mt-3 md:text-lg lg:text-base">
            Naš tim korisničke podrške stoji vam na raspolaganju za sva pitanja
            o autodelovima
          </p>
        </div>
        <div
          class="flex w-full flex-col justify-end gap-4 sm:flex-row sm:justify-center md:flex-row lg:justify-end lg:gap-4"
        >
          <NuxtLink class="w-full md:w-auto" to="/kontakt">
            <button
              class="w-full rounded-lg border-2 border-white bg-transparent bg-white px-4 py-3 text-gray-800 hover:bg-transparent hover:text-white hover:duration-300 focus:select-none md:mt-6"
            >
              Kontaktirajte nas
            </button>
          </NuxtLink>
          <NuxtLink class="w-full md:w-auto" to="/pitanja">
            <button
              class="w-full rounded-lg border-2 border-white bg-transparent px-4 py-3 text-white hover:bg-white hover:text-gray-800 hover:duration-300 focus:select-none md:mt-6"
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
