<template>
  <div
    v-if="showCart"
    class="fixed right-0 top-0 z-[1200] flex h-full flex-col justify-between bg-white sm:w-auto"
  >
    <div class="scrollbar flex w-full flex-col overflow-scroll p-5">
      <div class="flex items-start justify-between">
        <h1 class="text-2xl font-[700]">Vaša korpa</h1>
        <span
          @click="$emit('toggleAddToCart')"
          class="cursor pointer icon-[prime--times] relative left-2 cursor-pointer text-[42px] hover:bg-gray-700"
        />
      </div>
      <div class="mt-2 flex flex-col pb-3">
        <div class="mt-4 flex justify-between text-sm font-thin text-gray-400">
          <p>Proizvod</p>
          <p>Ukupno</p>
        </div>
      </div>
      <div
        v-if="localStorageCart.length > 0"
        class="flex flex-col gap-5 border-t py-6"
      >
        <div
          v-for="(product, index) in localStorageCart"
          :key="index"
          class="flex flex-col items-center"
        >
          <div class="flex w-full items-center justify-between sm:gap-4">
            <NuxtLink
              @click="$emit('toggleAddToCart')"
              :to="'/prodavnica/' + product.to + '/' + product.id"
            >
              <NuxtImg
                sizes="xs:60 sm:85 md:90 lg:100 "
                format="webp"
                :src="product.image"
                alt=""
              />
            </NuxtLink>
            <div class="flex w-40 flex-col gap-1 sm:w-60">
              <p class="text-sm font-semibold sm:text-base">
                {{ product.title }}
              </p>
              <p class="text-sm">{{ product.newPrice || 0 }} RSD</p>
            </div>
            <div>
              <p class="w-full font-bold">
                {{ product.newPrice * product.quantity || 0 }} RSD
              </p>
            </div>
          </div>
          <div class="mt-2 flex items-center gap-8 sm:mt-1">
            <div
              class="flex w-32 justify-between rounded-full border border-gray-800"
            >
              <button
                :class="{
                  'cursor-not-allowed ': product.quantity == 1,
                }"
                :disabled="product.quantity == 1"
                @click="product.quantity--"
                class="w-full text-lg"
              >
                -</button
              ><input
                class="flex w-full justify-center py-3 text-center text-sm placeholder:text-black"
                type="text"
                :placeholder="product.quantity"
                disabled
              />
              <button @click="product.quantity++" class="w-full text-lg">
                +
              </button>
            </div>
            <div>
              <span
                @click="removeFromCart(product.id)"
                class="icon-[prime--trash] mt-2 cursor-pointer text-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div v-else class="border-t py-6">Vaša korpa je prazna.</div>
      <div class="flex flex-col border-t pt-4">
        <div class="flex items-start justify-between">
          <h1 class="text-lg font-bold text-gray-800">Ukupno</h1>
          <p class="text-lg">{{ totalPrice || 0 }} RSD</p>
        </div>
        <p class="py-5 text-sm text-gray-500">
          Sve cene su prikazane sa PDV-om i nema dodatnih troškova.
        </p>
        <button
          class="flex w-full items-center justify-center rounded-full bg-black p-4 text-white"
        >
          Nastavi kupovinu
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { localStorageCart, removeFromCart, totalPrice } = addToCart();

defineProps({
  showCart: {
    type: Boolean,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
