<script setup lang="ts">
import { MoleculesPortfolioItem } from "#components";

import type { ComponentProps } from "~/utils/typings";

defineProps<{
  title: string;
  subTitle: string;
  data: (ComponentProps<typeof MoleculesPortfolioItem> & {
    extraInfo?: string[];
  })[];
}>();
</script>

<template>
  <MoleculesSectionBase id="portfolio" :title="title" :sub-title="subTitle" :bg-gray="true">
    <div class="flex justify-around flex-wrap">
      <MoleculesPortfolioItem
        v-for="portfolio in data"
        :key="portfolio.header"
        :imageSrc="portfolio.imageSrc"
        :header="portfolio.header"
        :subheader="portfolio.subheader"
        :content="portfolio.content"
        :image-src-detail="portfolio.imageSrcDetail"
        :image-alt-detail="portfolio.imageAltDetail"
      >
        <ul>
          <li v-for="item in portfolio.extraInfo" :key="item">{{ item }}</li>
        </ul>
      </MoleculesPortfolioItem>
    </div>
  </MoleculesSectionBase>
</template>
