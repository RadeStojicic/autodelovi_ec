<template>
  <div class="my-10">
    <table class="min-w-full table-auto">
      <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2 text-left text-sm font-medium">ID</th>
          <th
            v-for="(tableHeader, index) in tableColumns"
            :key="index"
            class="px-4 py-2 text-left text-sm font-medium"
          >
            {{ tableHeader.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(tableRow, index) in tableData"
          :key="index"
          class="border-b border-l border-r border-gray-200"
        >
          <td class="px-4 py-2 text-sm">{{ index + 1 }}</td>
          <td
            v-for="(tableColumn, columnIndex) in tableColumns"
            :key="columnIndex"
            class="px-4 py-2 text-sm"
          >
            <div v-if="tableColumn.showPopup">
              <p
                class="cursor-pointer underline"
                @click="showPopup(tableRow[tableColumn.key])"
              >
                <span
                  v-if="
                    tableRow[tableColumn.key][columnIndex] &&
                    tableRow[tableColumn.key][columnIndex].name
                  "
                  >{{ tableRow[tableColumn.key][columnIndex].name }}</span
                >
                <span v-else>{{ tableRow[tableColumn.key][columnIndex] }}</span>
              </p>
            </div>
            <div v-else>{{ tableRow[tableColumn.key] }}</div>
          </td>
        </tr>
      </tbody>
    </table>

    <div
      class="absolute inset-0 flex items-center justify-center"
      v-if="showingPopup"
    >
      <div class="max-w-md rounded-lg bg-white p-8 text-black shadow-lg">
        <h2 class="mb-4 text-xl font-bold">Ostali</h2>
        <ul class="grid grid-cols-5 gap-5 py-10">
          <li
            v-for="(item, index) in popupData"
            :key="index"
            class="relative flex items-center justify-center border p-1"
          >
            <span v-if="item.name">{{ item.name }}</span>
            <span v-else>{{ item }}</span>
          </li>
        </ul>
        <div class="flex w-full justify-end">
          <button
            @click="closePopup"
            class="mt-4 rounded-md bg-blueColor px-8 py-2 text-white"
          >
            Izadji
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { emit } from "process";
import { defineProps, ref } from "vue";

const props = defineProps<{
  tableData: Array<object>;
  tableColumns: Array<{
    name: string;
    key: string;
    showPopup: boolean;
  }>;
}>();

const showingPopup = ref(false);
const popupData = ref();
function showPopup(items: any) {
  showingPopup.value = true;
  popupData.value = items;
}

function closePopup() {
  showingPopup.value = false;
}
</script>

<style scoped></style>
