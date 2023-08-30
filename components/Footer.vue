<template>
  <footer class="absolute h-auto w-full bg-primary pb-2 pt-4">
    <div
      class="mx-auto flex h-full flex-col items-center justify-center gap-8 px-4 py-8 text-white md:container"
    >
      <div
        class="grid grid-cols-2 items-start justify-items-start gap-12 md:grid-cols-4 md:justify-items-center md:gap-2"
      >
        <div>
          <h1 class="flex items-center text-2xl font-bold text-white">
            CarGear.
          </h1>
          <p class="mt-3 text-gray-400">
            Naša platforma nudi korisnički prijateljsko iskustvo koje vam
            omogućava laku pretragu i pronalaženje željenih delova.
          </p>
          <div class="mt-4 flex items-center gap-1 text-3xl">
            <span class="icon-[prime--instagram]" />
            <span class="icon-[prime--facebook]" />
            <span class="icon-[prime--twitter]" />
            <span class="icon-[prime--linkedin]" />
          </div>
        </div>
        <div>
          <h1 class="text-lg font-bold">Korisni Linkovi</h1>
          <div class="mt-3 text-sm">
            <ul class="flex flex-col gap-1 text-gray-400">
              <li><NuxtLink to="/pocetna">Početna</NuxtLink></li>
              <li><NuxtLink to="/prodavnica">Prodavnica</NuxtLink></li>
              <li><NuxtLink to="/novosti">Novosti</NuxtLink></li>
              <li><NuxtLink to="/kontakt">Kontakt</NuxtLink></li>
            </ul>
          </div>
        </div>
        <div>
          <h1 class="text-lg font-bold">Kategorije</h1>
          <div class="mt-3 text-sm">
            <ul class="flex flex-col gap-1 text-gray-400">
              <li><NuxtLink to="/motor_pogon">Motor i pogon</NuxtLink></li>
              <li>
                <NuxtLink to="/elektrika_elektronika"
                  >Elektrika i elektronika</NuxtLink
                >
              </li>
              <li><NuxtLink to="/osvetljenje">Osvetljenje</NuxtLink></li>
              <li><NuxtLink to="/signalizacija">Signalizacija</NuxtLink></li>
              <li>
                <NuxtLink to="/karoserija_enterijer"
                  >Karoserija i enterijer</NuxtLink
                >
              </li>
              <li><NuxtLink to="/pneumatici">Pneumatici</NuxtLink></li>
            </ul>
          </div>
        </div>
        <div>
          <h1 class="text-lg font-bold">Korisnička podrška</h1>
          <div class="mt-3">
            <ul class="flex flex-col gap-1 text-gray-400">
              <li><NuxtLink to="/pomoc">Pomoć</NuxtLink></li>
              <li><NuxtLink to="/moja_korpa">Isporuka</NuxtLink></li>
              <li>
                <NuxtLink to="/omiljeni_proizvodi">Omiljeni proizvodi</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/politika_povratka">Reklamacije</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="w-full border-t border-gray-700 text-sm">
        <div class="mt-8 flex items-start justify-between">
          <p class="text-gray-300">© 2023. Sva prava zadržana.</p>

          <div class="flex items-start gap-4 text-gray-300 sm:gap-3">
            <p>Lična prava</p>
            <p>Uslovi</p>
            <p>Politika povratka</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
