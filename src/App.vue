<script setup lang="ts">
import AppButton from "./components/AppButton.vue";
import AppInput from "./components/AppInput.vue";
import TheMainNav from "./components/TheMainNav.vue";
import { useDark } from "@vueuse/core";

const isDark = useDark();
</script>
<template>
  <div class="m-10">
    <input type="checkbox" v-model="isDark" />Dark Mode
    <ul class="list-disc marker:text-green-500 marker:text-2xl">
      <li>Vue.js</li>
      <li>React</li>
      <li>Svelte</li>
      <li>Solid</li>
    </ul>
  </div>
</template>
