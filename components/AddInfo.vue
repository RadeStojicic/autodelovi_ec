<template>
  <div class="md:container mx-auto relative mt-12 z-0 flex justify-center">
    <div
      class="w-96 p-4 flex flex-wrap justify-center items-center relative m-auto gap-8 md:grid md:grid-cols-2 md:w-full lg:grid lg:grid-cols-3 lg:px-6 lg:p-0"
    >
      <div
        class="flex w-full justify-center items-center gap-4 p-6 lg:p-8 rounded-lg bg-gray-100"
        v-for="(card, index) in infoCards"
        :key="index"
      >
        <div class="border bg-white rounded-full flex p-3 lg:p-1 xl:p-2">
          <span :class="card.class" />
        </div>
        <div class="flex flex-col">
          <p class="font-bold text-md">{{ card.name }}</p>
          <p class="text-sm text-gray-400">{{ card.text }}</p>
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
    class: "i-prime-cog  text-gray-800 text-3xl",
  },
  {
    name: "Besplatna dostava",
    text: "za porudzbine preko 5000 dinara",
    class: "i-prime-truck text-gray-800 text-3xl",
  },
  {
    name: "14-dnevna garancija",
    text: "povratak sa besplatnom dostavom",
    class: "i-prime-undo text-gray-800 text-3xl",
  },
];
</script>

<style lang="scss" scoped>
</style>