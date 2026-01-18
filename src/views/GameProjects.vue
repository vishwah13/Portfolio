<script setup lang="ts">
import ProjectsList from '@/components/ProjectsList.vue'
import gameProjectsData from '@/data/GameProjectsData'
</script>

<template>
  <div class="page game-projects">
    <h1>Games</h1>

    <p class="mb-xl">
      The following are some stuff I've made or heavily contributed to.
    </p>

    <ProjectsList :projects="gameProjectsData" />

    <p class="mb-lg" style="margin-top: var(--spacing-xl);">
      There is more to see on
      <a href="https://vishwah13.itch.io/" target="_blank">itch.io</a>
    </p>
  </div>
</template>
