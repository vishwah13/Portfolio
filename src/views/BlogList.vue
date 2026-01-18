<script setup lang="ts">
import { blogPosts } from '@/data/BlogData'
import { useRouter } from 'vue-router'

const router = useRouter()

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function navigateToPost(slug: string) {
  router.push(`/blog/${slug}`)
}
</script>

<template>
  <div class="page blog-list">
    <h1>Blog</h1>

    <p class="mb-xl text-secondary">
      Thoughts on graphics programming, game engines, and rendering techniques.
    </p>

    <div class="blog-posts">
      <article
        v-for="post in blogPosts"
        :key="post.slug"
        class="blog-card glass-card-hover"
        @click="navigateToPost(post.slug)"
      >
        <div class="blog-card-header">
          <h2 class="blog-title">{{ post.title }}</h2>
          <time class="blog-date">{{ formatDate(post.date) }}</time>
        </div>

        <p class="blog-excerpt">{{ post.excerpt }}</p>

        <div class="blog-tags">
          <span v-for="tag in post.tags" :key="tag" class="tag">
            {{ tag }}
          </span>
        </div>

        <div class="blog-read-more">
          Read more →
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.text-secondary {
  color: var(--color-text-secondary);
}

.blog-posts {
  display: grid;
  gap: var(--spacing-xl);
  max-width: 800px;
}

.blog-card {
  padding: var(--spacing-xl);
  cursor: pointer;
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.blog-card:hover {
  transform: translateY(-4px);
}

.blog-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.blog-title {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0;
  flex: 1;
}

.blog-date {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  white-space: nowrap;
}

.blog-excerpt {
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-lg);
  line-height: var(--line-height-relaxed);
}

.blog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
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

.blog-read-more {
  color: var(--color-accent);
  font-weight: 500;
  font-size: var(--font-size-sm);
}
</style>
