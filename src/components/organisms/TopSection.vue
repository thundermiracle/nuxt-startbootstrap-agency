<script setup lang="ts">
defineProps<{
  header: string;
  subheader: string;
  imageSrc: string;
  jumpToAnchor?: string;
  jumpToAnchorText?: string;
}>();
</script>

<template>
  <AtomsImageCard :imageSrc="imageSrc" :header="header" :subheader="subheader">
    <!-- render when extraInfoPart is true -->
    <a
      v-if="jumpToAnchor && jumpToAnchorText"
      type="button"
      class="big-btn decoration-none"
      :href="`#${jumpToAnchor}`"
    >
      {{ jumpToAnchorText }}
    </a>
  </AtomsImageCard>
</template>
