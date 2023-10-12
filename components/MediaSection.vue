<template>
  <div class="relative pb-20">
    <div
      class="mx-auto flex w-full flex-col items-center justify-between gap-4 p-4 md:container lg:h-80 lg:flex-row lg:gap-8"
    >
      <div class="h-full w-full">
        <NuxtLink
          aria-label="Snizenje"
          to="/prodavnica"
          class="relative flex h-full w-full items-center rounded-lg bg-gray-800 py-6"
        >
          <div class="z-10 flex flex-col justify-center p-8">
            <h1 class="w-full text-3xl font-bold text-white md:w-2/3">
              Letnje putovanje bez briga - 25% popusta na sve autodele za
              putnike!
            </h1>
            <p class="mt-2 text-lg text-gray-200 md:text-base">
              Pripremite vaš automobil za letnje avanture.
            </p>
            <NuxtLink
              aria-label="Kupi odmah"
              class="mt-3 flex items-center gap-1 text-lg text-white md:text-base"
              to="/prodavnica"
              >Kupi odmah <Icon name="prime:arrow-right" />
            </NuxtLink>
          </div>
        </NuxtLink>
      </div>
      <div class="h-full w-full">
        <NuxtLink
          aria-label="Snizenje"
          to="/prodavnica"
          class="relative flex h-full w-full items-center rounded-lg bg-gray-800 py-6"
        >
          <div class="z-10 flex flex-col justify-center p-8">
            <h1 class="w-full text-3xl font-bold text-white md:w-2/3">
              Vikend ludilo - 30% popusta na sve autodelove!
            </h1>
            <p class="mt-2 text-lg text-gray-200 md:text-base">
              Posebni popusti na sve autodelove u našoj ponudi.
            </p>
            <NuxtLink
              aria-label="Kupi odmah"
              class="mt-3 flex items-center gap-1 text-lg text-white md:text-base"
              to="/prodavnica"
              >Kupi odmah <Icon name="prime:arrow-right"
            /></NuxtLink>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
