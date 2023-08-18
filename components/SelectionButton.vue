<template>
  <div ref="dropdownRef" class="relative w-full select-none rounded-sm sm:w-72">
    <div
      @click="showOptions = !showOptions && !disabledInput"
      class="relative flex w-full cursor-pointer items-center justify-between rounded-sm bg-white focus:outline-none focus:ring-1 focus:ring-sky-200"
      :class="{ 'brightness-90': disabledInput }"
    >
      <input
        class="h-full w-4/5 cursor-pointer rounded-sm p-[.9rem] focus:outline-none sm:p-3"
        :value="model"
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
      class="absolute z-50 mt-[.5px] w-full bg-white py-2 shadow-[0_2px_5px_0_rgba(0,0,0,0.16),_0_2px_10px_0_rgba(0,0,0,0.12)] transition duration-200"
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
              :checked="selection.selectAll"
              type="checkbox"
              class="h-4 w-4 accent-checkBoxColor"
            />
            <span>Označi sve</span>
          </div>
          <div
            v-for="(option, index) in getFilteredOptions"
            @click="toggleOption(option.id)"
            :key="index"
            class="justify-left flex h-10 cursor-pointer items-center gap-2 px-3 py-6 hover:bg-gray-100"
          >
            <input
              v-model="option.checkboxChecked"
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
const dropdownRef = ref(null);

onClickOutside(dropdownRef, () => (showOptions.value = false));

const props = defineProps<{
  placeholderName: string;
  disabledInput: boolean;
  multipleSel: boolean;
  inputIndex: number;
  checkboxChecked?: boolean;
  selection: any;
  getFilteredOptions: any;
}>();

const model = defineModel<string>("model");
const searchText = defineModel<string>("searchText");

// Select All functionality
const selectAllOptions = () => {
  const filteredOptions = props.getFilteredOptions;
  const allSelected = filteredOptions.every(
    (option: { checkboxChecked: boolean }) => option.checkboxChecked,
  );
  props.selection.selectAll = !allSelected;

  filteredOptions.forEach((option: { checkboxChecked: boolean }) => {
    option.checkboxChecked = !allSelected;
  });
  updateSelectedValue();
};

// Checkbox functionality
const toggleOption = (index: number) => {
  if (props.multipleSel) {
    props.selection[index].checkboxChecked =
      !props.selection[index].checkboxChecked;
  } else {
    props.selection.forEach((option: { checkboxChecked: boolean }) => {
      option.checkboxChecked = false;
    });
    props.selection[index].checkboxChecked =
      !props.selection[index].checkboxChecked;
    showOptions.value = false;
  }

  updateSelectedValue();
};

// Checkbox value update
const updateSelectedValue = () => {
  model.value = props.selection
    .filter((option: { checkboxChecked: boolean }) => option.checkboxChecked)
    .map((option: { text: string }) => option.text)
    .join(", ");
};
</script>

<style scoped></style>
