<script setup lang="ts">
defineProps<{
  userName: string;
}>();
</script>

<template>
  <AtomsSocialIconBase
    :href="`https://twitter.com/${userName}`"
    iconClass="i-ant-design-twitter-circle-filled"
    :a11y-name="`twitter of ${userName}`"
  />
</template>
