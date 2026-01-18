export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  tags: string[]
  content: string
  coverImage?: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'sample-blog-post',
    title: 'Sample Blog Post',
    excerpt: 'This is a placeholder blog post. More content coming soon!',
    date: '2024-01-18',
    tags: ['Graphics', 'Programming'],
    content: `# Lorem Ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## Dolor Sit Amet

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### Consectetur Adipiscing

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

- Nemo enim ipsam voluptatem
- Quia voluptas sit aspernatur
- Aut odit aut fugit

## Code Example

\`\`\`cpp
// Sample code
void example() {
    std::cout << "Hello World" << std::endl;
}
\`\`\`

Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
`
  }
]
