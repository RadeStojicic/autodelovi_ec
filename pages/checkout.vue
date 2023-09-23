<template>
  <!-- header -->
  <div class="sticky top-0 z-[50] w-full bg-primary">
    <div>
      <nav class="mx-auto px-4 md:container">
        <div class="flex items-center justify-between py-3">
          <div class="flex items-center">
            <NuxtLink aria-label="Logo" to="/">
              <h1
                class="flex items-center text-2xl font-bold text-white sm:text-2xl"
              >
                <span>AutoParts</span
                ><span
                  class="mb-[-12px] ml-[3px] h-2 w-2 rounded-full bg-secondary text-4xl text-secondary"
                ></span>
              </h1>
            </NuxtLink>
          </div>
          <div class="z-50 flex items-center justify-end">
            <div
              class="flex items-center justify-between gap-0 sm:gap-1 lg:ml-1"
            >
              <div
                @click="toggleAddToCart"
                class="relative ml-1 mt-[4px] block cursor-pointer p-1 sm:ml-0"
              >
                <span
                  class="icon-[prime--shopping-bag] bg-white text-[2rem]"
                  aria-hidden="true"
                />
                <span
                  class="absolute right-[2px] top-[2px] flex h-4 w-4 items-center justify-center rounded-full bg-secondary p-2 text-xs sm:right-[2px] sm:top-[2px]"
                >
                  {{ localStorageCart.length }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <MojaKorpa @toggleAddToCart="toggleAddToCart" :showCart="showCart" />
    <div
      v-if="showCart"
      @click="toggleAddToCart"
      class="fixed top-0 z-[1100] h-full w-full bg-black/40"
    ></div>
  </div>
  <div class="h-full bg-gray-100">
    <!-- o kupovini -->
    <div
      class="flex h-20 w-full items-center justify-around gap-2 border-b bg-white px-4 text-white md:justify-center md:gap-4"
    >
      <div class="flex items-center gap-2">
        <p
          class="flex h-6 w-6 items-center justify-center rounded-full bg-[#183aa1] text-[11px] text-white md:text-xs"
        >
          1
        </p>
        <p class="hidden whitespace-nowrap text-sm text-black md:block">
          Pregled korpe
        </p>
        <p class="whitespace-nowrap text-black md:hidden">Korpa</p>
      </div>
      <span
        class="flex h-[2px] w-10 items-center justify-center bg-gray-300"
      ></span>
      <div class="flex items-center gap-2">
        <p
          class="flex h-6 w-6 items-center justify-center rounded-full bg-[#183aa1] text-[11px] text-white md:text-xs"
        >
          2
        </p>
        <p class="whitespace-nowrap text-black">Informacije</p>
      </div>
      <span
        class="flex h-[2px] w-10 items-center justify-center bg-gray-300"
      ></span>
      <div class="flex items-center gap-2 opacity-50">
        <p
          class="flex h-6 w-6 items-center justify-center rounded-full border-[2px] border-[#183aa1] text-[11px] font-semibold text-primary md:text-xs"
        >
          3
        </p>
        <p class="hidden whitespace-nowrap text-sm text-black md:block">
          Potvrda kupovine
        </p>
        <p class="whitespace-nowrap text-black md:hidden">Potvrda</p>
      </div>
    </div>
    <!-- formular kupovine -->
    <div class="mb-10 mt-10 h-full w-full">
      <div class="md:mx-4">
        <div class="mx-auto flex h-full justify-center bg-white md:container">
          <div
            class="flex h-full w-full flex-col gap-10 bg-gray-100 xl:flex-row"
          >
            <div
              class="flex-2 order-2 flex w-full flex-col justify-start bg-white px-6 py-8 md:rounded-lg md:px-8 md:py-6 xl:order-1"
            >
              <div class="flex flex-col gap-2">
                <h1 class="text-2xl font-semibold">Informacije</h1>
                <p class="text-gray-600">
                  Obezbedite tačne informacije o tome gde želite da stigne vaš
                  proizvod.
                </p>
              </div>
              <form class="mt-6 w-full">
                <div class="flex flex-col gap-3">
                  <div class="flex w-full flex-col gap-4 md:flex-row md:gap-6">
                    <div class="flex w-full flex-col">
                      <div class="flex w-full flex-col">
                        <label
                          class="text-[17px] font-medium text-gray-800 sm:text-base"
                          for="Ime"
                          >Ime <span class="text-red-500">*</span></label
                        >
                        <input
                          class="mt-2 w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:border focus:border-gray-400 focus:outline-none"
                          type="text"
                          @change="checkoutButton"
                          name="Ime"
                          v-model="formData.ime"
                          required
                        />
                      </div>
                    </div>
                    <div class="flex w-full flex-col">
                      <label
                        class="text-[17px] font-medium text-gray-800 sm:text-base"
                        for="Prezime"
                        >Prezime <span class="text-red-500">*</span></label
                      >
                      <input
                        class="mt-2 w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:border focus:border-gray-400 focus:outline-none"
                        type="text"
                        @change="checkoutButton"
                        name="Prezime"
                        v-model="formData.prezime"
                        required
                      />
                    </div>
                  </div>
                  <div class="flex w-full flex-col">
                    <label
                      class="text-[17px] font-medium text-gray-800 sm:text-base"
                      for="Država"
                      >Država <span class="text-red-500">*</span></label
                    >
                    <div
                      @click="openDropDown = !openDropDown"
                      class="relative mt-2 cursor-pointer rounded-lg border border-gray-300 bg-[#183aa1]/10 px-3"
                    >
                      <div class="flex w-full items-center justify-between">
                        <p
                          class="w-full rounded-lg py-3 text-base focus:border focus:border-gray-400 focus:outline-none"
                          name="drzava"
                        >
                          {{ selectedCountry }}
                        </p>
                        <span
                          class="icon-[prime--chevron-down] cursor-pointer p-1 text-2xl"
                        />
                        <div
                          v-if="openDropDown"
                          class="absolute left-0 top-[50px] flex w-full flex-col rounded-b-md border"
                        >
                          <div
                            @click="toggleShowCountry(country.name)"
                            class="w-full cursor-pointer border-b border-gray-200 bg-gray-100 px-3 py-2 hover:bg-gray-200"
                            v-for="(country, index) in countries"
                            :key="index"
                          >
                            {{ country.name }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex w-full flex-col">
                    <label
                      class="text-[17px] font-medium text-gray-800 sm:text-base"
                      for="Adresa"
                      >Adresa <span class="text-red-500">*</span></label
                    >
                    <input
                      class="mt-2 w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:border focus:border-gray-400 focus:outline-none"
                      type="text"
                      @change="checkoutButton"
                      v-model="formData.adresa"
                      maxlength="50"
                      name="Adresa"
                      placeholder="Ulica/broj"
                      required
                    />
                  </div>
                  <div class="flex w-full flex-col gap-4 md:flex-row md:gap-6">
                    <div class="flex w-full flex-col">
                      <label
                        class="text-[17px] font-medium text-gray-800 sm:text-base"
                        for="Poštanski broj"
                        >Poštanski broj
                        <span class="text-red-500">*</span></label
                      >
                      <input
                        class="mt-2 w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:border focus:border-gray-400 focus:outline-none"
                        type="text"
                        @change="checkoutButton"
                        v-model="formData.postanskiBroj"
                        name="Poštanski broj"
                        required
                      />
                    </div>
                    <div class="flex w-full flex-col">
                      <label
                        class="text-[17px] font-medium text-gray-800 sm:text-base"
                        for="Grad"
                        >Grad <span class="text-red-500">*</span></label
                      >
                      <input
                        class="mt-2 w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:border focus:border-gray-400 focus:outline-none"
                        type="text"
                        @change="checkoutButton"
                        v-model="formData.grad"
                        name="Grad"
                        required
                      />
                    </div>
                  </div>
                  <div class="flex w-full flex-col">
                    <label
                      class="flex items-center gap-2 text-[17px] font-medium text-gray-800 sm:text-base"
                      for="Telefon"
                      >Telefon <span class="text-red-500">*</span>
                    </label>
                    <div class="relative">
                      <input
                        class="mt-2 w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:border focus:border-gray-400 focus:outline-none"
                        type="text"
                        @change="checkoutButton"
                        maxlength="15"
                        name="Telefon"
                        v-model="formData.telefon"
                        required
                      />
                      <div class="absolute right-2 top-6">
                        <span
                          @mouseover="showInfo = true"
                          @mouseout="showInfo = false"
                          class="icon-[prime--question-circle] cursor-pointer text-xl text-gray-500"
                        />
                        <div
                          class="absolute bottom-8 right-[-10px]"
                          @mouseover="showInfo = true"
                          @mouseleave="showInfo = false"
                        >
                          <div
                            v-if="showInfo"
                            class="w-36 rounded-lg bg-primary p-2 text-white"
                          >
                            <div class="relative">
                              <div
                                class="absolute right-0 top-full h-3 w-3 -translate-x-1/2 rotate-45 transform bg-primary"
                              ></div>
                              <p class="text-center text-xs">
                                U slučaju da vam se moramo javiti u vezi s
                                narudžbom
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="flex w-full flex-col">
                    <label
                      class="text-[17px] font-medium text-gray-800 sm:text-base"
                      for="Telefon"
                      >Vaš Email <span class="text-red-500">*</span></label
                    >
                    <input
                      class="mt-2 w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:border focus:border-gray-400 focus:outline-none"
                      type="email"
                      @change="checkoutButton"
                      v-model="formData.email"
                      name="Email"
                      placeholder="primer@gmail.com"
                      required
                    />
                  </div>
                  <div class="flex w-full flex-col">
                    <div class="mb-4 mt-6 flex flex-col gap-2">
                      <h1 class="text-2xl font-semibold">Plaćanje</h1>
                      <p>
                        Platite sigurno i bezbedno tek kada paket stigne na Vašu
                        adresu.
                      </p>
                    </div>
                    <label
                      class="flex w-full gap-2 rounded-lg border bg-[#183aa1]/10 px-3 py-4 text-base"
                      for="Placanje"
                    >
                      <input
                        class="w-4 rounded-full border checked:bg-black"
                        type="radio"
                        checked
                        name="Placanje"
                        required
                      />Po uzeću</label
                    >
                  </div>
                  <button
                    @click.prevent="sendPurchaseData"
                    :disabled="purchase == false"
                    aria-label="Posalji"
                    :class="!purchase ? 'brightness-75' : ' brightness-100'"
                    class="focus mt-6 w-full cursor-pointer rounded-full bg-primary py-4 md:w-[400px] xl:hidden"
                  >
                    <p
                      class="flex w-full items-center justify-center text-white"
                    >
                      Poruči odmah
                      <span
                        class="icon-[prime--arrow-up-right] ml-[2px] mt-[3px] text-lg"
                      />
                    </p>
                  </button>
                </div>
              </form>
            </div>
            <div
              class="order-1 w-full border-b bg-white md:rounded-lg md:border-none xl:order-2 xl:w-3/6"
            >
              <div class="right-0 h-full w-full border-gray-300 py-8 md:py-6">
                <div class="flex flex-col px-6 md:px-8">
                  <div class="flex w-full items-center justify-between">
                    <h1 class="text-[21px] font-semibold text-[#282828]">
                      Interesuje vas
                    </h1>
                    <p
                      @click="toggleAddToCart"
                      class="cursor-pointer text-sm text-[#183aa1]"
                    >
                      Izmeni
                    </p>
                  </div>

                  <div
                    class="mt-10 flex w-full flex-col justify-start border-b"
                  >
                    <div
                      class="mb-4 flex items-center justify-between"
                      v-for="(product, index) in localStorageCart"
                      :key="index"
                    >
                      <div class="relative flex items-center gap-4 pr-10">
                        <NuxtImg width="70" :src="product.image" />
                        <p class="flex-nowrap text-[13px]">
                          {{ product.title }}
                        </p>
                      </div>
                      <p
                        class="w-auto whitespace-nowrap text-[13px] font-bold text-gray-700"
                      >
                        {{ product.quantity }} x {{ product.newPrice }} RSD
                      </p>
                    </div>
                  </div>
                  <div class="mt-6 flex w-full flex-col gap-4 border-b pb-4">
                    <div class="flex w-full justify-between text-sm">
                      <p>Ukupno</p>
                      <p>{{ totalPrice }} RSD</p>
                    </div>
                    <div class="flex w-full justify-between text-sm">
                      <p>Poštarina</p>
                      <p>300 RSD</p>
                    </div>
                  </div>
                  <div class="mt-4 flex w-full justify-between text-sm">
                    <p class="text-lg">Ukupan iznos:</p>
                    <p class="text-lg font-semibold">
                      {{ totalPrice + 300 }} RSD
                    </p>
                  </div>
                  <button
                    @click.prevent="sendPurchaseData"
                    :disabled="purchase == false"
                    aria-label="Posalji"
                    :class="!purchase ? 'brightness-75' : ' brightness-100'"
                    class="focus mt-6 hidden w-full cursor-pointer rounded-full bg-primary py-4 xl:block"
                  >
                    <p
                      class="flex w-full items-center justify-center text-white"
                    >
                      Poruči odmah
                      <span
                        class="icon-[prime--arrow-up-right] ml-[2px] mt-[3px] text-lg"
                      />
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="postMessage != ''"
      class="sm fixed bottom-0 left-0 z-50 w-full p-2 text-white sm:left-auto sm:right-0 sm:w-auto"
    >
      <div
        class="flex w-full items-center justify-between rounded-md bg-black/95 p-3 sm:w-auto"
      >
        <p class="px-2 text-sm">
          {{ postMessage }}
        </p>
        <span
          @click="postMessage = ''"
          class="icon-[prime--times] mt-[2px] cursor-pointer text-lg"
        />
      </div>
    </div>

    <Contact />
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

interface FormData {
  ime: string;
  prezime: string;
  drzava: string;
  adresa: string;
  placanje: string;
  postanskiBroj: string;
  grad: string;
  telefon: string;
  email: string;
}
const formData: FormData = reactive({
  ime: "",
  prezime: "",
  drzava: "Srbija",
  adresa: "",
  placanje: "Po uzeću",
  postanskiBroj: "",
  grad: "",
  telefon: "",
  email: "",
});

const postMessage = ref("");
const isFormValid = computed(() => {
  return (
    formData.ime !== "" &&
    formData.prezime !== "" &&
    formData.drzava !== "" &&
    formData.adresa !== "" &&
    formData.placanje !== "" &&
    formData.postanskiBroj !== "" &&
    formData.grad !== "" &&
    formData.telefon !== "" &&
    formData.email !== ""
  );
});

const sendPurchaseData = async () => {
  if (!isFormValid.value) return;
  try {
    const { data: resData }: { data: any } = await useFetch("/api/send/", {
      method: "post",
      body: JSON.stringify({
        from:
          formData.ime + " " + formData.prezime + " <" + formData.email + ">",
        to: "radestojicicsd@gmail.com",
        subject: "Autodelovi - Porudžbina",
        text:
          "Podaci o kupcu:" +
          "\n" +
          "Ime: " +
          formData.ime +
          "\n" +
          "Prezime: " +
          formData.prezime +
          "\n" +
          "Država: " +
          formData.drzava +
          "\n" +
          "Grad: " +
          formData.grad +
          "\n" +
          "Adresa: " +
          formData.adresa +
          "\n" +
          "Poštanski broj: " +
          formData.postanskiBroj +
          "\n" +
          "Telefon: " +
          formData.telefon +
          "\n" +
          "Email: " +
          formData.email +
          "\n\n" +
          "Porudžbina:\n" +
          localStorageCart.value
            .map(
              (item) =>
                item.title +
                " x " +
                item.quantity +
                " = " +
                item.newPrice +
                " RSD",
            )
            .join("\n") +
          "\n\n" +
          "Ukupno: " +
          totalPrice.value +
          " RSD",
      }),
    });
    if (toRaw(resData.value.error)) {
      displayPostMessage("Došlo je do greške, pokušajte ponovo...");
    } else {
      useRouter().push("/potvrda");
    }
  } catch (error) {
    console.log(error);
  }
};

function displayPostMessage(message: string) {
  postMessage.value = message;
  setTimeout(() => {
    postMessage.value = "";
  }, 1900);
}

const purchase = ref(false);
const checkoutButton = () => {
  if (localStorageCart.value.length > 0 && isFormValid.value) {
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
