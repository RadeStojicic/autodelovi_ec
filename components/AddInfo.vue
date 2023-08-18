<template>
  <div class="z-0 mx-auto mt-12 flex justify-center px-6 md:container">
    <div
      class="grid w-full grid-cols-1 content-center gap-10 rounded-lg bg-white p-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
    >
      <div
        class="flex w-full items-center justify-center gap-4 rounded-lg py-6 lg:py-6"
        v-for="(card, index) in infoCards"
        :key="index"
      >
        <div class="flex rounded-full bg-white">
          <span :class="card.class" />
        </div>
        <div class="flex flex-col">
          <p class="text-lg font-bold md:text-base">{{ card.name }}</p>
          <p class="text-md text-gray-400 md:text-sm">{{ card.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const infoCards = [
  {
    name: "Preko 1000 autodelova",
    text: "od preko 200 razlicitih automobila",
    class: "icon-[prime--cog]  text-yellow-400 text-5xl ",
  },
  {
    name: "Besplatna dostava",
    text: "za porudzbine preko 5000 dinara",
    class: "icon-[prime--truck] text-yellow-400 text-5xl ",
  },
  {
    name: "14-dnevna garancija",
    text: "povratak sa besplatnom dostavom",
    class: "icon-[prime--sync] text-yellow-400 text-5xl ",
  },
  {
    name: "14-dnevna garancija",
    text: "povratak sa besplatnom dostavom",
    class: "icon-[prime--credit-card] text-yellow-400 text-5xl ",
  },
];
</script>

<style lang="scss" scoped></style>
