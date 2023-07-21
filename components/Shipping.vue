<template>
  <div class="relative mt-12 z-0 w-screen flex justify-center">
    <div
      class="max-w-7xl w-full p-4 flex justify-center items-center relative m-auto gap-8 lg:mx-14 lg:p-0 lg:max-w-screen-2xl"
    >
      <div
        class="flex w-full justify-center items-center gap-4 bg-gray-100 p-6 lg:p-8 rounded-lg"
        v-for="(card, index) in cards"
        :key="index"
      >
        <div class="border bg-red-600 rounded-full flex p-3">
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