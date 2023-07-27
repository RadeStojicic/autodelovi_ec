<template>
 <div class="relative z-0 justify-center">
  <main class="flex w-full items-center justify-center bg-gray-200">
   <div class="w-full">
    <div class="flex w-full items-center justify-center">
     <img
      src="/images/hero_img.jpg"
      class="relative h-108 w-screen object-cover brightness-50 sm:h-104 lg:object-cover"
      alt=""
     />
     <div class="absolute top-12 w-full md:top-24">
      <form class="mx-auto p-4 md:container md:p-8" action="">
       <div class="mb-16 flex flex-col items-center justify-center">
        <h1
         class="w-full text-center text-4xl font-bold text-white lg:w-2/3 lg:text-5xl"
        >
         Unesite detalje vašeg vozila
        </h1>
        <p class="mt-4 text-center text-lg text-white sm:text-left">
         Pronađite savršene autodelove u nekoliko klikova
        </p>
       </div>

       <div
        class="flex flex-col items-center justify-center gap-4 md:w-full md:flex-row"
       >
        <ClientOnly v-for="(selection, index) in multiSel" :key="index">
         <multi-selection
          :placeholderName="selection.placeholdeName"
          :selection="selection.options"
          :multipleSel="selection.multipleSel"
         />
        </ClientOnly>

        <button
         class="mt-4 flex w-52 items-center justify-center gap-1 rounded bg-yellow-500 p-3 text-gray-900 md:mt-0 md:w-40"
        >
         <span class="i-prime-search text-lg" />
         Pretraži
        </button>
       </div>
      </form>
     </div>
    </div>
   </div>
  </main>
 </div>
</template>

<script setup lang="ts">
const multiSel = [
 {
  placeholdeName: 'Marka',
  multipleSel: false,
  options: [
   { value: '1', text: 'BMW' },
   { value: '2', text: 'Audi' },
   { value: '3', text: 'Mercedes' },
   { value: '4', text: 'Polo' },
   { value: '5', text: 'Ford' },
  ],
 },
 {
  placeholdeName: 'Model',
  multipleSel: true,
  options: [
   { value: '1', text: 'X4' },
   { value: '2', text: 'i8' },
   { value: '3', text: 'M4' },
   { value: '4', text: 'i4' },
   { value: '5', text: 'X6' },
  ],
 },
 {
  placeholdeName: 'Godište',
  multipleSel: true,
  options: [
   { value: '1', text: '2003' },
   { value: '2', text: '2004' },
   { value: '3', text: '2005' },
   { value: '4', text: '2006' },
   { value: '5', text: '2007' },
  ],
 },
];
</script>

<style lang="scss" scoped></style>
