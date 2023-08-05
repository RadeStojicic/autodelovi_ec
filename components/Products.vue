<template>
  <div class="z-0 mt-12 justify-center bg-gray-100 pb-14 pt-8">
    <div class="mx-auto w-full p-4 md:container lg:p-6">
      <div
        class="flex flex-col justify-between gap-4 border-b border-gray-200 pb-4 sm:flex-row sm:gap-0 sm:pb-3"
      >
        <h1 class="text-2xl font-bold">Proizvodi u ponudi</h1>
        <div class="flex items-center gap-2 pb-1 pt-3 sm:pb-0 sm:pt-0">
          <button
            @click="handleFilter('popular')"
            class="rounded-lg px-6 py-3 text-sm text-gray-900"
            :class="
              selectedType === 'popular' ? 'bg-yellow-400 ' : ' bg-gray-50'
            "
          >
            Popularni
          </button>
          <button
            @click="handleFilter('feautured')"
            class="rounded-lg border border-gray-200 bg-gray-50 px-6 py-3 text-sm transition duration-300 hover:bg-yellow-400"
            :class="
              selectedType === 'feautured' ? 'bg-yellow-400 ' : ' bg-gray-50'
            "
          >
            Preporučeni
          </button>
          <button
            @click="handleFilter('new')"
            class="rounded-lg border border-gray-200 bg-gray-50 px-6 py-3 text-sm transition duration-300 hover:bg-yellow-400"
            :class="selectedType === 'new' ? 'bg-yellow-400 ' : ' bg-gray-50'"
          >
            Novi
          </button>
        </div>
      </div>
      <div
        class="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 2xl:gap-8"
      >
        <div
          class="relative w-full rounded-lg border border-gray-200 bg-white"
          v-for="(card, index) in filteredCards"
          :key="index"
        >
          <div class="flex items-center justify-center rounded-lg p-12">
            <img class="w-40" :src="card.image" alt="product_image" />
          </div>
          <div
            class="absolute top-0 flex w-full items-center justify-between p-4"
          >
            <span
              v-if="card.discount"
              class="rounded bg-black px-2 py-1 text-xs font-bold text-white"
              >{{ card.discount }}%</span
            >
            <div
              class="absolute right-2 top-2 flex cursor-pointer items-center justify-center rounded-full p-2 transition duration-300 hover:bg-gray-100"
            >
              <span class="icon-[prime--heart] p-3 text-gray-900" />
            </div>
          </div>

          <div class="mt-4 flex flex-col items-start justify-start px-4 pb-4">
            <p class="mt-1 text-xs text-gray-400">{{ card.category }}</p>
            <h1 class="text-sm font-bold">
              {{ card.title }}
            </h1>
            <div class="mt-4 flex w-full items-center justify-between">
              <div class="flex flex-col items-start">
                <p
                  v-if="card.oldPrice"
                  class="text-xs text-gray-400 line-through decoration-1"
                >
                  {{ card.oldPrice }} RSD
                </p>
                <p class="ml-[-2px] text-2xl font-bold text-gray-800">
                  {{ card.newPrice }} RSD
                </p>
                <p
                  v-if="card.oldPrice"
                  class="mt-1 text-xs font-semibold text-red-600"
                >
                  Ušteda: {{ card.oldPrice - card.newPrice }} RSD
                </p>
              </div>
              <div
                class="flex items-center justify-center rounded-full bg-yellow-400 p-2"
              >
                <span class="icon-[prime--shopping-cart] text-3xl text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface CarPart {
  image: string;
  category: string;
  title: string;
  oldPrice: number;
  newPrice: number;
  mark: string;
  model: string;
  year: string;
  type: string;
  discount: number;
}
const cards: CarPart[] = [
  {
    image: "/images/prod1.jpg",
    category: "Motorno ulje",
    title: "MOBIL - 150866 - ULJE ZA MOTOR (HEMIJSKI PROIZVODI)",
    oldPrice: 2199,
    newPrice: 1599,
    mark: "BMW",
    model: "X4",
    year: "2005",
    type: "popular",
    discount: 15,
  },
  {
    image: "/images/prod2.jpg",
    category: "Motorno ulje",
    title: "MOBIL - 150866 - ULJE ZA MOTOR (HEMIJSKI PROIZVODI)",
    oldPrice: 2199,
    newPrice: 1599,
    mark: "Audi",
    model: "Q7",
    year: "2008",
    type: "popular",
    discount: 0,
  },
  {
    image: "/images/prod3.jpg",
    category: "Motorno ulje",
    title: "MOBIL - 150866 - ULJE ZA MOTOR (HEMIJSKI PROIZVODI)",
    oldPrice: 2199,
    newPrice: 1599,
    mark: "BMW",
    model: "X4",
    year: "2005",
    type: "popular",
    discount: 20,
  },
  {
    image: "/images/prod4.jpg",
    category: "Motorno ulje",
    title: "MOBIL - 150866 - ULJE ZA MOTOR (HEMIJSKI PROIZVODI)",
    oldPrice: 2199,
    newPrice: 1599,
    mark: "Audi",
    model: "Q7",
    year: "2008",
    type: "popular",
    discount: 0,
  },
  {
    image: "/images/prod2.jpg",
    category: "Motorno ulje",
    title: "MOBIL - 150866 - ULJE ZA MOTOR (HEMIJSKI PROIZVODI)",
    oldPrice: 2199,
    newPrice: 1599,
    mark: "BMW",
    model: "X4",
    year: "2005",
    type: "feautured",
    discount: 15,
  },
  {
    image: "/images/prod1.jpg",
    category: "Motorno ulje",
    title: "MOBIL - 150866 - ULJE ZA MOTOR (HEMIJSKI PROIZVODI)",
    oldPrice: 2199,
    newPrice: 1599,
    mark: "Audi",
    model: "Q7",
    year: "2008",
    type: "new",
    discount: 0,
  },
  {
    image: "/images/prod4.jpg",
    category: "Motorno ulje",
    title: "MOBIL - 150866 - ULJE ZA MOTOR (HEMIJSKI PROIZVODI)",
    oldPrice: 2199,
    newPrice: 1599,
    mark: "BMW",
    model: "X4",
    year: "2005",
    type: "new",
    discount: 0,
  },
  {
    image: "/images/prod3.jpg",
    category: "Motorno ulje",
    title: "MOBIL - 150866 - ULJE ZA MOTOR (HEMIJSKI PROIZVODI)",
    oldPrice: 0,
    newPrice: 1599,
    mark: "Audi",
    model: "Q7",
    year: "2008",
    type: "feautured",
    discount: 0,
  },
];

const selectedType = ref("popular");

const handleFilter = (type: string) => {
  selectedType.value = type;
};

const filteredCards = computed(() => {
  return cards.filter((card) => card.type === selectedType.value);
});
</script>

<style lang="scss" scoped></style>
