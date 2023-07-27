<template>
 <div class="relative z-0 mx-auto mt-12 flex justify-center md:container">
  <div
   class="relative m-auto flex w-96 flex-wrap items-center justify-center gap-8 p-4 md:grid md:w-full md:grid-cols-2 lg:grid lg:grid-cols-3 lg:p-0 lg:px-6"
  >
   <div
    class="flex w-full items-center justify-center gap-4 rounded-lg bg-gray-100 p-6 lg:p-8"
    v-for="(card, index) in infoCards"
    :key="index"
   >
    <div class="flex rounded-full border bg-white p-3 lg:p-1 xl:p-2">
     <span :class="card.class" />
    </div>
    <div class="flex flex-col">
     <p class="text-md font-bold">{{ card.name }}</p>
     <p class="text-sm text-gray-400">{{ card.text }}</p>
    </div>
   </div>
  </div>
 </div>
</template>

<script setup lang="ts">
const infoCards = [
 {
  name: 'Preko 1000 autodelova',
  text: 'od preko 200 razlicitih automobila',
  class: 'i-prime-cog  text-gray-800 text-3xl',
 },
 {
  name: 'Besplatna dostava',
  text: 'za porudzbine preko 5000 dinara',
  class: 'i-prime-truck text-gray-800 text-3xl',
 },
 {
  name: '14-dnevna garancija',
  text: 'povratak sa besplatnom dostavom',
  class: 'i-prime-undo text-gray-800 text-3xl',
 },
];
</script>

<style lang="scss" scoped></style>
