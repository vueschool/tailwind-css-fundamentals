<script setup lang="ts">
const props = defineProps<{
  label: string;
  class?: string;
}>();

function slugify(str: string) {
  return str.toLowerCase().replace(/\s/g, "-");
}
</script>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<template>
  <div :class="props.class">
    <input
      class="block focus:border-[#EA7C67] focus:outline-none w-full text-sm font-light tracking-wider bg-transparent border-b border-white"
      v-bind="$attrs"
      :id="slugify(label)"
    />
    <label class="text-xs text-gray-500" :for="slugify(label)">{{
      label
    }}</label>
  </div>
</template>
