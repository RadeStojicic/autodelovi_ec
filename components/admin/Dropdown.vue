<template>
  <div>
    <p v-if="placeholderName" class="p-1 font-medium">
      {{ placeholderName }}
    </p>
    <div
      ref="dropdownRef"
      class="relative w-full select-none rounded-md border sm:w-full"
    >
      <div
        @click="showOptions = !showOptions && !disabledInput"
        class="relative flex w-full cursor-pointer items-center justify-between rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-sky-200"
        :class="{ 'brightness-90': disabledInput }"
      >
        <input
          class="h-full w-4/5 cursor-pointer rounded-md p-[.9rem] focus:outline-none sm:p-2"
          :value="model"
          type="text"
          readonly="true"
        />

        <Icon
          :class="{
            'text-blue-500': showOptions,
            'text-gray-600': !showOptions,
          }"
          class="absolute right-2 text-2xl"
          name="prime:chevron-down"
        />
      </div>
      <div
        v-if="showOptions"
        class="absolute z-50 mt-[.5px] w-full bg-white shadow transition duration-200"
      >
        <div class="scrollbar max-h-48 w-full overflow-y-auto">
          <div class="flex w-full flex-col bg-white">
            <div
              v-for="(option, index) in dropdownOptions"
              @click="toggleOption(index)"
              :key="index"
              class="justify-left flex h-10 cursor-pointer items-center gap-2 px-3 py-6 hover:bg-gray-100"
            >
              <span>{{ option }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const showOptions = ref(false);
const dropdownRef = ref(null);

onClickOutside(dropdownRef, () => (showOptions.value = false));

const props = defineProps<{
  placeholderName: string;
  dropdownOptions: any;
}>();

const model = defineModel<string>("model");

const toggleOption = (index: number) => {
  model.value = props.dropdownOptions[index];
  showOptions.value = false;
};
</script>

<style scoped></style>
