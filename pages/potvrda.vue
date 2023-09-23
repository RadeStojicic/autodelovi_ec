<template>
  <Navbar />
  <div class="h-full bg-gray-100">
    <div
      class="flex h-20 w-full items-center justify-center gap-2 border-b bg-white text-white sm:gap-4"
    >
      <div class="flex items-center gap-2">
        <p
          class="flex h-6 w-6 items-center justify-center rounded-full bg-[#183aa1] text-xs font-semibold text-white"
        >
          1
        </p>
        <p class="hidden whitespace-nowrap text-sm text-black md:block">
          Pregled korpe
        </p>
        <p class="whitespace-nowrap text-black md:hidden">Korpa</p>
      </div>
      <span
        class="flex h-[2px] w-5 items-center justify-center bg-gray-300 md:w-10"
      ></span>
      <div class="flex items-center gap-2">
        <p
          class="flex h-6 w-6 items-center justify-center rounded-full bg-[#183aa1] text-xs font-semibold text-white"
        >
          2
        </p>
        <p class="whitespace-nowrap text-black">Informacije</p>
      </div>
      <span
        class="flex h-[2px] w-5 items-center justify-center bg-gray-300 md:w-10"
      ></span>
      <div class="flex items-center gap-2">
        <p
          class="flex h-6 w-6 items-center justify-center rounded-full bg-[#183aa1] text-xs font-semibold text-white"
        >
          3
        </p>
        <p class="hidden whitespace-nowrap text-sm text-black md:block">
          Potvrda kupovine
        </p>
        <p class="whitespace-nowrap text-black md:hidden">Potvrda</p>
      </div>
    </div>
    <div
      class="md:1/2 mx-auto flex h-full w-full flex-col items-center justify-center gap-4 px-6 py-20 text-center sm:w-2/3 sm:px-0"
    >
      <h1 class="text-2xl">Uspešno smo primili vaše informacije o kupovini.</h1>
      <p class="text-sm">
        Vaši proizvodi uskoro će biti pripremljeni i poslati na vašu adresu.
        Očekujte ih u najkraćem mogućem roku.
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
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from "../store/product";
import { storeToRefs } from "pinia";
import { toggleSideNav } from "../store/constants";
import { showCart } from "../store/constants";

const { localStorageCart, totalPrice } = addToCart();
const { cards } = storeToRefs(useProductStore());

definePageMeta({
  middleware: "checkout",
});

const toggleAddToCart = () => {
  showCart.value = !showCart.value;
  toggleSideNav.value = false;
  document.body.style.overflow = showCart.value ? "hidden" : "";
  checkoutButton();
};

const countries = [{ name: "Srbija" }];
const showCountry = ref(false);
const openDropDown = ref(false);
const selectedCountry = ref("Srbija");
const toggleShowCountry = (name: string) => {
  selectedCountry.value = name;
  showCountry.value = !showCountry.value;
};

const showInfo = ref(false);
const purchase = ref(false);
const checkoutButton = () => {
  if (localStorageCart.value.length > 0) {
    purchase.value = true;
  } else {
    purchase.value = false;
  }
};
onMounted(() => {
  checkoutButton();
});
</script>

<style lang="scss" scoped></style>
