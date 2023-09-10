<script setup lang="ts">
defineProps<{
  userName: string;
}>();
</script>

<template>
  <AtomsSocialIconBase
    :href="`https://medium.com/${userName}`"
    iconClass="i-ant-design-medium-circle-filled"
    :a11y-name="`medium of ${userName}`"
  />
</template>
