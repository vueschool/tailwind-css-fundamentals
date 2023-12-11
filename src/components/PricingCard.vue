<script setup lang="ts">
defineProps<{
  price: number;
  features: string[];
  name: string;
  description: string;
}>();
</script>
<template>
  <div>
    <div>
      <h3>{{ name }}</h3>
      <p>
        {{ description }}
      </p>
      <div>
        <span>${{ price }}</span>
        <span>/month</span>
      </div>
      <!-- List -->
      <ul role="list">
        <li v-for="feature in features" :key="feature">
          <!-- Icon -->
          <svg
            class="w-5 h-5"
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
    <a href="#">Get started</a>
  </div>
</template>
