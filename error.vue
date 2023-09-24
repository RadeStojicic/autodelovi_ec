<template></template>

<script setup lang="ts">
const props = defineProps({
  error: Object,
});

onMounted(() => {
  handleError();
});
const handleError = () => clearError({ redirect: "/" });
</script>

<style scoped></style>
