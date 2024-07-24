import { defineStore } from "pinia";

interface Subcategory {
  id: number;
  name: string;
  category_id: number;
}

export const useSubcategoriesStore = defineStore("subcategories", () => {
  const subCategoriesData = ref<Subcategory[]>([]);

  const getSubCategories = async () => {
    try {
      const response = await $fetch("/api/categories_d/subcategories", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      subCategoriesData.value = response;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return { subCategoriesData, getSubCategories };
});
