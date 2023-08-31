<template>
  <div class="relative z-10 flex h-108 w-full justify-center sm:h-[480px]">
    <NuxtImg
      format="webp"
      width="1920"
      height="1080"
      quality="80"
      class="w-full object-cover object-center brightness-75"
      src="/main_image.jpg"
      alt=""
    />
    <form
      class="absolute mx-auto flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary/20"
    >
      <div class="mb-12 flex w-full flex-col items-center justify-center">
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
          class="mt-4 flex w-52 items-center justify-center gap-1 rounded bg-secondary p-3 text-gray-900 md:mt-0 md:w-40"
        >
          <span class="icon-[prime--search] text-lg" />
          Pretraži
        </buttton>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
interface Selections {
  placeholderName: string;
  multipleSel: boolean;
  disabledInput: boolean;
  inputIndex: number;
  selectAll: boolean;
  options: {
    id: number;
    text: string;
    mark?: string;
    model?: string;
    checkboxChecked: boolean;
  }[];
}
const multiSel: Selections[] = [
  {
    placeholderName: "Marka",
    multipleSel: false,
    disabledInput: false,
    inputIndex: 0,
    selectAll: false,
    options: [
      { id: 0, text: "BMW", checkboxChecked: false },
      { id: 1, text: "Audi", checkboxChecked: false },
      { id: 2, text: "Mercedes", checkboxChecked: false },
      { id: 3, text: "Polo", checkboxChecked: false },
      { id: 4, text: "Ford", checkboxChecked: false },
    ],
  },
  {
    placeholderName: "Model",
    multipleSel: true,
    disabledInput: true,
    inputIndex: 1,
    selectAll: true,
    options: [
      { id: 0, text: "X4", mark: "BMW", checkboxChecked: false },
      { id: 1, text: "i8", mark: "BMW", checkboxChecked: false },
      { id: 2, text: "M4", mark: "BMW", checkboxChecked: false },
      { id: 3, text: "i4", mark: "BMW", checkboxChecked: false },
      { id: 4, text: "X6", mark: "BMW", checkboxChecked: false },
      { id: 5, text: "A3", mark: "Audi", checkboxChecked: false },
      { id: 6, text: "A4", mark: "Audi", checkboxChecked: false },
      { id: 7, text: "R8", mark: "Audi", checkboxChecked: false },
      { id: 8, text: "Q7", mark: "Audi", checkboxChecked: false },
      { id: 9, text: "Glc", mark: "Mercedes", checkboxChecked: false },
    ],
  },
  {
    placeholderName: "Godište",
    multipleSel: true,
    disabledInput: true,
    inputIndex: 2,
    selectAll: true,
    options: [
      {
        id: 0,
        text: "2003",
        mark: "BMW",
        model: "X4 i8",
        checkboxChecked: false,
      },
      {
        id: 1,
        text: "2004",
        mark: "BMW",
        model: "X4 i8",
        checkboxChecked: false,
      },
      {
        id: 2,
        text: "2005",
        mark: "BMW",
        model: "X4",
        checkboxChecked: false,
      },
      {
        id: 3,
        text: "2006",
        mark: "Audi",
        model: "Q7",
        checkboxChecked: false,
      },
      {
        id: 4,
        text: "2007",
        mark: "Audi",
        model: "Q7",
        checkboxChecked: false,
      },
      {
        id: 5,
        text: "2008",
        mark: "Audi",
        model: "Q7",
        checkboxChecked: false,
      },
      {
        id: 6,
        text: "2016",
        mark: "Mercedes",
        model: "Glc",
        checkboxChecked: false,
      },
    ],
  },
];

const carFilters = ref<string[]>(["", "", ""]);
const searchText = ref<string[]>(["", "", ""]);

const buttonDisabled = ref(true);
const getFilteredOptions = (index: number) => {
  const searchTextInput = searchText.value[index].toLowerCase().trim();
  if (index === 1) {
    const mark = carFilters.value[0];

    return mark
      ? multiSel[index].options.filter(
          (option) =>
            option.mark === mark &&
            option.text.toLowerCase().includes(searchTextInput),
        )
      : multiSel[index].options.filter((option) =>
          option.text.toLowerCase().includes(searchTextInput),
        );
  } else if (index === 2) {
    const model = carFilters.value[1];

    return model
      ? multiSel[index].options.filter(
          (option) =>
            option.model === model.replace(",", "") &&
            option.text.toLowerCase().includes(searchTextInput),
        )
      : multiSel[index].options.filter((option) =>
          option.text.toLowerCase().includes(searchTextInput),
        );
  } else {
    return multiSel[index].options.filter((option) =>
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
      multiSel[i].options.forEach((option) => (option.checkboxChecked = false));
    });
    multiSel[1].disabledInput = false;
    multiSel[2].disabledInput = true;
  }
  if (index == 1) {
    carFilters.value[2] = "";
    multiSel[2].disabledInput = false;
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
