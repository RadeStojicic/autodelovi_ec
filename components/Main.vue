<template>
  <div class="relative z-0 justify-center">
    <main
      class="mx-auto flex w-full items-center justify-center px-6 md:container"
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
              <NuxtLink to="/prodavnica">
                <button
                  class="mt-6 flex w-52 items-center justify-center gap-1 rounded bg-yellow-400 p-3 text-gray-900 md:mt-8 md:w-40"
                >
                  Prodavnica
                  <span class="icon-[prime--arrow-right] mt-[3px] text-lg" />
                </button>
              </NuxtLink>
            </div>
            <div
              class="hidden h-80 w-80 items-center justify-start rounded-full sm:flex"
            >
              <img src="/images/shocks.png" class="flex w-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
