<script setup lang="ts">
defineProps<{
  src: string;
  alt: string;
  href?: string;
}>();
</script>

<template>
  <a :href="href" target="_blank" rel="noopener noreferrer">
    <div class="h-75px w-300px relative">
      <NuxtImg
        loading="lazy"
        decoding="async"
        class="container mx-auto block mx-auto"
        width="300"
        height="75"
        format="webp"
        :src="src"
        :alt="alt"
      />
    </div>
  </a>
</template>
