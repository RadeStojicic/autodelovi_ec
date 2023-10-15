<template>
  <div class="mt-10 flex w-full">
    <table class="flex w-full flex-col">
      <thead
        class="w-full border-l border-r border-t bg-blueColor p-3 text-white"
      >
        <tr class="flex gap-20 text-left">
          <th
            v-for="(tableHeader, index) in tableColumns"
            :key="index"
            class="w-40 font-medium"
          >
            {{ tableHeader.name }}
          </th>
        </tr>
      </thead>
      <tbody class="border-b border-l border-r bg-white text-sm">
        <tr
          v-for="(rowData, rowIndex) in tableData"
          :key="rowIndex"
          class="flex gap-20 border-t p-3 text-left"
        >
          <td
            v-for="(column, columnIndex) in tableColumns"
            :key="columnIndex"
            class="w-40"
          >
            {{ rowData[column.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  tableData: Array<object>;
  tableColumns: Array<{ name: string; key: string }>;
}>();
</script>

<style scoped></style>
