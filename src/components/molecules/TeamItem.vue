<script setup lang="ts">
defineProps<{
  imageSrc: string;
  imageAlt?: string;
  header: string;
  subheader: string;
  social?: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
    github?: string;
    medium?: string;
  };
}>();
</script>

<template>
  <div class="flex flex-col text-center items-center max-w-440px px-4 mb-50px">
    <div class="hw-239px rounded-img-border">
      <div class="hw-225px relative">
        <NuxtImg
          loading="lazy"
          decoding="async"
          format="webp"
          width="225"
          height="225"
          class="rounded-full"
          :src="imageSrc"
          :alt="imageAlt || header"
        />
      </div>
    </div>
    <h4 class="mt-25px mb-0 transform-none">{{ header }}</h4>
    <p class="mt-0 text-muted">{{ subheader }}</p>
    <div class="flex gap-2">
      <LazyAtomsTwitterIcon v-if="social?.twitter" :userName="social?.twitter" />
      <LazyAtomsFacebookIcon v-if="social?.facebook" :userName="social?.facebook" />
      <LazyAtomsLinkedinIcon v-if="social?.linkedin" :userName="social?.linkedin" />
      <LazyAtomsGithubIcon v-if="social?.github" :userName="social?.github" />
      <LazyAtomsMediumIcon v-if="social?.medium" :userName="social?.medium" />
    </div>
  </div>
</template>
