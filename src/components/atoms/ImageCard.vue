<script setup lang="ts">
defineProps<{
  className?: string;
  imageSrc: string;
  imageAlt?: string;
  header: string;
  subheader: string;
  priority?: boolean;
}>();
</script>

<template>
  <div :class="`relative bg-dark text-white text-center ${className || ''}`">
    <div class="h-491px md:h-759px">
      <NuxtImg
        preload
        class="h-100% w-100%"
        width="1900"
        height="1250"
        sizes="xs:320px sm:640px md:768px lg:1024px xl:1280px"
        format="webp"
        :src="imageSrc"
        :alt="imageAlt || header"
      />
    </div>
    <div class="overlay">
      <div class="container h-100% mx-auto flex items-center justify-center">
        <div class="pt-300px pb-200px">
          <div class="italic text-22px font-serif md:text-40px">{{ subheader }}</div>
          <div class="uppercase mb-30px font-700 text-50px md:text-75px">{{ header }}</div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
