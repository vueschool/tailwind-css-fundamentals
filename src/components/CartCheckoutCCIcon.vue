<script setup lang="ts">
import { Icon } from "@iconify/vue";
defineProps<{
  icon: string;
  active?: boolean;
}>();
</script>
<template>
  <Icon
    :class="{
      'opacity-100': active,
      'opacity-50': !active,
    }"
    class="hover:drop-shadow-[0_0_6px_#EA7C67] transition-all hover:opacity-100 hover:text-[#fca290]"
    :icon="icon"
  />
</template>
