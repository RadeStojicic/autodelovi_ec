<template>
  <div ref="sidenavRef">
    <transition name="slide" mode="out-in">
      <nav
        v-if="toggleSideNav"
        class="scrollbar fixed right-0 top-[0] z-50 h-full w-auto select-none overflow-y-auto border-r border-t border-gray-200 bg-white lg:hidden"
      >
        <div class="relative h-auto">
          <div class="mx-5 flex items-start justify-end border-b pt-2">
            <Icon
              class="relative bottom-1 left-3 cursor-pointer text-[42px] hover:text-gray-700"
              @click="openSidenav"
              name="prime:times"
            />
          </div>
          <div class="mx-5 flex flex-col border-b">
            <div class="flex w-full items-center justify-between pt-3">
              <h1 class="text-lg font-semibold text-gray-900/90">Proizvodi</h1>
              <NuxtLink
                @click="openSidenav"
                to="/prodavnica"
                class="flex items-center text-sm font-semibold text-gray-900/90"
              >
                Vidi sve
                <Icon
                  class="text-xl text-gray-900/80"
                  name="prime:chevron-right"
                />
              </NuxtLink>
            </div>
            <div class="flex justify-center gap-4 py-8">
              <NuxtLink
                @click="openSidenav"
                aria-label="Popularni"
                to="/prodavnica/popularni"
                class="flex w-full flex-col items-center justify-center text-center font-semibold text-gray-900/90"
                ><NuxtImg
                  width="85"
                  quality="85"
                  src="/test.jpg"
                  class="rounded-full bg-gray-200"
                />Popularni
              </NuxtLink>
              <NuxtLink
                @click="openSidenav"
                aria-label="Preporuceni"
                to="/prodavnica/preporuceni"
                class="flex w-full flex-col items-center justify-center text-center font-semibold text-gray-900/90"
                ><NuxtImg
                  width="85"
                  quality="85"
                  src="/test.jpg"
                  class="rounded-full bg-gray-200"
                />Preporučeni</NuxtLink
              >
              <NuxtLink
                @click="openSidenav"
                aria-label="Novi"
                to="/prodavnica/novi"
                class="flex w-full flex-col items-center justify-center text-center font-semibold text-gray-900/90"
                ><NuxtImg
                  width="85"
                  quality="85"
                  src="/test.jpg"
                  class="rounded-full bg-gray-200"
                />Novi</NuxtLink
              >
            </div>
          </div>
          <ul class="relative m-0 mt-4 list-none">
            <li @click="openSidenav" class="relative">
              <NuxtLink
                aria-label="Pocetna"
                to="/"
                class="flex h-12 cursor-pointer items-center gap-1 px-5 py-4 text-gray-600"
              >
                <span>Početna</span>
              </NuxtLink>
            </li>
            <li class="relative">
              <div
                class="flex h-12 cursor-pointer items-center justify-between px-5 py-4 text-gray-600"
              >
                <NuxtLink
                  class="flex items-center gap-1"
                  @click="openSidenav"
                  to="/prodavnica"
                >
                  <span>Prodavnica</span></NuxtLink
                >
                <div
                  @click="showMore = !showMore"
                  class="relative left-3 px-2 py-1"
                >
                  <Icon
                    class="text-3xl"
                    v-if="showMore"
                    name="prime:chevron-up"
                  />
                  <Icon
                    class="text-3xl"
                    v-if="!showMore"
                    name="prime:chevron-down"
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
                    class="flex h-6 cursor-pointer items-center py-6 pl-11 pr-6 text-gray-600"
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
                class="flex h-12 cursor-pointer items-center gap-1 px-5 py-4 text-gray-600"
              >
                <span>Novosti</span>
              </NuxtLink>
            </li>
            <li @click="openSidenav" class="relative">
              <NuxtLink
                aria-label="Kontakt"
                to="/kontakt"
                class="flex h-12 cursor-pointer items-center gap-1 px-5 py-4 text-gray-600"
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
                @click="openSidenav"
                to="/lista-zelja"
                aria-label="Lista zelja"
                class="flex h-12 w-full items-center justify-center rounded-lg bg-primary font-semibold text-white"
              >
                Lista želja
                <Icon
                  class="ml-[1px] mt-[3px] flex items-center justify-center text-lg"
                  name="prime:heart"
                />
              </NuxtLink>
              <NuxtLink
                to="/kontakt"
                aria-label="Kontakt"
                class="flex h-12 w-full items-center justify-center rounded-lg border-[1px] border-black/30 bg-transparent font-semibold text-primary"
              >
                Kontakt
              </NuxtLink>
            </div>
            <p
              class="mt-3 flex w-full items-center gap-1 pb-1 pt-2 text-gray-700"
            >
              <Icon
                class="mt-[3px] text-xl text-gray-700"
                name="prime:envelope"
              />
              autodeloviofficial@gmail.com
            </p>
            <p class="flex w-full items-center gap-1 pb-2 text-gray-700">
              <Icon class="mt-[3px] text-xl text-gray-700" name="prime:phone" />
              +381 642732014
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
      <Icon class="text-[2.5em] text-white" name="prime:bars" />
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
