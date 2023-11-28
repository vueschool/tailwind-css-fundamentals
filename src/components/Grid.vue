<template>
  <section class="grid grid-cols-4 gap-2 grid-flow-dense">
    <div></div>
    <div></div>
    <div class="flex items-center justify-around col-span-3">
      <div class="w-16 h-16 min-h-0 bg-green-300"></div>
      <div class="w-16 h-16 min-h-0 bg-blue-300"></div>
      <div class="w-16 h-16 min-h-0 bg-green-300"></div>
      <div class="w-16 h-16 min-h-0 bg-blue-300"></div>
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </section>
</template>
<style scoped>
div {
  @apply bg-gray-400 min-h-[100px] even:bg-gray-600;
}
</style>
