import { defineStore } from "pinia";

interface Category {
  id: number;
  name: string;
}
export const useCategoriesStore = defineStore("categories", () => {
  const categoriesData = ref<Category[]>([]);

  const getCategories = async () => {
    try {
      const response = await $fetch("/api/categories_d/categories", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      categoriesData.value = response;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return { categoriesData, getCategories };
});
