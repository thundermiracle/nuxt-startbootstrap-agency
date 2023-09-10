<script setup lang="ts">
defineProps<{
  copyright: string;
  privacyHref: string;
  privacyText: string;
  termsHref: string;
  termsText: string;
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
  <footer class="py-2">
    <div class="container mx-auto">
      <div class="flex items-center flex-wrap text-center">
        <div class="md:basis-1/3 basis-1/1 md:text-right">{{ copyright }}</div>
        <div class="my-2 md:basis-1/3 basis-1/1 text-center">
          <LazyAtomsTwitterIcon v-if="social?.twitter" :userName="social?.twitter" />
          <LazyAtomsFacebookIcon v-if="social?.facebook" :userName="social?.facebook" />
          <LazyAtomsLinkedinIcon v-if="social?.linkedin" :userName="social?.linkedin" />
          <LazyAtomsGithubIcon v-if="social?.github" :userName="social?.github" />
          <LazyAtomsMediumIcon v-if="social?.medium" :userName="social?.medium" />
        </div>
        <div class="md:basis-1/3 basis-1/1 md:text-left">
          <a class="mr-3 text-primary" :href="privacyHref">
            {{ privacyText }}
          </a>
          <a class="text-primary" :href="termsHref">
            {{ termsText }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
