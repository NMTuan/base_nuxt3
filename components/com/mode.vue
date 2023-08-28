<template>
  <div>
    <h1>Color mode: {{ colorMode.value }}</h1>
    <select v-model="colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="sepia">Sepia</option>
    </select>
    <div class="bg-sky-100 p-4 text-center"
    dark="bg-red-800"
    > test unocss dark mode </div>
  </div>
</template>

<script setup>
const colorMode = useColorMode()

console.log(colorMode.preference)
</script>
