<script setup lang="ts">
defineProps<{
  userName: string;
}>();
</script>

<template>
  <AtomsSocialIconBase
    :href="`https://github.com/${userName}`"
    iconClass="i-ant-design-github-filled"
    :a11y-name="`github of ${userName}`"
  />
</template>
