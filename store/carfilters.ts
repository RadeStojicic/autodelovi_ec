import { defineStore } from "pinia";
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
export const useCarStore = defineStore("carfilters", () => {
  const multiSel: Selections[] = reactive([
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
  ]);
  return { multiSel };
});
