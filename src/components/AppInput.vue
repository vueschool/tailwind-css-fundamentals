<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{
  label?: string;
  modelValue?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const _modelValue = computed({
  get() {
    return props.modelValue || "";
  },
  set(value: string) {
    emit("update:modelValue", value);
  },
});
</script>
<template>
  <label class="block mb-3">
    <span
      v-if="label"
      class="after:content-['*'] after:text-red-500 block text-2xl text-gray-800"
      >{{ label }}</span
    >
    <input
      v-model="_modelValue"
      placeholder="danielkelly_io"
      type="text"
      required="true"
      class="block w-full p-3 border border-gray-400 rounded-lg placeholder:italic placeholder:text-sm disabled:opacity-50"
    />
  </label>
</template>
