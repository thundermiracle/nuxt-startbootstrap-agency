<script setup lang="ts">
defineProps<{
  userName: string;
}>();
</script>

<template>
  <AtomsSocialIconBase
    :href="`https://facebook.com/${userName}`"
    iconClass="i-entypo-social-facebook-with-circle"
    :a11y-name="`facebook of ${userName}`"
  />
</template>
