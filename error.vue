<template></template>

<script setup lang="ts">
const props = defineProps({
  error: Object,
});

onMounted(() => {
  clearError({ redirect: "/" });
});
</script>

<style scoped></style>
