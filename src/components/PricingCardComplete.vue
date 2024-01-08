<!-- This is the component code exactly as you saw it in the example-->
<!--The code we did together in the video is in PricingCard.vue-->
<script setup lang="ts">
defineProps<{
  price: number;
  features: string[];
  name: string;
  description: string;
}>();
</script>
<template>
  <div
    class="flex flex-col justify-between p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadowdark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
  >
    <div>
      <h3 class="mb-4 text-2xl font-semibold">{{ name }}</h3>
      <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        {{ description }}
      </p>
      <div class="flex items-baseline justify-center my-8">
        <span class="mr-2 text-5xl font-extrabold">${{ price }}</span>
        <span class="text-gray-500 dark:text-gray-400">/month</span>
      </div>
      <!-- List -->
      <ul role="list" class="mb-8 space-y-4 text-left">
        <li
          v-for="feature in features"
          :key="feature"
          class="flex space-x-3 items-top"
        >
          <!-- Icon -->
          <svg
            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>{{ feature }}</span>
        </li>
      </ul>
    </div>
    <a
      href="#"
      class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-blue-900"
      >Get started</a
    >
  </div>
</template>
