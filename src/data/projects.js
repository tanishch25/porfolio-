/**
 * ============================================================================
 * ASSET MAPPING INSTRUCTIONS FOR TANISH
 * ============================================================================
 * 
 * To map your local image and video files into this portfolio grid:
 * 1. Place your images/videos inside the `public/projects/` folder of this project.
 *    (e.g., `public/projects/aetheria-dashboard.jpg` or `public/projects/demo.mp4`)
 * 2. In the array below, change the `image` property to start with `/projects/`
 *    followed by your exact filename.
 *    Example: image: "./projects/my-landing-page.png"
 * 
 * We have pre-populated this array with curated high-resolution placeholder images
 * so that your portfolio immediately looks like an Awwwards Site of the Day!
 * Replace them whenever you are ready.
 * ============================================================================
 */

export const projectsData = [
  {
    id: "landing-fast-food",
    title: "Landing Page for Fast Food Chain",
    category: "Landing Page",
    type: "High-Velocity Frontend & Branding",
    year: "2026",
    client: "Global Burger Co.",
    description: "Designed and developed an ultra-lightweight, highly engaging landing page to showcase limited-time offers and drive online orders.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop",
    media: "./projects/zing-fast-food.mp4",
    mediaType: "video",
    colSpan: "col-span-12 md:col-span-7",
    aspectRatio: "aspect-[16/10]",
    link: "#",
    metrics: "+42% Online Orders",
  },
  {
    id: "landing-premium-gym",
    title: "Landing Page for Premium Gym",
    category: "Landing Page",
    type: "CRO Strategy & Web Development",
    year: "2025",
    client: "Equinox Fitness",
    description: "Architected a high-converting, luxury aesthetic landing page utilizing bespoke typography and lenis smooth scrolling to capture premium membership leads.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    media: "./projects/zeus.mp4",
    mediaType: "video",
    colSpan: "col-span-12 md:col-span-5",
    aspectRatio: "aspect-[4/5] md:aspect-[10/11]",
    link: "#",
    metrics: "+380% Lead Conversion",
  },
  {
    id: "data-analytics-olist",
    title: "Data Analytics for Olist Ecommerce",
    category: "Data Strategy",
    type: "Deep-Dive Data Exploration",
    year: "2025",
    client: "Olist Market",
    description: "Dived deep into massive Brazilian e-commerce datasets to uncover hidden delivery bottlenecks, formulate multi-touch attribution models, and engineer high-converting growth funnels.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    media: "./projects/olist-analysis.mp4",
    mediaType: "video",
    colSpan: "col-span-12 md:col-span-5",
    aspectRatio: "aspect-[4/5] md:aspect-[10/11]",
    link: "#",
    metrics: "Supply Chain Optimized",
  },
  {
    id: "paper-pinn-churn",
    title: "Paper on PINN for Gym Churn Prediction",
    category: "Scientific Research",
    type: "Physics-Informed Neural Networks",
    year: "2026",
    client: "Academic Publication",
    description: "Authored a groundbreaking research paper leveraging Physics-Informed Neural Networks (PINNs) to simulate and predict member churn patterns in the premium fitness industry.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
    media: "./projects/PINN-paper.pdf",
    mediaType: "pdf",
    colSpan: "col-span-12 md:col-span-7",
    aspectRatio: "aspect-[16/10]",
    link: "./projects/PINN-paper.pdf",
    metrics: "Peer-Reviewed Architecture",
  }
];

export const heroMediaPool = [
  "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
];
