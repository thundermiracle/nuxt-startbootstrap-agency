<script setup lang="ts">
import { MoleculesServiceItem } from "#components";

import type { ComponentProps } from "~/utils/typings";

defineProps<{
  title: string;
  subTitle: string;
  data: ComponentProps<typeof MoleculesServiceItem>[];
}>();
</script>

<template>
  <MoleculesSectionBase id="services" :title="title" :subTitle="subTitle">
    <div class="flex justify-around flex-wrap">
      <MoleculesServiceItem
        v-for="{ iconClass, header, content } in data"
        :key="iconClass"
        rootClass="md:basis-1/3 basis-1/1 max-w-440px px-4"
        :iconClass="iconClass"
        :header="header"
        :content="content"
      />
    </div>
  </MoleculesSectionBase>
</template>
