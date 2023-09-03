<template>
  <div ref="sidenavRef">
    <transition name="slide" mode="out-in">
      <nav
        v-if="toggleSideNav"
        class="scrollbar fixed right-0 top-[0] z-50 h-full w-[85%] select-none overflow-y-auto border-r border-t border-gray-200 bg-white sm:w-4/5 lg:hidden"
      >
        <div class="relative h-auto">
          <div class="mx-5 flex items-start justify-between border-b pb-4 pt-5">
            <h1 class="text-2xl font-[700]">Meni</h1>
            <span
              @click="openSidenav"
              class="cursor pointer icon-[prime--times] relative left-3 cursor-pointer text-[42px] hover:bg-gray-700"
            />
          </div>
          <ul class="relative m-0 mt-4 list-none">
            <li @click="openSidenav" class="relative">
              <NuxtLink
                aria-label="Pocetna"
                to="/"
                class="flex h-12 cursor-pointer items-center px-5 py-4 text-gray-600"
              >
                <span>Početna</span>
              </NuxtLink>
            </li>
            <li class="relative">
              <div
                class="flex h-12 cursor-pointer items-center justify-between px-5 py-4 text-gray-600"
              >
                <NuxtLink @click="openSidenav" to="/prodavnica"
                  >Prodavnica</NuxtLink
                >
                <div
                  @click="showMore = !showMore"
                  class="relative left-3 px-2 py-1"
                >
                  <span
                    :class="[
                      showMore
                        ? 'icon-[prime--chevron-up]'
                        : 'icon-[prime--chevron-down]',
                      !showMore ? 'icon-[prime--chevron-down]' : '',
                    ]"
                    class="text-3xl"
                  />
                </div>
              </div>
              <ul v-if="showMore" class="relative m-0 list-none p-0">
                <li
                  @click="openSidenav"
                  v-for="(link, index) in navLinks"
                  :key="index"
                  class="relative"
                >
                  <NuxtLink
                    aria-label="Link"
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
                aria-label="Novosti"
                to="/novosti"
                class="flex h-12 cursor-pointer items-center px-5 py-4 text-gray-600"
              >
                <span>Novosti</span>
              </NuxtLink>
            </li>
            <li @click="openSidenav" class="relative">
              <NuxtLink
                aria-label="Kontakt"
                to="/kontakt"
                class="flex h-12 cursor-pointer items-center px-5 py-4 text-gray-600"
              >
                <span>Kontakt</span>
              </NuxtLink>
            </li>
          </ul>
          <hr class="mx-6 mt-4" />
          <div
            class="mt-6 flex flex-col items-start justify-center gap-1 px-4 py-2"
          >
            <div class="flex w-full flex-col gap-2">
              <NuxtLink
                to="/lista-zelja"
                aria-label="Lista zelja"
                class="flex h-12 w-full items-center justify-center rounded-lg bg-primary font-semibold text-white"
              >
                Lista želja
                <span
                  class="icon-[prime--heart] ml-[1px] mt-1 flex items-center justify-center text-lg"
                />
              </NuxtLink>
              <NuxtLink
                to="/kontakt"
                aria-label="Kontakt"
                class="flex h-12 w-full items-center justify-center rounded-lg border-[1.5px] border-primary bg-transparent font-semibold text-primary"
              >
                Kontakt
              </NuxtLink>
            </div>
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
        </div>
      </nav>
    </transition>
    <button
      aria-label="Navbar"
      @click="openSidenav"
      class="ml-1 flex w-full items-center justify-center lg:hidden"
    >
      <span class="icon-[prime--bars] text-[2.5em] text-white" />
    </button>
  </div>

  <div
    v-if="toggleSideNav"
    @click="openSidenav"
    class="fixed left-0 top-0 z-10 h-full w-full bg-black/40 lg:hidden"
  ></div>
</template>

<script setup lang="ts">
import { toggleSideNav } from "../store/constants";
const showMore = ref(false);

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

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
