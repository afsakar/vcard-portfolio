<script setup>
const color = useColorMode()

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
const themeColor = computed(() => {
  return color.value
})
</script>

<template>
  <Button :icon="themeColor === 'dark' ? 'pi pi-sun' : 'pi pi-moon'" @click="toggleDark" />
</template>
