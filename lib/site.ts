// Central place for brand + copy. Edit this file to rebrand the site.

export const site = {
  name: "Helix Studio",
  shortName: "Helix",
  tagline: "Design & engineering studio for ambitious products",
  description:
    "Helix Studio is a senior team of designers and engineers building fast, beautiful web and mobile products — from first prototype to scale.",
  url: "https://example.com",
  email: "hello@example.com",
  phone: "+1 (555) 010-2048",
  location: "Remote · Worldwide",
  calendly: "#contact",
  socials: {
    linkedin: "https://www.linkedin.com/",
    x: "https://x.com/",
    github: "https://github.com/",
    dribbble: "https://dribbble.com/",
  },
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

// Placeholder client wordmarks (fictional). Replace with real clients you have permission to show.
export const clients = [
  "Northwind",
  "Quantica",
  "Lumen Health",
  "Orbitly",
  "Fernway",
  "Kinetic",
  "Paperplane",
  "Vaultline",
  "Brightloop",
  "Solace",
];

export const services = [
  {
    id: "web",
    title: "Web Apps & Platforms",
    body: "Blazing-fast Next.js and React products engineered for conversion, SEO and scale — from marketing sites to complex SaaS dashboards.",
    tags: ["Next.js", "React", "TypeScript", "Node"],
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    body: "Native-feeling iOS & Android apps with React Native and Flutter, shipped to the stores with analytics, push and payments baked in.",
    tags: ["React Native", "Flutter", "Expo"],
  },
  {
    id: "design",
    title: "Product & UI/UX Design",
    body: "Research-led design systems, prototypes and interfaces that users love and investors remember.",
    tags: ["Figma", "Design Systems", "Prototyping"],
  },
  {
    id: "ai",
    title: "AI Integrations",
    body: "Assistants, smart search and workflow automation powered by modern LLMs — wired safely into your product and data.",
    tags: ["LLMs", "RAG", "Agents"],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    body: "Secure, observable infrastructure with CI/CD, autoscaling and 99.9% uptime — so you can ship daily without fear.",
    tags: ["AWS", "Vercel", "Docker"],
  },
  {
    id: "growth",
    title: "Growth & Optimisation",
    body: "Core Web Vitals, A/B testing and analytics that turn traffic into revenue, measured every sprint.",
    tags: ["CRO", "Analytics", "SEO"],
  },
] as const;

export const stats = [
  { value: 180, suffix: "+", label: "Products launched" },
  { value: 98, suffix: "%", label: "Client retention" },
  { value: 4.9, suffix: "/5", label: "Average rating", decimals: 1 },
  { value: 12, suffix: "M+", label: "End users served" },
];

// Case studies are illustrative placeholders — swap in your own projects.
export const work = [
  {
    title: "Fintech dashboard that cut onboarding time in half",
    client: "Vaultline",
    category: "SaaS · Web App",
    result: "+212% activation",
    palette: ["#6366F1", "#A855F7"],
    kind: "dashboard",
  },
  {
    title: "Telehealth app booking 40k appointments a month",
    client: "Lumen Health",
    category: "Mobile · iOS & Android",
    result: "4.8★ App Store",
    palette: ["#06B6D4", "#3B82F6"],
    kind: "mobile",
  },
  {
    title: "E-commerce rebuild with sub-second page loads",
    client: "Fernway",
    category: "Headless Commerce",
    result: "+64% conversion",
    palette: ["#F97316", "#EC4899"],
    kind: "commerce",
  },
  {
    title: "AI copilot that answers 80% of support tickets",
    client: "Orbitly",
    category: "AI · Automation",
    result: "-73% support cost",
    palette: ["#10B981", "#14B8A6"],
    kind: "ai",
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Discover",
    body: "A free strategy call and a focused workshop to map goals, users and the fastest path to value.",
    time: "Week 1",
  },
  {
    step: "02",
    title: "Design",
    body: "Clickable prototypes and a design system you can test with real users before a line of code.",
    time: "Weeks 2–3",
  },
  {
    step: "03",
    title: "Build",
    body: "Weekly demos, a live staging link and transparent progress in your Slack. No black boxes.",
    time: "Weeks 3–10",
  },
  {
    step: "04",
    title: "Launch & Grow",
    body: "Zero-downtime launch, monitoring and a growth roadmap. We stay on as your long-term product partner.",
    time: "Ongoing",
  },
];

// Placeholder testimonials — replace with genuine quotes from your clients.
export const testimonials = [
  {
    quote:
      "They shipped in 8 weeks what our previous agency couldn't in 8 months. The quality of the code and design is exceptional.",
    name: "Sarah Chen",
    role: "CEO, Vaultline",
  },
  {
    quote:
      "Feels like an in-house team. Proactive, honest about trade-offs and obsessed with the details our users notice.",
    name: "Marcus Webb",
    role: "CTO, Lumen Health",
  },
  {
    quote:
      "Our conversion rate jumped 64% after the rebuild. The site is ridiculously fast and our team loves editing it.",
    name: "Priya Nair",
    role: "Head of Growth, Fernway",
  },
  {
    quote:
      "The AI assistant they built now handles most of our tickets. It paid for the whole engagement in three months.",
    name: "Daniel Okafor",
    role: "COO, Orbitly",
  },
  {
    quote:
      "Clear communication, weekly demos and zero surprises on the invoice. Easily the best partner we've worked with.",
    name: "Elena Rossi",
    role: "Founder, Brightloop",
  },
  {
    quote:
      "From pitch deck prototype to Series A product. Helix was with us every step and investors noticed the polish.",
    name: "Tom Harlow",
    role: "Co-founder, Quantica",
  },
];

export const pricing = [
  {
    name: "Launch",
    price: "$8k",
    cadence: "starting at",
    blurb: "A high-converting website or landing experience, live in weeks.",
    features: [
      "Custom design & copy polish",
      "Next.js build, CMS included",
      "SEO & analytics setup",
      "Launch in 3–4 weeks",
    ],
    cta: "Start a website",
    featured: false,
  },
  {
    name: "Product",
    price: "$25k",
    cadence: "starting at",
    blurb: "Design and build an MVP or full product with a dedicated squad.",
    features: [
      "Discovery & UX workshop",
      "Web and/or mobile app",
      "Auth, payments & integrations",
      "Weekly demos & staging",
      "30 days post-launch support",
    ],
    cta: "Build my product",
    featured: true,
  },
  {
    name: "Partner",
    price: "$9k",
    cadence: "per month",
    blurb: "An embedded team that ships continuously alongside yours.",
    features: [
      "Designer + engineers on demand",
      "Priority turnaround",
      "Roadmap & growth experiments",
      "Pause or cancel anytime",
    ],
    cta: "Talk to us",
    featured: false,
  },
];

export const faqs = [
  {
    q: "How quickly can you start?",
    a: "Usually within 1–2 weeks. After a free 30-minute call we send a clear proposal with scope, timeline and fixed pricing within 48 hours.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes — roughly half our clients are founders going from idea to MVP. We help prioritise ruthlessly so you launch fast and learn from real users.",
  },
  {
    q: "Who owns the code and designs?",
    a: "You do, 100%. Everything lives in your repositories and Figma from day one, with full documentation and a smooth handover.",
  },
  {
    q: "How do you communicate during a project?",
    a: "A shared Slack channel, weekly demo calls, a live staging link and a simple progress board. You'll always know exactly where things stand.",
  },
  {
    q: "Can you take over an existing codebase?",
    a: "Absolutely. We start with a short technical audit, share a prioritised plan, then improve performance, stability and velocity step by step.",
  },
  {
    q: "What happens after launch?",
    a: "Every project includes post-launch support. Many clients continue on our Partner plan for ongoing features, optimisation and growth.",
  },
];
