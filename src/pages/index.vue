<script setup lang="ts">
import "@unocss/reset/normalize.css";
import "@unocss/reset/sanitize/sanitize.css";
import "@unocss/reset/sanitize/assets.css";

import OriginalMetaJson from "~/contents/meta.json";

import HomeView from "~/views/HomeView.vue";

const MetaJson = ref<{
  title: string;
  description: string;
  keywords: string[];
}>(OriginalMetaJson);
</script>

<template>
  <div>
    <Html lang="en"></Html>
    <Title>{{ MetaJson.title }}</Title>
    <Meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, maximum-scale=5, width=device-width, shrink-to-fit=no, viewport-fit=cover"
    />
    <Meta name="keywords" :content="MetaJson.keywords.join(', ')" />
    <Meta name="description" :content="MetaJson.description" />
    <Meta name="og:title" :content="MetaJson.title" />
    <Meta name="og:description" :content="MetaJson.description" />
    <Meta name="og:type" content="website" />
    <Meta name="twitter:card" content="summary" />
    <Meta name="twitter:creator" content="ThunderMiracle" />
    <Meta name="twitter:title" :content="MetaJson.title" />
    <Meta name="twitter:description" :content="MetaJson.description" />
    <HomeView />
  </div>
</template>
