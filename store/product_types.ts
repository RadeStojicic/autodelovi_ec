import { defineStore } from "pinia";

interface Type {
  id: number;
  name: string;
}
export const useTypesStore = defineStore("types", () => {
  const typesData = ref<Type[]>([]);

  const getTypes = async () => {
    try {
      const response = await $fetch("/api/types_d/productTypes", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      typesData.value = response;
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return { typesData, getTypes };
});
