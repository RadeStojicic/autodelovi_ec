import { defineStore } from "pinia";
import { useCategoriesStore } from "./categories";
import { useSubcategoriesStore } from "./subcategories";
import { storeToRefs } from "pinia";

interface Category {
  id: number;
  name: string;
}

interface Subcategory {
  id: number;
  category_id: number;
  name: string;
}

interface CategoryWithSubcategories {
  categoryName: string;
  subcategories: { name: string }[];
}

export const useLinkStore = defineStore("links", () => {
  const navLinks = ref([
    {
      names: "Početna",
      to: "/",
    },
    {
      names: "Prodavnica",
      to: "/prodavnica",
      categories: [] as CategoryWithSubcategories[],
      // {
      //   categoryName: "Enterijer",
      //   sucategories: [
      //     { name: "Sedista" },
      //     { name: "Podne prostirke" },
      //     { name: "Volani i komande" },
      //     { name: "Tabla i instrumenti" },
      //     { name: "Klima uređaji" },
      //     { name: "Radio i multimedija" },
      //   ],
      // },
    },
    {
      names: "Novosti",
      to: "/novosti",
    },
    {
      names: "Kontakt",
      to: "/kontakt",
    },
  ]);
  const { categoriesData } = storeToRefs(useCategoriesStore());
  const { subCategoriesData } = storeToRefs(useSubcategoriesStore());
  const { getCategories } = useCategoriesStore();
  const { getSubCategories } = useSubcategoriesStore();

  const getData = async () => {
    await getCategories();
    await getSubCategories();
    navLinks.value[1].categories = structuredCategories();
  };

  const structuredCategories = (): CategoryWithSubcategories[] => {
    return categoriesData.value.map((category) => {
      const subcategories = subCategoriesData.value.filter(
        (subcategory) => subcategory.category_id === category.id,
      );
      return {
        categoryName: category.name,
        subcategories: subcategories.map((subcategory) => ({
          name: subcategory.name,
        })),
      };
    });
  };

  getData();

  const categories = navLinks.value[1].categories;
  return { navLinks, categories };
});
