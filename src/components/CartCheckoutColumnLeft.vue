<template>
  <div class="relative col-span-3">
    <!-- Computer Image -->
    <img
      src="/checkout-image.jpg"
      class="object-cover object-left w-full h-full"
    />
    <!-- Price -->
    <div class="absolute right-0 z-10 bottom-10">
      <div class="px-4 py-1 bg-[#EA7C67] translate-x-2/4">
        <span
          class="absolute text-gray-800 text-sm right-[106%] top-[50%] translate-y-[-50%]"
          >Total:</span
        >
        <div class="text-center">
          <span class="text-xl font-bold text-white">$1,999.00</span>
          <span class="block text-[10px] text-orange-100"
            >In Stock | Free Shipping</span
          >
        </div>
      </div>
    </div>
    <!-- Circles -->
    <div class="absolute flex flex-col gap-2 bottom-10 left-6">
      <div class="w-2 h-2 bg-[#EA7C67] rounded-full"></div>
      <div class="w-2 h-2 border border-gray-800 rounded-full"></div>
      <div class="w-2 h-2 border border-gray-800 rounded-full"></div>
    </div>
  </div>
</template>
