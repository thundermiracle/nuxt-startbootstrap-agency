<script setup lang="ts">
defineProps<{
  userName: string;
}>();
</script>

<template>
  <AtomsSocialIconBase
    :href="`https://linkedin.com/in/${userName}`"
    iconClass="i-ant-design-linkedin-filled"
    :a11y-name="`linkedin of ${userName}`"
  />
</template>
