<template>
  <Navbar />
  <div
    class="md:1/2 mx-auto flex h-full w-full flex-col items-center justify-center gap-5 px-6 py-20 text-center sm:w-2/3 sm:px-0"
  >
    <div
      class="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 p-2"
    >
      <Icon name="prime:android" class="text-5xl text-primary" />
    </div>
    <h1 class="text-3xl font-bold text-primary">Greška 404</h1>
    <p class="text-sm sm:text-base">
      Izvinjavamo se, stranica nije pronađena. Link koji ste pratili je
      neispravan ili je stranica uklonjena.
    </p>
    <NuxtLink aria-label="Kontakt" class="w-full md:w-[200px]" to="/">
      <button
        aria-label="Kontaktirajte nas"
        class="w-full rounded-full bg-[#183aa1] px-4 py-3 text-white focus:select-none md:mt-6"
      >
        Nazad na sajt
      </button>
    </NuxtLink>
  </div>
  <PopularProducts class="mb-10 px-4" />
  <Contact />
  <Footer />
</template>

<script setup lang="ts"></script>

<style scoped></style>
