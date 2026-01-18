<script setup lang="ts">
import { ref } from 'vue'
import ProjectDetailsOverlay from '@/components/ProjectDetailsOverlay.vue'
import type { ProjectData } from '@/data/ProjectData'

defineProps<{
  projects: ProjectData[]
}>()

const showPopup = ref(false)
const popupTitle = ref('')
const popupColor = ref('')
const popupContent = ref('')

const baseUrl = import.meta.env.BASE_URL

// Resolve image URL with base path for local assets
function resolveImageUrl(url: string): string {
  // External URLs (http/https) stay as-is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url
  }
  // Local paths get base URL prepended
  const cleanUrl = url.startsWith('/') ? url.slice(1) : url
  return `${baseUrl}${cleanUrl}`
}

// Fix all local image/video paths in HTML content
function fixHtmlPaths(html: string): string {
  // Fix src="/img/..." and src="/d/..." paths
  return html.replace(/src="\/(?!\/|http)/g, `src="${baseUrl}`)
}

function showDetails(project: ProjectData) {
  popupTitle.value = project.name
  popupColor.value = project.accentColor
  popupContent.value = fixHtmlPaths(project.htmlDescription)
  showPopup.value = true
  window.scrollTo(0, 0)
}

function closePopup() {
  showPopup.value = false
}
</script>

<template>
  <div>
    <div class="projects-list">
      <div
        v-for="project in projects"
        :key="project.id"
        @click="showDetails(project)"
        class="project-item"
        :class="{ wide: project.isWide, high: project.isHigh }"
      >
        <div
          class="project-item-image"
          :style="{ backgroundImage: `url(${resolveImageUrl(project.iconUrl)})` }"
        />
        <div class="title-bar">
          <div class="title-text">{{ project.name }}</div>
        </div>
      </div>
    </div>

    <ProjectDetailsOverlay
      :visible="showPopup"
      :title="popupTitle"
      :html-content="popupContent"
      :color="popupColor"
      @close="closePopup"
    />
  </div>
</template>
