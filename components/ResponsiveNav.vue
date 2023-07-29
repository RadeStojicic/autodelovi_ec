<template>
  <!-- Sidenav -->
  <nav
    id="sidenav-6"
    class="absolute left-0 top-0 z-[1035] h-screen w-60 -translate-x-full bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
    data-te-sidenav-init
    data-te-sidenav-hidden="true"
    data-te-sidenav-accordion="true"
    data-te-sidenav-color="warning"
    data-te-sidenav-width="300"
    data-te-sidenav-transition-duration="225"
  >
    <ul class="relative m-0 list-none px-[0.2rem]" data-te-sidenav-menu-ref>
      <h1 class="px-6 py-4">Logo</h1>
      <li class="relative">
        <NuxtLink
          to="/pocetna"
          class="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
          data-te-sidenav-link-ref
        >
          <span>Početna</span>
        </NuxtLink>
      </li>
      <li class="relative">
        <NuxtLink
          class="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
          data-te-sidenav-link-ref
        >
          <span>Kategorije</span>
          <span
            class="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300"
            data-te-sidenav-rotate-icon-ref
          >
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
        <ul
          class="show !visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block"
          data-te-sidenav-collapse-ref
        >
          <li v-for="(link, index) in navLinks" :key="index" class="relative">
            <NuxtLink
              class="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[2rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
              data-te-sidenav-link-ref
              v-for="(sublink, subIndex) in link.categories"
              :key="subIndex"
              :to="sublink.to"
              >{{ sublink.title }}
            </NuxtLink>
          </li>
        </ul>
      </li>
      <li class="relative">
        <NuxtLink
          to="/novosti"
          class="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
          data-te-sidenav-link-ref
        >
          <span>Novosti</span>
        </NuxtLink>
      </li>
      <li class="relative">
        <NuxtLink
          to="/isporuka"
          class="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
          data-te-sidenav-link-ref
        >
          <span>Isporuka</span>
        </NuxtLink>
      </li>
    </ul>
    <hr class="my-4" />
    <div class="flex flex-col items-start justify-center gap-1 px-4 py-2">
      <button
        class="h-12 w-full rounded-lg bg-yellow-400 font-semibold text-white"
      >
        Kontakt
      </button>
      <p class="mt-5 flex w-full items-center gap-1 py-2 text-sm text-gray-900">
        <span class="icon-[prime--box] text-lg text-yellow-500" />Politika
        povratka
      </p>
      <p class="flex w-full items-center gap-1 py-2 text-sm text-gray-900">
        <span
          class="icon-[prime--question-circle] text-lg text-yellow-500"
        />Pomoć
      </p>
      <p class="flex w-full items-center gap-1 py-2 text-sm text-gray-900">
        <span class="icon-[prime--heart] text-lg text-yellow-500" />Omiljeni
        proizvodi
      </p>
    </div>
  </nav>
  <!-- Sidenav -->
  <!-- Toggler -->
  <button
    class="z-50 bg-none text-xs font-medium leading-tight text-white transition duration-150 ease-in-out focus:outline-none md:hidden"
    data-te-sidenav-toggle-ref
    data-te-target="#sidenav-6"
    aria-controls="#sidenav-6"
    aria-haspopup="true"
  >
    <span class="block [&>svg]:h-8 [&>svg]:w-8 [&>svg]:text-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="h-5 w-5"
      >
        <path
          fill-rule="evenodd"
          d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
          clip-rule="evenodd"
        />
      </svg>
    </span>
  </button>
  <!-- Toggler -->
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { Sidenav, initTE } from "tw-elements";

onMounted(() => {
  initTE({ Sidenav });
});

defineProps({
  navLinks: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped></style>
