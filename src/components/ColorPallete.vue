<script setup lang="ts">
const colors = [
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
  "seaweed",
];
</script>
<template>
  <div class="flex items-stretch gap-3 mb-3">
    <div class="p-5 text-white bg-primary grow">Primary</div>
    <div class="p-5 text-white bg-secondary grow">Secondary</div>
    <div class="p-5 text-white bg-accent grow">Accent</div>
  </div>
  <div v-for="color in colors" :key="color" class="flex gap-3 mb-3">
    <div
      class="w-[10%] aspect-square text-sm text-black p-1"
      :class="`bg-${color}-50`"
    >
      {{ color }}
    </div>
    <div
      v-for="i in 9"
      :class="`bg-${color}-${i * 100}`"
      class="w-[10%] aspect-square"
      :key="i"
    ></div>
    <div class="w-[10%] aspect-square" :class="`bg-${color}-950`"></div>
  </div>
</template>
