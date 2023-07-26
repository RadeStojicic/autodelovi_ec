<template>
  <div class="h-auto py-4 bg-footerBackground">
    <div
      class="h-full container mx-auto px-4 py-8 flex flex-col justify-center gap-8 items-center text-white"
    >
      <div
        class="grid grid-cols-2 gap-12 items-start justify-items-start md:justify-items-center md:grid-cols-4 md:gap-2"
      >
        <div>
          <h1 class="text-2xl">Logo</h1>
          <p class="mt-3 text-gray-400">
            Naša platforma nudi korisnički prijateljsko iskustvo koje vam
            omogućava laku pretragu i pronalaženje željenih delova.
          </p>
          <div class="flex items-center gap-1 text-3xl mt-4">
            <span class="i-prime-instagram" />
            <span class="i-prime-facebook" />
            <span class="i-prime-twitter" />
            <span class="i-prime-linkedin" />
          </div>
        </div>
        <div>
          <h1 class="text-lg font-bold">Korisni Linkovi</h1>
          <div class="mt-3 text-sm">
            <ul class="flex flex-col gap-1 text-gray-400">
              <li><NuxtLink to="/">Početna</NuxtLink></li>
              <li><NuxtLink to="/">Kategorije</NuxtLink></li>
              <li><NuxtLink to="/">Novosti</NuxtLink></li>
              <li><NuxtLink to="/">Isporuka</NuxtLink></li>
            </ul>
          </div>
        </div>
        <div>
          <h1 class="text-lg font-bold">Kategorije</h1>
          <div class="mt-3 text-sm">
            <ul class="flex flex-col gap-1 text-gray-400">
              <li><NuxtLink to="/">Motor i pogon</NuxtLink></li>
              <li><NuxtLink to="/">Elektrika i elektronika</NuxtLink></li>
              <li><NuxtLink to="/">Osvetljenje</NuxtLink></li>
              <li><NuxtLink to="/">Signalizacija</NuxtLink></li>
              <li><NuxtLink to="/">Karoserija i enterijer</NuxtLink></li>
              <li><NuxtLink to="/">Pneumatici</NuxtLink></li>
            </ul>
          </div>
        </div>
        <div>
          <h1 class="text-lg font-bold">Korisnička podrška</h1>
          <div class="mt-3">
            <ul class="flex flex-col gap-1 text-gray-400">
              <li><NuxtLink to="/">Pomoć</NuxtLink></li>
              <li><NuxtLink to="/">Moja korpa</NuxtLink></li>
              <li><NuxtLink to="/">Omiljeni proizvodi</NuxtLink></li>
              <li><NuxtLink to="/">Politika povratka</NuxtLink></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="border-t border-footerHr w-full text-center">
        <p class="mt-8 text-md text-gray-300">© 2023. Sva prava zadržana.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
</style>