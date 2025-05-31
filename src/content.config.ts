import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// Post collection schema
const blogCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/blog",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string(),
    description: z.string(),
    date: z.date().optional(),
    image: z.string().optional(),
    categories: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/pages" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// about collection schema
const aboutCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/about",
  }),
  schema: z.object({
    title: z.string().optional(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    images_gallery: z.array(z.string()),
    blog_section: z.object({
      enable: z.boolean(),
      title: z.string().optional(),
      subtitle: z.string(),
      description: z.string().optional(),
      show_blog_count: z.number(),
    }),
    team_section: z.object({
      enable: z.boolean(),
      title: z.string().optional(),
      subtitle: z.string(),
      members: z.array(
        z.object({
          name: z.string(),
          designation: z.string(),
          avatar: z.string().optional(),
        }),
      ),
    }),
    draft: z.boolean(),
  }),
});

// reviews collection schema
const reviewsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/reviews" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    testimonials: z.array(
      z.object({
        name: z.string(),
        designation: z.string(),
        content: z.string(),
        avatar: z.string().optional(),
        featured: z.boolean().optional(),
      }),
    ),
  }),
});

// contact collection schema
const contactCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/contact" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    address_section: z.object({
      title: z.string(),
      description: z.string(),
    }),
    draft: z.boolean().optional(),
  }),
});

// Homepage collection schema
const homepageCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/homepage" }),
  schema: z.object({
    banner: z.object({
      title: z.string(),
      content: z.string(),
      image: z.string(),
      spinning_text: z.string().optional(),
      button: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
    }),
    gallery: z.object({
      enable: z.boolean(),
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
      images: z.array(z.string()),
    }),
    fun_facts: z.object({
      enable: z.boolean(),
      title: z.string(),
      description: z.string(),
      metrics: z.array(
        z.object({
          name: z.string(),
          description: z.string(),
          counter: z.object({
            count: z.string(),
            count_suffix: z.string(),
            count_prefix: z.string(),
            count_duration: z.number(),
          }),
        }),
      ),
    }),
    services: z.object({
      enable: z.boolean(),
      title: z.string(),
      subtitle: z.string(),
      button: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
    }),
    services_facts: z.object({
      enable: z.boolean(),
      title: z.string(),
      subtitle: z.string(),
      metrics: z.array(z.object({ name: z.string(), description: z.string() })),
    }),
    projects: z.object({
      enable: z.boolean(),
      title: z.string(),
      subtitle: z.string(),
      button: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
    }),
  }),
});

// Services collection schema
const servicesCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/services",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string(),
    description: z.string(),
    date: z.date().optional(),
    image: z.string().optional(),
    categories: z.array(z.string()).optional(),
    featured_in_homepage: z.boolean().optional(),
    features: z
      .array(
        z.object({
          name: z.string().optional(),
          description: z.string().optional(),
        }),
      )
      .optional(),
    draft: z.boolean().optional(),
  }),
});

// Career collecitons schema
const careerCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/career",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string(),
    description: z.string(),
    image: z.string(),
    available_jobs: z.object({
      title: z.string(),
      description: z.string(),
      jobs: z
        .array(
          z.object({
            name: z.string(),
            location: z.string(),
            link: z.string(),
          }),
        )
        .optional(),
    }),
  }),
});

// Gallery collection schema
const galleryCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/gallery" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string(),
    description: z.string(),
    image: z.string(),
    gallery_images: z.array(
      z.object({
        design: z.string(),
        designer: z.string(),
        image: z.string(),
      }),
    ),
  }),
});

// FAQs collection schema
const faqsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/faqs" }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    badge: z.object({
      enable: z.boolean(),
      label: z.string(),
      icon: z.string().optional(),
      bg_color: z.string(),
    }),
    button: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
    list: z.array(z.object({ question: z.string(), answer: z.string() })),
  }),
});

const projectsCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string(),
    description: z.string(),
    date: z.date().optional(),
    image: z.string().optional(),
    featured_in_homepage: z.boolean().optional(),
    client_name: z.string().optional(),
    project_type: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Call to Action collection schema
const ctaSectionCollection = defineCollection({
  loader: glob({
    pattern: "call-to-action.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    button_solid: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
    button_outline: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
  }),
});

// Export collections
export const collections = {
  // Pages
  homepage: homepageCollection,
  blog: blogCollection,
  pages: pagesCollection,
  about: aboutCollection,
  contact: contactCollection,
  services: servicesCollection,
  projects: projectsCollection,
  gallery: galleryCollection,
  career: careerCollection,
  reviews: reviewsCollection,
  faqs: faqsCollection,

  // sections
  ctaSection: ctaSectionCollection,
};
