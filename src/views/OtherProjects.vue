<script setup lang="ts">
import ProjectsList from '@/components/ProjectsList.vue'
import otherProjectsData from '@/data/OtherProjectsData'
</script>

<template>
  <div class="page other-projects">
    <h1>Other Projects</h1>

    <p class="mb-xl">
      And here are some other projects I've made as well.
    </p>

    <ProjectsList :projects="otherProjectsData" />
  </div>
</template>
