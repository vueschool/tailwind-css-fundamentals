<script setup lang="ts">
import AppButton from "./components/AppButton.vue";
import AppInput from "./components/AppInput.vue";
import TheMainNav from "./components/TheMainNav.vue";
</script>
<template>
  <div class="m-10">
    <TheMainNav />
    <form action="">
      <label> </label>
      <AppInput label="Username" />
      <AppButton>Submit</AppButton>
    </form>
  </div>
</template>
