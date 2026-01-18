<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { marked } from 'marked'
import { blogPosts } from '@/data/BlogData'

const route = useRoute()
const router = useRouter()

const post = computed(() => {
  return blogPosts.find(p => p.slug === route.params.slug)
})

const htmlContent = computed(() => {
  if (!post.value) return ''
  return marked(post.value.content)
})

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function goBack() {
  router.push('/blog')
}
</script>

<template>
  <div class="page blog-post">
    <button @click="goBack" class="back-button">
      ← Back to Blog
    </button>

    <div v-if="post" class="post-content">
      <header class="post-header">
        <h1 class="post-title">{{ post.title }}</h1>
        <div class="post-meta">
          <time class="post-date">{{ formatDate(post.date) }}</time>
          <div class="post-tags">
            <span v-for="tag in post.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>
        </div>
      </header>

      <article class="post-body" v-html="htmlContent"></article>
    </div>

    <div v-else class="not-found">
      <h2>Post not found</h2>
      <p>The blog post you're looking for doesn't exist.</p>
    </div>
  </div>
</template>

<style scoped>
.back-button {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  cursor: pointer;
  transition: all var(--transition-fast);
  margin-bottom: var(--spacing-2xl);
}

.back-button:hover {
  background: var(--color-bg-elevated);
  color: var(--color-text-primary);
}

.post-content {
  max-width: 800px;
}

.post-header {
  margin-bottom: var(--spacing-2xl);
}

.post-title {
  margin-bottom: var(--spacing-lg);
}

.post-meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

.post-date {
  color: var(--color-text-muted);
  font-size: var(--font-size-sm);
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.tag {
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-sm);
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  color: var(--color-accent);
}

.post-body {
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}

/* Markdown content styles */
.post-body :deep(h1),
.post-body :deep(h2),
.post-body :deep(h3) {
  color: var(--color-text-primary);
  margin-top: var(--spacing-2xl);
  margin-bottom: var(--spacing-lg);
}

.post-body :deep(h1) {
  font-size: var(--font-size-3xl);
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.post-body :deep(h2) {
  font-size: var(--font-size-2xl);
}

.post-body :deep(h3) {
  font-size: var(--font-size-xl);
}

.post-body :deep(p) {
  margin-bottom: var(--spacing-lg);
}

.post-body :deep(ul),
.post-body :deep(ol) {
  margin-bottom: var(--spacing-lg);
  padding-left: var(--spacing-xl);
}

.post-body :deep(li) {
  margin-bottom: var(--spacing-sm);
}

.post-body :deep(code) {
  background: var(--glass-bg);
  padding: 2px 6px;
  border-radius: var(--radius-sm);
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
  color: var(--color-accent);
}

.post-body :deep(pre) {
  background: var(--color-bg-secondary);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  padding: var(--spacing-lg);
  overflow-x: auto;
  margin-bottom: var(--spacing-lg);
}

.post-body :deep(pre code) {
  background: none;
  padding: 0;
  color: var(--color-text-primary);
}

.post-body :deep(a) {
  color: var(--color-accent);
  text-decoration: underline;
}

.post-body :deep(a:hover) {
  color: var(--color-accent-hover);
}

.not-found {
  text-align: center;
  padding: var(--spacing-3xl) 0;
}

.not-found h2 {
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
}

.not-found p {
  color: var(--color-text-secondary);
}
</style>
