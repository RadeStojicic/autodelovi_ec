<template>
  <div class="relative z-10 flex h-108 w-full justify-center sm:h-[480px]">
    <NuxtImg
      format="webp"
      sizes="xs:400px sm: 700px  md:900px lg:1400px xl: 1550px 2xl: 1920px"
      densities="x1 x2"
      class="w-full object-cover brightness-75"
      src="/main_image.jpg"
      alt=""
    />
    <form
      class="absolute mx-auto flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary/20"
    >
      <div class="mb-12 flex w-full flex-col items-center justify-center px-4">
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
        class="relative flex w-full flex-col items-center justify-center gap-4 px-4 md:w-full md:flex-row"
      >
        <selection-button
          v-for="(selection, index) in multiSel"
          :key="index"
          :placeholderName="selection.placeholderName"
          :disabledInput="selection.disabledInput"
          :multipleSel="selection.multipleSel"
          :inputIndex="selection.inputIndex"
          :checkboxChecked="selection.options.checkboxChecked"
          :selection="selection.options"
          v-model:model="carFilters[index]"
          v-model:searchText="searchText[index]"
          :getFilteredOptions="getFilteredOptions(index)"
          @update:model="applyFilters(index)"
        ></selection-button>
        <buttton
          @click="filterByCar"
          aria-label="Pretrazi"
          :class="{ 'brightness-[80%]': buttonDisabled }"
          class="mt-4 flex w-52 cursor-pointer items-center justify-center gap-1 rounded bg-secondary p-3 text-gray-900 md:mt-0 md:w-40"
        >
          <span class="icon-[prime--search] text-lg" />
          Pretraži
        </buttton>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useCarStore } from "../store/carfilters";
import { storeToRefs } from "pinia";

const { multiSel } = storeToRefs(useCarStore());
const carFilters = ref<string[]>(["", "", ""]);
const searchText = ref<string[]>(["", "", ""]);

const buttonDisabled = ref(true);
const getFilteredOptions = (index: number) => {
  const searchTextInput = searchText.value[index].toLowerCase().trim();
  if (index === 1) {
    const mark = carFilters.value[0];

    return mark
      ? multiSel.value[index].options.filter(
          (option) =>
            option.mark === mark &&
            option.text.toLowerCase().includes(searchTextInput),
        )
      : multiSel.value[index].options.filter((option) =>
          option.text.toLowerCase().includes(searchTextInput),
        );
  } else if (index === 2) {
    const model = carFilters.value[1];

    return model
      ? multiSel.value[index].options.filter(
          (option) =>
            option.model === model.replace(",", "") &&
            option.text.toLowerCase().includes(searchTextInput),
        )
      : multiSel.value[index].options.filter((option) =>
          option.text.toLowerCase().includes(searchTextInput),
        );
  } else {
    return multiSel.value[index].options.filter((option) =>
      option.text.toLowerCase().includes(searchTextInput),
    );
  }
};

const applyFilters = (index: number) => {
  if (
    carFilters.value[0] !== "" &&
    carFilters.value[1] !== "" &&
    carFilters.value[2] !== ""
  ) {
    buttonDisabled.value = false;
  } else {
    buttonDisabled.value = true;
  }
  if (index == 0) {
    [1, 2].forEach((i) => {
      carFilters.value[i] = "";
      multiSel.value[i].options.forEach(
        (option) => (option.checkboxChecked = false),
      );
    });
    multiSel.value[1].disabledInput = false;
    multiSel.value[2].disabledInput = true;
  }
  if (index == 1) {
    carFilters.value[2] = "";
    multiSel.value[2].disabledInput = false;
  }
};

const router = useRouter();
const filterByCar = () => {
  if (!buttonDisabled.value) {
    const queryParams = new URLSearchParams({
      marka: carFilters.value[0],
      model: carFilters.value[1],
      godiste: carFilters.value[2],
    });
    router.push(`/prodavnica?${queryParams.toString()}`);
  }
};
</script>

<style lang="scss" scoped></style>
