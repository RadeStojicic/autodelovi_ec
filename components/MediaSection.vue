<template>
  <div class="relative mt-24 pb-96">
    <div
      class="mx-auto flex h-104 w-full flex-col items-center justify-between gap-4 p-4 md:container lg:h-80 lg:flex-row lg:gap-8"
    >
      <div class="h-full w-full">
        <NuxtLink
          to="/"
          class="relative flex h-full w-full items-center rounded-lg bg-gray-800"
        >
          <img
            class="absolute z-0 h-full w-full rounded-lg object-cover brightness-50"
            src="/images/media_img_2.jpg"
            alt=""
          />
          <div class="z-10 flex flex-col justify-center p-8">
            <h1
              class="w-full text-2xl font-bold text-white md:w-2/3 md:text-3xl"
            >
              Letnje putovanje bez briga - 25% popusta na sve autodele za
              putnike!
            </h1>
            <p class="mt-2 text-gray-200">
              Pripremite vaš automobil za letnje avanture.
            </p>
            <NuxtLink class="mt-3 flex items-center gap-1 text-white" to="/"
              >Kupi odmah <span class="icon-[prime--arrow-right]"
            /></NuxtLink>
          </div>
        </NuxtLink>
      </div>
      <div class="h-full w-full">
        <NuxtLink
          to="/"
          class="relative flex h-full w-full items-center rounded-lg bg-gray-800"
        >
          <img
            class="absolute z-0 h-full w-full rounded-lg object-cover brightness-50"
            src="/images/media_img_1.jpg"
            alt=""
          />
          <div class="z-10 flex flex-col justify-center p-8">
            <h1
              class="w-full text-2xl font-bold text-white md:w-2/3 md:text-3xl"
            >
              Vikend ludilo - 30% popusta na sve autodelove!
            </h1>
            <p class="mt-2 text-gray-200">
              Posebni popusti na sve autodelove u našoj ponudi.
            </p>
            <NuxtLink class="mt-3 flex items-center gap-1 text-white" to="/"
              >Kupi odmah <span class="icon-[prime--arrow-right]"
            /></NuxtLink>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
