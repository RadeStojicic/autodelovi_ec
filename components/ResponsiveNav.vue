<template>
  <div ref="sidenavRef">
    <nav
      v-if="toggleSideNav"
      class="scrollbar absolute right-0 top-[68px] z-50 h-screen max-h-screen w-5/6 select-none overflow-y-auto border-r border-t border-gray-200 bg-white pb-28 lg:hidden"
    >
      <ul class="relative m-0 mt-4 list-none">
        <li @click="openSidenav" class="relative">
          <NuxtLink
            to="/"
            class="flex h-12 cursor-pointer items-center px-6 py-4 text-gray-600"
          >
            <span>Početna</span>
          </NuxtLink>
        </li>
        <li class="relative">
          <NuxtLink
            @click="showMore = !showMore"
            class="flex h-12 cursor-pointer items-center px-6 py-4 text-gray-600"
            to="/prodavnica"
          >
            <span @click="openSidenav">Prodavnica</span>
            <span class="absolute right-0 ml-auto mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </NuxtLink>
          <ul v-if="showMore" class="relative m-0 list-none p-0">
            <li
              @click="openSidenav"
              v-for="(link, index) in navLinks"
              :key="index"
              class="relative"
            >
              <NuxtLink
                class="flex h-6 cursor-pointer items-center py-6 pl-8 pr-6 text-gray-600"
                v-for="(sublink, subIndex) in link.categories"
                :key="subIndex"
                :to="sublink.to"
                >{{ sublink.title }}
              </NuxtLink>
            </li>
          </ul>
        </li>
        <li @click="openSidenav" class="relative">
          <NuxtLink
            to="/novosti"
            class="flex h-12 cursor-pointer items-center px-6 py-4 text-gray-600"
          >
            <span>Novosti</span>
          </NuxtLink>
        </li>
        <li @click="openSidenav" class="relative">
          <NuxtLink
            to="/kontakt"
            class="flex h-12 cursor-pointer items-center px-6 py-4 text-gray-600"
          >
            <span>Kontakt</span>
          </NuxtLink>
        </li>
      </ul>
      <hr class="mt-4" />
      <div
        class="mt-6 flex flex-col items-start justify-center gap-1 px-4 py-2"
      >
        <button
          class="h-12 w-full rounded-lg bg-secondary font-semibold text-white"
        >
          Kontakt
        </button>
        <p class="mt-5 flex w-full items-center gap-1 py-2 text-gray-900">
          <span
            class="icon-[prime--box] mt-[3px] text-xl text-yellow-500"
          />Politika povratka
        </p>
        <p class="flex w-full items-center gap-1 py-2 text-gray-900">
          <span
            class="icon-[prime--question-circle] mt-[3px] text-xl text-yellow-500"
          />Pomoć
        </p>
        <p class="flex w-full items-center gap-1 py-2 text-gray-900">
          <span
            class="icon-[prime--heart] mt-[3px] text-xl text-yellow-500"
          />Omiljeni proizvodi
        </p>
      </div>
    </nav>

    <button
      @click="openSidenav"
      class="ml-1 flex w-full items-center justify-center lg:hidden"
    >
      <span class="icon-[prime--bars] text-[2.5em] text-white" />
    </button>
  </div>
  <div
    v-if="toggleSideNav"
    class="absolute left-0 top-[68px] z-10 h-screen w-full bg-black/50"
  ></div>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";

const toggleSideNav = ref(false);
const showMore = ref(false);
const sidenavRef = ref(null);
onClickOutside(sidenavRef, () => {
  document.body.style.overflow = "";
  toggleSideNav.value = false;
});

const openSidenav = () => {
  toggleSideNav.value = !toggleSideNav.value;
  document.body.style.overflow = toggleSideNav.value ? "hidden" : "";
};
defineProps({
  navLinks: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped></style>
