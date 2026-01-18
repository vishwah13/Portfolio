<script setup lang="ts">
defineProps<{
  visible: boolean
  color: string
  title: string
  htmlContent: string
}>()

const emit = defineEmits<{
  close: []
}>()
</script>

<template>
  <Transition name="fade">
    <div v-if="visible" class="overlay-container">
      <div class="overlay-backdrop" @click="emit('close')" />
      <div class="dialog" :style="{ backgroundColor: color }">
        <div class="dialog-header">
          <h1 class="dialog-title">{{ title }}</h1>
          <button @click="emit('close')" class="dialog-close" aria-label="Close">
            &times;
          </button>
        </div>
        <div class="dialog-content">
          <div v-html="htmlContent" />
          <div class="dialog-bottom">
            <button @click="emit('close')" class="close-button">Close</button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
