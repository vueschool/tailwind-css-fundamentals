<script setup lang="ts">
import { Icon } from "@iconify/vue";
defineProps<{
  icon: string;
}>();
</script>
<template>
  <Icon
    class="opacity-50 hover:drop-shadow-[0_0_6px_#EA7C67] transition-all hover:opacity-100 hover:text-[#EA7C67]"
    :icon="icon"
  />
</template>
