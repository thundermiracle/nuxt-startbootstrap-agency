<script setup lang="ts">
import { MoleculesTimelineItem } from "#components";

import type { ComponentProps } from "~/utils/typings";

defineProps<{
  title: string;
  subTitle: string;
  data: ComponentProps<typeof MoleculesTimelineItem>[];
}>();
</script>

<template>
  <MoleculesSectionBase id="about" :title="title" :subTitle="subTitle">
    <ul
      class="p-0 relative list-none before:content-empty before:left-40px md:before:left-50% before:absolute before:top-0 before:bottom-0 before:w-2px before:bg-gray-200"
    >
      <MoleculesTimelineItem
        v-for="(item, ind) in data"
        :key="item.header"
        :imageContent="item.imageContent"
        :imageSrc="item.imageSrc"
        :imageAlt="item.imageAlt"
        :header="item.header"
        :subheader="item.subheader"
        :content="item.content"
        :direction="ind % 2 === 0 ? 'right' : 'left'"
      />
    </ul>
  </MoleculesSectionBase>
</template>
