<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <RouterLink to="/home">home</RouterLink>
  <RouterLink to="/about">about</RouterLink>
</template>

<style scoped></style>
