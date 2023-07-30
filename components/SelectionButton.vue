<template>
  <div ref="dropdownRef" class="relative z-50 w-72 select-none rounded-sm">
    <div
      @click="showOptions = !showOptions"
      class="relative flex w-full cursor-pointer items-center justify-between rounded-sm bg-white focus:outline-none focus:ring-1 focus:ring-sky-200"
    >
      <input
        class="h-full w-4/5 cursor-pointer bg-white p-3 focus:outline-none"
        :value="selectedValue"
        :placeholder="placeholderName"
        type="text"
        readonly="true"
      />
      <span
        class="icon-[prime--chevron-down] absolute right-0 text-3xl"
        :class="{ 'bg-blue-500': showOptions, 'bg-gray-600': !showOptions }"
      />
    </div>
    <div
      v-if="showOptions"
      class="absolute mt-1 w-full bg-white py-2 shadow-[0_2px_5px_0_rgba(0,0,0,0.16),_0_2px_10px_0_rgba(0,0,0,0.12)] transition duration-200"
    >
      <div class="flex w-full items-center justify-center p-2">
        <input
          class="w-full rounded border border-solid border-gray-300 px-3 py-2 caret-pink-500 focus:outline-none focus:ring-1 focus:ring-blue-600"
          placeholder="Pretraži..."
          type="search"
          v-model="searchText"
        />
      </div>

      <div class="scrollbar max-h-48 w-full overflow-y-auto">
        <div class="bg-whiteP flex w-full flex-col">
          <div
            v-if="multipleSel"
            class="flex cursor-pointer items-center gap-2 px-3 py-2 hover:bg-gray-100"
            @click="selectAllOptions"
          >
            <input
              :checked="selectAll"
              type="checkbox"
              class="h-4 w-4 accent-checkBoxColor"
            />
            <span>Označi sve</span>
          </div>
          <div
            v-for="(option, index) in filteredOptions"
            @click="toggleOption(option.text, index)"
            :key="index"
            class="justify-left flex h-10 cursor-pointer items-center gap-2 px-3 hover:bg-gray-100"
          >
            <input
              v-model="isChecked[index]"
              type="checkbox"
              class="h-4 w-4 cursor-pointer accent-checkBoxColor"
            />
            <span>{{ option.text }}</span>
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
const selectAll = ref(false);
const isChecked = ref<boolean[]>([]);
const selectedValue = ref("");
const searchText = ref("");

const dropdownRef = ref(null);
onClickOutside(dropdownRef, () => (showOptions.value = false));

const { placeholderName, multipleSel, selection } = defineProps([
  "placeholderName",
  "multipleSel",
  "selection",
]);

const selectAllOptions = () => {
  selectAll.value = !selectAll.value;
  isChecked.value = selection.map(() => selectAll.value);
  updateSelectedValue();
};

const toggleOption = (option: string, index: number) => {
  if (multipleSel) {
    isChecked.value[index] = !isChecked.value[index];
  } else {
    isChecked.value.fill(false);
    isChecked.value[index] = true;
    showOptions.value = false;
  }
  updateSelectedValue();
};

const updateSelectedValue = () => {
  selectedValue.value = selection
    .filter((option: { text: string }, index: number) => isChecked.value[index])
    .map((option: { text: string }) => option.text)
    .join(", ");
};

const filteredOptions = computed(() =>
  selection.filter((option: { text: string }) =>
    option.text.toLowerCase().includes(searchText.value.toLowerCase().trim()),
  ),
);
</script>

<style scoped></style>
