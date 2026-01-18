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
    slug: 'getting-started-vulkan',
    title: 'Getting Started with Vulkan: A Beginner\'s Guide',
    excerpt: 'Learn the fundamentals of Vulkan API and set up your first rendering pipeline with modern graphics programming.',
    date: '2024-01-15',
    tags: ['Vulkan', 'Graphics', 'C++'],
    content: `# Getting Started with Vulkan

Vulkan is a low-level graphics API that gives you explicit control over the GPU. In this post, I'll walk you through setting up your first Vulkan application.

## Why Vulkan?

- **Performance**: Direct control over GPU resources
- **Portability**: Cross-platform support (Windows, Linux, Android, etc.)
- **Modern**: Designed for multi-threaded rendering

## Setting Up

First, you'll need to install the Vulkan SDK...

\`\`\`cpp
// Initialize Vulkan instance
VkApplicationInfo appInfo{};
appInfo.sType = VK_STRUCTURE_TYPE_APPLICATION_INFO;
appInfo.pApplicationName = "Hello Vulkan";
appInfo.applicationVersion = VK_MAKE_VERSION(1, 0, 0);
\`\`\`

## Next Steps

Stay tuned for more posts about creating render passes, descriptor sets, and building a full rendering engine!
`
  },
  {
    slug: 'pbr-rendering-explained',
    title: 'Physically Based Rendering: The Complete Guide',
    excerpt: 'Deep dive into PBR theory, BRDF equations, and implementing metallic-roughness workflow in your game engine.',
    date: '2024-01-10',
    tags: ['PBR', 'Rendering', 'Graphics'],
    content: `# Physically Based Rendering Explained

Physically Based Rendering (PBR) has become the standard for realistic rendering in modern games and real-time applications.

## What is PBR?

PBR is a shading model that aims to simulate light in a physically accurate way. The key principles are:

1. **Energy Conservation**: Light reflected cannot exceed light received
2. **Fresnel Effect**: Reflectance changes based on viewing angle
3. **Microfacet Theory**: Surface roughness affects light scattering

## The Metallic-Roughness Workflow

Most modern engines use this workflow:

- **Base Color**: The diffuse color or albedo
- **Metallic**: How metallic the surface is (0-1)
- **Roughness**: How rough the surface is (0-1)
- **Normal Map**: Surface detail

\`\`\`glsl
// Simplified PBR shader
vec3 F0 = mix(vec3(0.04), albedo, metallic);
vec3 fresnel = fresnelSchlick(NdotV, F0);
\`\`\`

## Implementation Tips

In my Agni engine, I use a deferred rendering pipeline with G-buffers storing these PBR properties...
`
  }
]
