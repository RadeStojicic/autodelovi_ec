<template>
  <div class="relative mt-24 pb-96">
    <div
      class="container w-full p-4 mx-auto flex flex-col justify-between items-center gap-4 h-104 lg:flex-row lg:h-80 lg:gap-8"
    >
      <div class="w-full h-full">
        <NuxtLink
          to="/"
          class="bg-gray-800 w-full h-full flex rounded-lg items-center relative"
        >
          <img
            class="absolute w-full h-full rounded-lg brightness-50 object-cover z-0"
            src="/images/media_img_2.jpg"
            alt=""
          />
          <div class="flex flex-col justify-center p-8 z-10">
            <h1
              class="text-white font-bold text-2xl w-full md:text-3xl md:w-2/3"
            >
              Letnje putovanje bez briga - 25% popusta na sve autodele za
              putnike!
            </h1>
            <p class="text-gray-200 mt-2">
              Pripremite vaš automobil za letnje avanture.
            </p>
            <NuxtLink class="mt-3 text-white flex items-center gap-1" to="/"
              >Kupi odmah <span class="i-prime-arrow-right"
            /></NuxtLink>
          </div>
        </NuxtLink>
      </div>
      <div class="w-full h-full">
        <NuxtLink
          to="/"
          class="bg-gray-800 w-full h-full rounded-lg flex items-center relative"
        >
          <img
            class="absolute w-full h-full rounded-lg brightness-50 object-cover z-0"
            src="/images/media_img_1.jpg"
            alt=""
          />
          <div class="flex flex-col justify-center p-8 z-10">
            <h1
              class="text-white font-bold text-2xl w-full md:text-3xl md:w-2/3"
            >
              Vikend ludilo - 30% popusta na sve autodelove!
            </h1>
            <p class="text-gray-200 mt-2">
              Posebni popusti na sve autodelove u našoj ponudi.
            </p>
            <NuxtLink class="mt-3 text-white flex items-center gap-1" to="/"
              >Kupi odmah <span class="i-prime-arrow-right"
            /></NuxtLink>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
</style>