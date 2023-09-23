<template>
  <transition name="slide" mode="out-in">
    <div
      v-if="showCart"
      class="fixed right-0 top-0 z-[1200] flex h-full w-[90%] flex-col justify-between bg-white sm:w-auto"
    >
      <div class="scrollbar flex w-full flex-col overflow-scroll p-5">
        <div class="flex items-start justify-between">
          <h1 class="text-2xl font-[700]">Vaša korpa</h1>
          <span
            @click="$emit('toggleAddToCart')"
            class="cursor pointer icon-[prime--times] relative bottom-[2px] left-2 cursor-pointer text-[42px] hover:bg-gray-700"
          />
        </div>
        <div class="mt-2 flex flex-col pb-3">
          <div
            class="mt-4 flex justify-between text-sm font-light text-gray-600"
          >
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
            <div
              class="flex w-full items-center justify-between gap-4 sm:gap-0"
            >
              <div class="flex w-full items-center gap-2">
                <NuxtLink
                  @click="$emit('toggleAddToCart')"
                  :to="'/prodavnica/' + product.to + '/' + product.id"
                >
                  <NuxtImg
                    format="webp"
                    width="90"
                    :src="product.image"
                    alt="Proizvod"
                  />
                </NuxtLink>
                <div class="flex flex-col items-start sm:w-3/5">
                  <p class="text-sm font-semibold sm:text-base">
                    {{ product.title }}
                  </p>
                  <p class="text-sm">{{ product.newPrice || 0 }} RSD</p>
                </div>
              </div>
              <div>
                <p class="whitespace-nowrap text-sm font-semibold sm:text-lg">
                  {{ product.newPrice * product.quantity || 0 }} RSD
                </p>
              </div>
            </div>
            <div class="mt-2 flex items-center gap-8 md:mt-1">
              <div
                class="flex w-32 justify-between rounded-full border border-gray-800"
              >
                <button
                  :class="{
                    'cursor-not-allowed ': product.quantity == 1,
                  }"
                  :disabled="product.quantity == 1"
                  @click="product.quantity--"
                  class="w-full rounded-full text-lg"
                >
                  -</button
                ><input
                  class="flex w-full justify-center bg-white py-3 text-center text-sm placeholder:text-black"
                  type="text"
                  :placeholder="product.quantity"
                  disabled
                />
                <button
                  @click="product.quantity++"
                  class="w-full rounded-full text-lg"
                >
                  +
                </button>
              </div>
              <div>
                <span
                  @click="removeFromCart(product.id)"
                  class="icon-[prime--trash] mt-2 cursor-pointer text-[1.4em]"
                />
              </div>
            </div>
          </div>
        </div>
        <div v-else class="border-t py-6">Vaša korpa je prazna.</div>
        <div class="flex flex-col border-t pt-4">
          <div class="flex items-start justify-between">
            <h1 class="text-lg font-bold text-gray-800">Ukupno</h1>
            <p class="text-lg font-semibold">{{ totalPrice || 0 }} RSD</p>
          </div>
          <p class="py-5 text-sm text-gray-500">
            Sve cene su prikazane sa PDV-om i nema dodatnih troškova.
          </p>
          <NuxtLink
            @click="$emit('toggleAddToCart')"
            to="/checkout"
            class="flex w-full items-center justify-center rounded-full bg-black p-4 text-white"
          >
            Nastavi kupovinu
          </NuxtLink>
        </div>
      </div>
    </div>
  </transition>
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

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
