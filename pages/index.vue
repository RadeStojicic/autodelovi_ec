<template>
  <div class="bg-gray-100">
    <Main />
    <pre>{{ data }}</pre>

    <AddInfo />
    <Products />
    <MediaSection />
    <Contact />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "page-layout",
});

const { data } = await useFetch("/api/mail");
</script>

<style lang="scss" scoped></style>
