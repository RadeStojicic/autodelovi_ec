<template>
  <div class="relative z-0 justify-center">
    <main
      class="mx-auto flex w-full items-center justify-center px-0 md:container md:px-6"
    >
      <div class="w-full bg-white">
        <div class="flex h-100 w-full items-center justify-center">
          <div
            class="flex w-full items-center justify-center gap-4 px-4 lg:gap-20 lg:px-0"
          >
            <div class="flex w-full flex-col items-center justify-end sm:w-1/2">
              <h1
                class="text-center text-4xl font-bold text-gray-800 lg:text-5xl"
              >
                Lider u ponudi auto-delova za vaš automobil
              </h1>
              <p class="mt-6 text-center text-lg text-gray-700">
                Širok izbor kvalitetnih auto-delova po najpovoljnijim cenama
              </p>
              <NuxtLink class="mt-6 md:mt-8" to="/prodavnica">
                <button
                  class="flex w-52 items-center justify-center gap-1 rounded bg-secondary p-3 text-gray-900 md:w-40"
                >
                  Prodavnica
                  <span class="icon-[prime--arrow-right] mt-[3px] text-lg" />
                </button>
              </NuxtLink>
            </div>
            <div class="hidden items-center justify-start rounded-full sm:flex">
              <NuxtImg
                sizes="sm:256px md:320px"
                src="/images/shocks.png"
                format="webp"
                class="flex w-full"
                alt="main_image"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
