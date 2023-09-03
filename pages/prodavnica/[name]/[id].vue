<template>
  <div
    class="z-0 mx-auto flex flex-col justify-center px-4 pb-10 md:container lg:py-14"
  >
    <div
      class="grid h-auto w-full grid-cols-1 content-center gap-10 rounded-lg py-10 sm:grid-cols-1 lg:grid-cols-2 lg:px-10"
    >
      <div class="order-2 flex w-full flex-col gap-4 lg:order-1 lg:flex-row">
        <p class="flex items-center text-gray-500 lg:hidden">
          {{ card.main_category }}
          <span
            class="icon-[prime--chevron-right] mt-[3px] text-lg text-gray-500"
          />{{ card.category }}
        </p>
        <div
          class="order-2 grid h-full w-full grid-cols-4 gap-1 p-1 py-2 lg:order-1 lg:flex lg:w-32 lg:flex-col lg:py-0"
        >
          <NuxtImg
            format="webp"
            sizes="lg:128px"
            v-for="(other_image, index) in card.other_images"
            :key="index"
            :src="other_image"
            alt="product_images"
            @mouseover="changeImage(other_image)"
            class="cursor-pointer sm:p-1"
            :class="
              hero_image === other_image
                ? 'border-b-2 border-secondary sm:border-b-0 sm:border-l-2'
                : ''
            "
          />
        </div>
        <div class="flex w-full lg:order-2">
          <NuxtImg
            width="100%"
            height="350"
            format="webp"
            class="h-72 w-full object-contain sm:h-72"
            :src="hero_image"
            alt="product_image"
          />
        </div>
      </div>
      <div class="order-2 w-full lg:order-2 lg:pl-10">
        <div class="w-full">
          <div class="w-full border-b pb-3">
            <p class="mb-4 hidden items-center text-gray-500 lg:flex">
              <span>Prodavnica </span
              ><span
                class="icon-[prime--chevron-right] mt-[3px] text-lg text-gray-500"
              />
              {{ card.main_category }}
              <span
                class="icon-[prime--chevron-right] mt-[3px] text-lg text-gray-500"
              />{{ card.category }}
            </p>
            <h1 class="text-3xl font-semibold">{{ card.title }}</h1>
            <p class="py-1">
              ({{ card.mark }}) ({{ card.model }}) ({{ card.year }})
            </p>
          </div>
          <div class="my-3 w-full">
            <p>{{ card.aboutProduct }}</p>
          </div>
          <div class="mt-6 flex w-full items-center gap-3">
            <p class="ml-[-2px] text-2xl font-extrabold text-gray-800">
              {{ card.newPrice }} RSD
            </p>
            <p
              v-if="card.oldPrice"
              class="text-md text-gray-400 line-through decoration-1"
            >
              {{ card.oldPrice }} RSD
            </p>
          </div>
          <div class="mt-8 flex w-full flex-col gap-5">
            <button
              @click="insertCard(card.id)"
              class="flex w-full justify-center rounded-full bg-yellow-400 p-4 font-normal"
              aria-label="Kupi odmah"
            >
              Kupi odmah
            </button>
            <button
              aria-label="Dodaj u listu zelja"
              @click="toggleWishList(card)"
              class="flex w-full items-center justify-center gap-1 rounded-full border border-gray-300 p-4 font-normal"
            >
              Dodaj u listu želja<span
                class="icon-[prime--heart] mt-[3px] text-lg"
              />
            </button>
          </div>
          <div class="mt-6 text-2xl text-gray-600">
            <div class="flex items-center gap-2">
              <NuxtLink aria-label="Instagram" to="https://instagram.com">
                <div class="flex rounded-full border border-gray-300 p-1">
                  <span class="icon-[prime--instagram]" />
                </div>
              </NuxtLink>
              <NuxtLink aria-label="Facebook" to="https://facebook.com">
                <div class="flex rounded-full border border-gray-300 p-1">
                  <span class="icon-[prime--facebook]" />
                </div>
              </NuxtLink>
              <NuxtLink aria-label="Twitter" to="https://twitter.com">
                <div class="flex rounded-full border border-gray-300 p-1">
                  <span class="icon-[prime--twitter]" />
                </div>
              </NuxtLink>
              <NuxtLink aria-label="LinkedIn" to="https://linkedin.com">
                <div class="flex rounded-full border border-gray-300 p-1">
                  <span class="icon-[prime--linkedin]" />
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-20 mt-10 w-full lg:px-10">
      <div class="flex w-full items-center gap-8 border-b pb-4">
        <button
          aria-label="O proizvodu"
          @click="toggleDescription"
          :class="showDescription === true ? 'text-black ' : ' text-gray-400'"
          class="text-lg"
        >
          O proizvodu
        </button>
        <button
          aria-label="Dodatne informacije"
          @click="toggleAdditionalInfo"
          :class="showAdditionInfo === true ? 'text-black ' : ' text-gray-400'"
          class="text-lg"
        >
          Dodatne informacije
        </button>
      </div>
      <div class="text-md mt-4 w-full">
        <p v-if="showDescription" class="w-full py-4 leading-7">
          {{ card.description }}
        </p>
        <p v-if="showAdditionInfo" class="w-full py-4 leading-7">
          {{ card.additionalInfo }}
        </p>
      </div>
    </div>
    <PopularProducts class="lg:px-10" />
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from "../../../store/product";
import { CarPart } from "../../../types/cardType";
import { storeToRefs } from "pinia";

const { insertCard } = addToCart();
const { toggleWishList } = addToWishList();
const { cards } = storeToRefs(useProductStore());
const id = useRoute().params.id;
const card = <CarPart>cards.value.find((card: CarPart) => card.id === id);

const hero_image = ref(card.image);
const changeImage = (image: string) => {
  hero_image.value = image;
};

const showDescription = ref(true);
const showAdditionInfo = ref(false);

const toggleDescription = () => {
  showDescription.value = true;
  showAdditionInfo.value = false;
};

const toggleAdditionalInfo = () => {
  showDescription.value = false;
  showAdditionInfo.value = true;
};

definePageMeta({
  layout: "page-layout",
});
</script>

<style scoped></style>
