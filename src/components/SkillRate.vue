<script setup lang="ts">
defineProps<{
  name: string
  rate: number
}>()
</script>

<template>
  <div class="skill-rate-container">
    <span class="skill-name">{{ name }}</span>
    <div class="skill-rate">
      <span
        v-for="n in 5"
        :key="n"
        class="circle"
        :class="n <= rate ? 'circle-full' : 'circle-empty'"
      />
    </div>
  </div>
</template>

<style scoped>
.skill-rate-container {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.skill-name {
  min-width: 120px;
}

.skill-rate {
  display: flex;
  gap: var(--spacing-xs);
}

.circle {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid var(--color-accent);
}

.circle-full {
  background: var(--color-accent);
}

.circle-empty {
  background: transparent;
}
</style>
