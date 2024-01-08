<script setup lang="ts">
import { ref } from "vue";
const active = ref(false);
const mobileMenuActive = ref(false);
</script>
<template>
  <header class="relative flex items-center justify-between p-2 bg-gray-800">
    <button
      class="flex flex-col w-8 gap-1 p-2 bg-gray-700 rounded sm:hidden outline outline-white"
      @click="mobileMenuActive = !mobileMenuActive"
    >
      <span class="block w-full h-[2px] bg-white"></span>
      <span class="block w-full h-[2px] bg-white"></span>
      <span class="block w-full h-[2px] bg-white"></span>
    </button>
    <div class="flex items-center">
      <img
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
        alt="TailwindUI"
        class="w-16 h-16 sm:mr-3"
      />
      <ul
        class="absolute left-0 flex flex-col w-full gap-1 p-2 bg-gray-800 sm:static top-full sm:flex-row"
        v-if="mobileMenuActive"
      >
        <li class="px-2 py-1 text-gray-300 bg-gray-900 rounded cursor-pointer">
          Dashboard
        </li>
        <li
          class="px-2 py-1 text-gray-300 rounded cursor-pointer hover:bg-gray-500 hover:text-gray-100"
        >
          Team
        </li>
        <li
          class="px-2 py-1 text-gray-300 rounded cursor-pointer hover:bg-gray-500 hover:text-gray-100"
        >
          Projects
        </li>
        <li
          class="px-2 py-1 text-gray-300 rounded cursor-pointer hover:bg-gray-500 hover:text-gray-100"
        >
          Calendar
        </li>
      </ul>
    </div>

    <div class="flex items-center gap-2">
      <svg
        class="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
        ></path>
      </svg>
      <div class="relative">
        <button @click="active = !active">
          <img
            src="https://avatars.githubusercontent.com/u/7635209?v=4"
            alt="Daniel Kelly"
            class="w-10 h-10 rounded-full ring-white ring-2 ring-offset-2 ring-offset-gray-800"
          />
        </button>
        <ul
          class="absolute right-0 text-gray-800 bg-white rounded top-full min-w-[175px] flex flex-col"
          v-if="active"
        >
          <li class="p-2 hover:bg-gray-100">Your Profile</li>
          <li class="p-2 hover:bg-gray-100">Settings</li>
          <li class="p-2 hover:bg-gray-100">Signout</li>
        </ul>
      </div>
    </div>
  </header>
</template>
