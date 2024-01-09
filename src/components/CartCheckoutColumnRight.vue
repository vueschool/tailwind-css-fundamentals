<script setup lang="ts">
import { Icon } from "@iconify/vue";
import CartCheckoutButton from "./CartCheckoutButton.vue";
import CartCheckoutInput from "./CartCheckoutInput.vue";
import CartCheckoutCheckbox from "./CartCheckoutCheckbox.vue";
import CartCheckoutCCIcon from "./CartCheckoutCCIcon.vue";
import CartCheckoutSteps from "./CartCheckoutSteps.vue";
import CartCheckoutHamburger from "./CartCheckoutHamburger.vue";
</script>
<template>
  <div class="flex flex-col justify-center h-full col-span-6 p-16">
    <!-- Header -->
    <header class="flex items-center justify-between">
      <CartCheckoutSteps />
      <CartCheckoutHamburger />
    </header>
    <h1 class="mt-10 mb-4 font-bold uppercase">Checkout</h1>

    <!-- Cards -->
    <div class="flex items-center gap-4 mb-4">
      <CartCheckoutCCIcon
        active
        class="text-[#EA7C67] text-5xl opacity-100"
        icon="bxl:visa"
      />

      <CartCheckoutCCIcon class="text-3xl" icon="mingcute:mastercard-fill" />

      <CartCheckoutCCIcon class="text-2xl" icon="ic:baseline-paypal" />

      <CartCheckoutCCIcon class="text-[2.5rem]" icon="cib:apple-pay" />

      <CartCheckoutCCIcon class="text-[2.5rem]" icon="cib:google-pay" />
    </div>

    <!-- Form -->
    <div>
      <fieldset class="flex w-full gap-6 mb-5 tracking-wide">
        <CartCheckoutInput
          class="w-11/12"
          label="Card Holder"
          value="John Doe"
        />

        <CartCheckoutInput label="MM/YY" value="09/18" class="w-12" />
      </fieldset>

      <fieldset class="flex w-full gap-6 mb-5 tracking-wide">
        <CartCheckoutInput
          class="w-11/12"
          label="Card Number"
          value="6336 8912 3456 7890"
        />

        <CartCheckoutInput label="CVC" value="532" class="w-12" />
      </fieldset>

      <CartCheckoutCheckbox> Add card to wallet </CartCheckoutCheckbox>
      <div class="flex justify-end">
        <CartCheckoutButton />
      </div>
    </div>
  </div>
</template>
