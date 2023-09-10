<script setup lang="ts">
import { MoleculesClientItem } from '#components';

import type { ComponentProps } from '~/utils/typings';

defineProps<{
  data: ComponentProps<typeof MoleculesClientItem>[];
}>();
</script>

<template>
  <MoleculesSectionBase id="clients">
    <div class="flex flex-row flex-wrap justify-between">
      <div v-for="item in data" class="my-3 md:basis-1/4 basis-1/2" :key="item.src">
        <MoleculesClientItem :="item" />
      </div>
    </div>
  </MoleculesSectionBase>
</template>
