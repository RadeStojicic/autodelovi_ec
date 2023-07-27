<template>
 <div class="w-96 rounded-sm bg-white md:w-60">
  <select
   id="multiSelection"
   data-te-select-init
   :data-te-select-placeholder="placeholderName"
   data-te-select-size="lg"
   data-te-select-filter="true"
   :data-te-multiple="multipleSel"
   data-te-select-displayed-labels="3"
  >
   <option v-for="(data, index) in selection" :key="index" :value="data.value">
    {{ data.text }}
   </option>
  </select>
 </div>
</template>

<script setup lang="ts">
import { Select, initTE } from 'tw-elements';

onMounted(() => {
 initTE({ Select });
});

defineProps({
 placeholderName: {
  type: String,
  required: true,
 },
 selection: {
  type: Array,
  required: true,
 },
 multipleSel: {
  type: Boolean,
  required: true,
 },
});
</script>

<style scoped></style>
