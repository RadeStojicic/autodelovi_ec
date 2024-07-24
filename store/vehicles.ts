import { defineStore } from "pinia";

interface Brands {
  id: number;
  name: string;
}

interface Models {
  id: number;
  name: string;
  brand_id: number;
}

interface Years {
  id: number;
  name: string;
  model_id: number;
}

export const useVehiclesStore = defineStore("vehicles", () => {
  const brandsData = ref<Brands[]>([]);
  const modelsData = ref<Models[]>([]);
  const yearsData = ref<Years[]>([]);

  const getBrands = async () => {
    try {
      const response = await $fetch("/api/vehicles_d/brands", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      brandsData.value = response;
    } catch (error) {
      console.error("Error:", error);
    }
  };
  getBrands();

  const getModels = async () => {
    try {
      const response = await $fetch("/api/vehicles_d/models", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      modelsData.value = response;
    } catch (error) {
      console.error("Error:", error);
    }
  };
  getModels();

  const getYears = async () => {
    try {
      const response = await $fetch("/api/vehicles_d/years", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      yearsData.value = response;
    } catch (error) {
      console.error("Error:", error);
    }
  };
  getYears();

  return { brandsData, modelsData, yearsData };
});
