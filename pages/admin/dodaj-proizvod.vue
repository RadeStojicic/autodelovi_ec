<template>
  <div class="mt-[64px] min-h-[calc(100vh-64px)] bg-[#f5f6f8]">
    <div class="mx-auto max-w-[1200px] px-6">
      <div class="flex items-center justify-between border-b py-4">
        <div>
          <h1 class="text-2xl font-bold">Kreiraj prozivod</h1>
          <p class="mt-1 text-sm">Dodajte novi proizvod</p>
        </div>
      </div>
      <div class="mt-8 flex flex-col gap-8">
        <div class="grid grid-cols-4 items-center gap-4">
          <label for="ime"
            ><p class="p-1 font-medium">Ime</p>
            <input
              v-model="formFields.name"
              class="w-full rounded-md border bg-white p-2 text-sm"
              type="text"
              placeholder="Ime proizvoda"
          /></label>
          <label for="cena"
            ><p class="p-1 font-medium">Cena</p>
            <input
              v-model="formFields.price"
              class="w-full rounded-md border bg-white p-2 text-sm"
              type="text"
              placeholder="Cena proizvoda"
          /></label>
          <label for="zalihe"
            ><p class="p-1 font-medium">Zalihe</p>
            <div class="flex w-full justify-between rounded-md border bg-white">
              <input
                class="flex justify-center rounded-l-md bg-white p-2 text-sm"
                type="text"
                placeholder="Količina u zalihama"
                :value="formFields.supplies"
              />
              <button
                :class="{
                  'cursor-not-allowed ': formFields.supplies == 1,
                }"
                :disabled="formFields.supplies == 1"
                @click="formFields.supplies--"
                class="w-full border-l border-r text-lg"
              >
                -
              </button>
              <button
                @click="formFields.supplies++"
                class="w-full rounded-full text-lg"
              >
                +
              </button>
            </div>
          </label>
          <label for="popust"
            ><p class="p-1 font-medium">Popust</p>
            <input
              v-model="formFields.discount"
              class="w-full rounded-md border bg-white p-2 text-sm"
              type="text"
              placeholder="Popust (%)"
          /></label>
        </div>
        <div class="grid w-full grid-cols-3 items-center gap-4">
          <AdminDropdown
            :dropdownOptions="dropdownOptions[index].options"
            :placeholderName="dropdownOptions[index].name"
            v-model:model="dropdownValues[index]"
            v-for="(option, index) in dropdownOptions"
            :key="index"
          />
          <SelectionButton
            :selection="tableData.map((item) => item.brand)"
            newWidth="true"
            inputName="Marka"
            v-model:model="selectedBrands"
            multipleSel="true"
          />
          <SelectionButton
            :selection="tableData.map((item) => item.brand)"
            newWidth="true"
            inputName="Model"
            v-model:model="selectedModels"
            multipleSel="true"
          />
          <SelectionButton
            :selection="tableData.map((item) => item.brand)"
            newWidth="true"
            inputName="Godište"
            v-model:model="selectedYears"
            multipleSel="true"
          />
        </div>
        <div class="grid w-full grid-cols-3 items-start gap-4">
          <label for="opis">
            <p class="p-1 font-medium">Opis proizvoda</p>

            <textarea
              v-model="formFields.aboutProduct"
              class="h-32 w-full border p-2 text-sm"
              name="Opis proizvoda"
            ></textarea>
          </label>
          <label for="dodatne informacije">
            <p class="p-1 font-medium">Dodatne informacije</p>
            <textarea
              v-model="formFields.additionalInfo"
              class="h-32 w-full border p-2 text-sm"
              name="Dodatne informacije"
            ></textarea>
          </label>
          <label for="o proizvodu">
            <p class="p-1 font-medium">O proizvodu</p>
            <textarea
              v-model="formFields.description"
              class="h-32 w-full border p-2 text-sm"
              name="O proizvodu"
            ></textarea>
          </label>
        </div>
        <div class="flex w-full flex-col">
          <label for="images">
            <p class="p-1 font-medium">Slike</p>
            <div class="flex flex-col">
              <div
                class="flex w-32 cursor-pointer justify-center rounded-md border bg-gray-50 text-center text-sm"
              >
                <input
                  type="file"
                  @change="handleFileUpload"
                  accept="image/jpeg, image/png, image/jpg"
                  id="uploadImage"
                  multiple
                  hidden
                />
                <label
                  class="flex w-32 cursor-pointer items-center justify-center gap-1 px-3 py-2"
                  for="uploadImage"
                  ><Icon name="material-symbols:image-outline" />Učitaj
                  slike</label
                >
              </div>
            </div>
          </label>
          <div>
            <div
              v-if="imagePreviews.length"
              class="mt-4 flex select-none flex-wrap items-center"
            >
              <div
                class="relative"
                v-for="(url, index) in imagePreviews"
                :key="index"
              >
                <NuxtImg
                  format="webp"
                  fit="cover"
                  width="150"
                  height="150"
                  :src="url"
                  class="h-[150px] max-w-full rounded-2xl object-cover p-3"
                />
                <div
                  @click="removeImage(index)"
                  class="absolute right-4 top-4 flex cursor-pointer rounded-md bg-blueColor p-[6px]"
                >
                  <Icon color="white" class="" name="prime:trash" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full">
        <button
          @click="sendData"
          class="my-6 w-52 cursor-pointer rounded-full bg-black p-2 py-3 text-white"
        >
          Sačuvaj
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCategoriesStore } from "~/store/categories";
import { useSubcategoriesStore } from "../../store/subcategories";
import { useVehiclesStore } from "../../store/vehicles";
import { subcategories } from "~/server/schemas/subcategories.schema";
import { useTypesStore } from "../../store/product_types";

definePageMeta({
  layout: "admin-layout",
});

interface BrandModelYear {
  brand: string;
  models: { name: string }[];
  years: { name: string }[];
}

const formFields = ref({
  name: "",
  price: null,
  quantity: 1,
  supplies: null,
  aboutProduct: "",
  description: "",
  additionalInfo: "",
  showFilledHeart: false,
  discount: null,
});

const dropdownValues = ref<string[]>(["", "", ""]);
const { categoriesData } = storeToRefs(useCategoriesStore());
const { getCategories } = useCategoriesStore();
const { subCategoriesData } = storeToRefs(useSubcategoriesStore());
const { getSubCategories } = useSubcategoriesStore();
const { typesData } = storeToRefs(useTypesStore());
const { getTypes } = useTypesStore();

const dropdownOptions = ref<object[]>([]);

const getData = async () => {
  await getTypes();
  await getCategories();
  await getSubCategories();
};
getData();

// categories/subcategories/types
watchEffect(() => {
  const selectedCategory = categoriesData.value.find(
    (category) => category.name === dropdownValues.value[0],
  );
  const subcategoryFilteredOptions = ref<string[]>([]);

  if (selectedCategory) {
    dropdownValues.value[1] = "";
    subcategoryFilteredOptions.value = subCategoriesData.value
      .filter((subCategory) => subCategory.category_id === selectedCategory.id)
      .map((subCategory) => subCategory.name);
  }

  dropdownOptions.value = [
    {
      id: 1,
      name: "Kategorija",
      options: categoriesData.value.map((category) => category.name),
    },
    {
      id: 2,
      name: "Podkategorija",
      options: subcategoryFilteredOptions,
    },
    {
      id: 3,
      name: "Tip",
      options: typesData.value.map((type) => type.name),
    },
  ];
});

const selectedBrands = ref<string[]>([]);
const selectedModels = ref<string[]>([]);
const selectedYears = ref<string[]>([]);

const tableData = ref<BrandModelYear[]>([]);
watchEffect(() => {
  const { brandsData, modelsData, yearsData } = storeToRefs(useVehiclesStore());
  tableData.value = brandsData.value.map(
    (brand: { name: string; id: number }) => {
      const brandModels = modelsData.value.filter(
        (model: { brand_id: number; id: number; name: string }) =>
          model.brand_id === brand.id,
      );
      const brandYears = brandModels.map((model: { id: number }) =>
        yearsData.value.filter(
          (year: { model_id: number; id: number; name: string }) =>
            year.model_id === model.id,
        ),
      );
      return {
        brand: brand.name,
        models: brandModels,
        years: brandYears.flat(),
      };
    },
  );
  console.log(tableData.value);
});

// product images
const selectedFiles = ref<File[]>([]);
const imagePreviews = ref<string[]>([]);

const handleFileUpload = (e: any) => {
  const files = e.target.files;
  if (files) {
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        imagePreviews.value.push(e.target.result);
      };
      reader.readAsDataURL(files[i]);
    }
    selectedFiles.value = files;
  }
};

const removeImage = (index: number) => {
  imagePreviews.value.splice(index, 1);
  selectedFiles.value.splice(index, 1);
};

// const client = useSupabaseClient();
// async function uploadImagesToSupabase(image: string) {
//   const { data, error } = await client.storage
//     .from("products")
//     .upload("my-image.png", image);

//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log(data);
// }

// function sendData() {
//   $fetch("/api/products", {
//     method: "POST",
//     body: {
//       category: formFields.value.category || "auto",
//       title: formFields.value.title || "auto",
//       oldPrice: parseFloat(formFields.value.oldPrice) || 0,
//       newPrice: parseFloat(formFields.value.newPrice) || 0,
//       quantity: formFields.value.quantity || 0,
//       mark: formFields.value.mark || "auto",
//       model: formFields.value.model || "auto",
//       year: formFields.value.year || "auto",
//       type: formFields.value.type || "auto",
//       aboutProduct: formFields.value.aboutProduct || "",
//       description: formFields.value.description || "",
//       additionalInfo: formFields.value.additionalInfo || "",
//       other_images: "",
//       discount: parseFloat(formFields.value.discount) || 0,
//       showFilledHeart: false,
//       id: 123,
//     } satisfies typeof products.$inferInsert,
//   });
// }
</script>

<style scoped></style>
