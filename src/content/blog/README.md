# Blog Content Directory

## How to Add a New Blog Post

1. **Edit `src/data/BlogData.ts`**
2. **Add a new entry to the `blogPosts` array:**

```typescript
{
  slug: 'my-new-post',           // URL slug: /blog/my-new-post
  title: 'My Blog Post Title',
  excerpt: 'Short description for the blog list page',
  date: '2024-01-20',           // YYYY-MM-DD format
  tags: ['Tag1', 'Tag2'],       // Array of tags
  content: `# Your Markdown Content Here

Write your blog post content in Markdown format.

## Supported Markdown

- **Bold** and *italic* text
- [Links](https://example.com)
- Code blocks with syntax highlighting
- Lists (ordered and unordered)
- Images
- And more!

\`\`\`cpp
// Code example
void myFunction() {
    // Your code here
}
\`\`\`
  `
}
```

3. **Save and refresh** - your new post will appear!

## Tips

- Use meaningful slugs (they become URLs)
- Keep excerpts under 160 characters
- Add relevant tags for filtering (future feature)
- Write content in Markdown for easy formatting
