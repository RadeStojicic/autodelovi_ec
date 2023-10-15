<template>
  <div class="absolute top-0 z-[50] w-full border-b border-gray-200 bg-white">
    <div class="mx-auto max-w-[1200px] px-6 py-5">
      <div class="flex items-center gap-8">
        <NuxtLink class="font-semibold" to="/admin">AutoParts.</NuxtLink>
        <ul class="flex gap-4 text-sm">
          <li><AdminLink to="/admin/proizvodi">Proizvodi</AdminLink></li>
          <li><AdminLink to="/admin/kategorije">Kategorije</AdminLink></li>
          <li><AdminLink to="/admin/vozila">Vozila</AdminLink></li>
          <li><AdminLink to="/admin/tipovi">Tipovi proizvoda</AdminLink></li>
        </ul>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
