<template>
  <div class="container mx-auto relative mt-12 z-0 flex justify-center">
    <div
      class="w-2/3 p-4 flex flex-wrap justify-center items-center relative m-auto gap-8 lg:flex-nowrap lg:w-full lg:px-6 lg:p-0 lg:max-w-screen-2xl"
    >
      <div
        class="flex w-full justify-center items-center gap-4 p-6 lg:p-8 rounded-lg"
        v-for="(card, index) in cards"
        :key="index"
      >
        <div class="border bg-primary rounded-full flex p-3">
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

<script lang="ts" setup>
const cards = [
  {
    name: "Preko 1000 autodelova",
    text: "od preko 200 razlicitih automobila",
    class: "i-prime-cog  text-white text-2xl",
  },
  {
    name: "Besplatna dostava",
    text: "za porudzbine preko 5000 dinara",
    class: "i-prime-truck text-white text-2xl",
  },
  {
    name: "14-dnevna garancija",
    text: "povratak sa besplatnom dostavom",
    class: "i-prime-undo text-white text-2xl",
  },
];
</script>

<style lang="scss" scoped>
</style>