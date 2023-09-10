<script setup lang="ts">
import { MoleculesTeamItem } from "#components";

import type { ComponentProps } from "~/utils/typings";

defineProps<{
  title: string;
  subTitle: string;
  footer: string;
  data: ComponentProps<typeof MoleculesTeamItem>[];
}>();
</script>

<template>
  <MoleculesSectionBase id="team" :title="title" :subTitle="subTitle" :footer="footer" bgGray>
    <div class="flex justify-around flex-wrap">
      <!-- pass all props in item to TeamItem -->
      <MoleculesTeamItem v-for="item in data" :key="item.imageSrc" :="item" />
    </div>
  </MoleculesSectionBase>
</template>
