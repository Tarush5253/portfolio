// Single source of truth for all portfolio content.
// Update this file to change text anywhere on the site.

const devicon = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`
const simple = (slug: string) => `https://cdn.simpleicons.org/${slug}`

export type Tech = { name: string; icon?: string }

/** Every technology referenced on the site, with its official logo. */
export const tech = {
  javascript: { name: "JavaScript", icon: devicon("javascript") },
  typescript: { name: "TypeScript", icon: devicon("typescript") },
  python: { name: "Python", icon: devicon("python") },
  java: { name: "Java", icon: devicon("java") },
  cpp: { name: "C / C++", icon: devicon("cplusplus") },
  html: { name: "HTML5", icon: devicon("html5") },
  css: { name: "CSS3", icon: devicon("css3") },
  sql: { name: "SQL", icon: devicon("azuresqldatabase") },

  react: { name: "React", icon: devicon("react") },
  nextjs: { name: "Next.js", icon: devicon("nextjs") },
  redux: { name: "Redux", icon: devicon("redux") },
  reactNative: { name: "React Native (Expo)", icon: devicon("expo") },
  tailwind: { name: "Tailwind CSS", icon: devicon("tailwindcss") },
  mui: { name: "Material UI", icon: devicon("materialui") },
  bootstrap: { name: "Bootstrap", icon: devicon("bootstrap") },
  ejs: { name: "EJS", icon: simple("ejs") },

  nodejs: { name: "Node.js", icon: devicon("nodejs") },
  nestjs: { name: "NestJS", icon: devicon("nestjs") },
  express: { name: "Express.js", icon: devicon("express") },
  socketio: { name: "Socket.io", icon: devicon("socketio") },
  rest: { name: "REST APIs" },
  websockets: { name: "WebSockets" },
  microservices: { name: "Microservices" },

  mongodb: { name: "MongoDB", icon: devicon("mongodb") },
  postgresql: { name: "PostgreSQL", icon: devicon("postgresql") },
  mysql: { name: "MySQL", icon: devicon("mysql") },
  prisma: { name: "Prisma", icon: devicon("prisma") },
  supabase: { name: "Supabase", icon: devicon("supabase") },
  firebase: { name: "Firebase", icon: devicon("firebase") },
  appwrite: { name: "Appwrite", icon: devicon("appwrite") },
  redis: { name: "Redis", icon: devicon("redis") },
  bullmq: { name: "BullMQ" },

  gemini: { name: "Gemini API", icon: simple("googlegemini") },
  langchain: { name: "LangChain", icon: simple("langchain") },
  huggingface: { name: "Hugging Face", icon: simple("huggingface") },
  n8n: { name: "n8n", icon: simple("n8n") },
  openai: { name: "OpenAI API" },
  embeddings: { name: "Embeddings" },
  vectordb: { name: "Vector DBs" },
  rag: { name: "RAG" },
  agents: { name: "AI Agents" },

  aws: { name: "AWS EC2", icon: devicon("amazonwebservices", "original-wordmark") },
  docker: { name: "Docker", icon: devicon("docker") },
  githubActions: { name: "GitHub Actions", icon: devicon("githubactions") },
  vercel: { name: "Vercel", icon: devicon("vercel") },
  render: { name: "Render", icon: simple("render") },
  railway: { name: "Railway", icon: simple("railway") },
  netlify: { name: "Netlify", icon: devicon("netlify") },
  linux: { name: "Linux", icon: devicon("linux") },

  git: { name: "Git", icon: devicon("git") },
  github: { name: "GitHub", icon: devicon("github") },
  postman: { name: "Postman", icon: devicon("postman") },
  hoppscotch: { name: "Hoppscotch", icon: simple("hoppscotch") },
  vscode: { name: "VS Code", icon: devicon("vscode") },

  razorpay: { name: "Razorpay / X", icon: simple("razorpay") },
  payu: { name: "PayU" },
  shopify: { name: "Shopify", icon: simple("shopify") },
  wix: { name: "Wix", icon: simple("wix") },
  bubble: { name: "Bubble" },
  lulu: { name: "Lulu" },
  delhivery: { name: "Delhivery" },
  maptiler: { name: "MapTiler", icon: simple("maptiler") },
  zegocloud: { name: "ZegoCloud" },
  tinymce: { name: "TinyMCE" },
} satisfies Record<string, Tech>

export const profile = {
  name: "Tarush Ruhela",
  firstName: "Tarush",
  role: "Full Stack Developer",
  tagline: "I build production web apps and AI systems that people rely on every day.",
  summary:
    "Full Stack Developer at BookLeaf Publishing, owning systems used by 10,000+ authors. I work across Next.js, Node.js and NestJS, and I build LLM features, RAG pipelines and automations that save teams hours.",
  rotatingWords: ["full-stack products", "LLM & RAG systems", "payment workflows", "automation pipelines"],
  location: "Ghaziabad, India",
  email: "tarushruhela1234@gmail.com",
  phone: "+91 93115 25316",
  available: "Open to full-time roles",
  siteUrl: "https://founder.freewaystudy.in",
  // Drop your resume PDF into /public and set this to "/Tarush_Ruhela_Resume.pdf" to show a Resume button.
  resumeUrl: "/resume/Tarush_Full_Stack_Developer_CV.pdf",
  portrait: "/images/tarush-portrait.jpg",
  candid: "/images/tarush-sunset.jpg",
  socials: {
    github: "https://github.com/tarush5253",
    linkedin: "https://www.linkedin.com/in/tarushruhela/",
    leetcode: "https://leetcode.com/u/Tarush5253/",
    instagram: "https://www.instagram.com/t_rush0r",
  },
}

export const stats = [
  { value: 2, suffix: "+", label: "Years shipping to production" },
  { value: 10, suffix: "K+", label: "Authors on systems I own" },
  { value: 300, suffix: "K+", label: "Records in pipelines I run" },
  { value: 150, suffix: "+", label: "DSA problems solved" },
]

export const focusAreas = [
  {
    title: "Full-stack product engineering",
    body: "From database schema to pixel-perfect UI. Next.js, Node, NestJS, Postgres and Mongo.",
  },
  {
    title: "LLM, RAG & AI agents",
    body: "Grounded answers over private data with embeddings, vector search and tool-calling agents.",
  },
  {
    title: "Payments, ops & automation",
    body: "RazorpayX payouts, PayU checkouts, fulfilment integrations and n8n workflows.",
  },
]

export type Experience = {
  role: string
  company: string
  companyNote?: string
  period: string
  location: string
  current?: boolean
  highlight: string
  points: string[]
  stack: Tech[]
  links?: { label: string; url: string }[]
}

export const experience: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "BookLeaf Publishing",
    companyNote: "Libresco Feeds Pvt Ltd",
    period: "Feb 2026 — Present",
    location: "Delhi, India",
    current: true,
    highlight: "Own production systems for 10,000+ authors",
    points: [
      "Own publishing, payouts, sales reporting and order-fulfilment systems end to end.",
      "Built internal tools for RazorpayX payouts and royalty processing over 300K+ Supabase records.",
      "Shipped a public sales leaderboard and an eBook reader; extended the Bubble author platform with dynamic author websites.",
      "Integrated Lulu, Delhivery, Shopify, Wix, Gemini LLMs and n8n automation.",
    ],
    stack: [tech.nextjs, tech.supabase, tech.razorpay, tech.gemini, tech.n8n, tech.shopify],
    links: [
      { label: "Sales leaderboard", url: "https://leaderboard.bookleafpub.in/" },
      { label: "eBook reader", url: "https://reader.bookleafpub.in/" },
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Number11",
    companyNote: "Product-based company",
    period: "Jun 2025 — Feb 2026",
    location: "Noida, India",
    highlight: "Built the InstantJob recruitment platform",
    points: [
      "Developed InstantJob with Next.js, Node.js, Express and MongoDB.",
      "Designed REST APIs and backend workflows; supported CI/CD for production releases.",
      "Improved reliability and speed with indexing, caching and API redesign.",
    ],
    stack: [tech.nextjs, tech.nodejs, tech.express, tech.mongodb],
    links: [
      { label: "InstantJob", url: "https://www.instantjob.in/" },
      { label: "Offer letter", url: "https://drive.google.com/file/d/1_y-uyW45a-OBa_HbRqiuuOsrIoXwVZyn/view?usp=sharing" },
      { label: "Experience letter", url: "https://drive.google.com/file/d/1b1QlwmOOgzkYJQNt07Pz1_TKLp9BlSxo/view?usp=sharing" },
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "AIDEOA",
    companyNote: "All India Diploma Engineers Officials Association",
    period: "Oct 2024 — Apr 2025",
    location: "Remote",
    highlight: "PayU checkout handling 500+ monthly transactions",
    points: [
      "Built responsive interfaces for aideoa.org.in with React and Tailwind CSS.",
      "Developed REST APIs with Node.js, Express, MySQL and Prisma.",
      "Integrated PayU payment workflows processing 500+ transactions a month.",
    ],
    stack: [tech.react, tech.tailwind, tech.nodejs, tech.mysql, tech.prisma, tech.payu],
    links: [
      { label: "aideoa.org.in", url: "https://www.aideoa.org.in/" },
      { label: "Offer letter", url: "https://drive.google.com/file/d/1ot9QK-SWljPgQULUFiUmioXdMrZGat3T/view?usp=sharing" },
      { label: "Certificate", url: "https://drive.google.com/file/d/1k5eko-XXl_5M1Mb9KwnWtoqnfCChy0P5/view?usp=sharing" },
      { label: "Experience letter", url: "https://drive.google.com/file/d/1yeSxD841I0l0GgFJI-E1BsyAw-RtsxD5/view?usp=sharing" },
    ],
  },
  {
    role: "Founder & Lead Developer",
    company: "Freeway Study",
    companyNote: "EdTech platform",
    period: "2024 — Present",
    location: "Ghaziabad, India",
    current: true,
    highlight: "AI-generated portfolios on live subdomains",
    points: [
      "Built FreewayStudy.in from scratch on the MERN stack: auth, courses and admin dashboards.",
      "Deployed and run production infrastructure on cloud VPS.",
      "Shipped AI-powered portfolio generation served on per-user subdomains.",
    ],
    stack: [tech.mongodb, tech.express, tech.react, tech.nodejs, tech.gemini, tech.aws],
    links: [{ label: "freewaystudy.in", url: "https://www.freewaystudy.in/" }],
  },
]

export const skillGroups: { title: string; caption: string; items: Tech[] }[] = [
  {
    title: "Languages",
    caption: "Typed, scripted and compiled",
    items: [tech.typescript, tech.javascript, tech.python, tech.java, tech.cpp, tech.sql, tech.html, tech.css],
  },
  {
    title: "Frontend",
    caption: "Fast, accessible interfaces",
    items: [tech.react, tech.nextjs, tech.redux, tech.tailwind, tech.mui, tech.bootstrap],
  },
  {
    title: "Backend & APIs",
    caption: "Services that scale",
    items: [tech.nodejs, tech.express, tech.socketio, tech.redis, tech.bullmq],
  },
  {
    title: "Databases",
    caption: "Relational, document and realtime",
    items: [tech.postgresql, tech.mongodb, tech.mysql, tech.supabase, tech.prisma, tech.firebase, tech.appwrite],
  },
  {
    title: "AI & Automation",
    caption: "LLMs, retrieval and agents",
    items: [tech.gemini, tech.openai, tech.embeddings, tech.vectordb, tech.n8n],
  },
  {
    title: "Cloud & DevOps",
    caption: "Ship, observe, repeat",
    items: [tech.aws, tech.docker, tech.githubActions, tech.vercel, tech.render, tech.railway, tech.netlify, tech.linux],
  },
  {
    title: "Payments & Integrations",
    caption: "Money and logistics flows",
    items: [tech.razorpay, tech.payu, tech.shopify, tech.wix, tech.bubble, tech.lulu, tech.delhivery],
  },
  {
    title: "Tooling",
    caption: "Daily drivers",
    items: [tech.git, tech.github, tech.postman, tech.hoppscotch, tech.vscode],
  },
]

/** Logos shown in the moving strip under the hero. */
export const marqueeTech: Tech[] = [
  tech.typescript, tech.react, tech.nextjs, tech.nodejs, tech.postgresql, tech.mongodb,
  tech.supabase, tech.redis, tech.prisma, tech.gemini, tech.n8n, tech.docker,
  tech.aws, tech.tailwind, tech.python, tech.githubActions,
]

export const corePrinciples = [
  "Data structures & algorithms",
  "System design",
  "Distributed systems",
  "Concurrency control",
  "DBMS & OS",
  "OOP",
]

export const aiCapabilities = [
  {
    title: "Retrieval-augmented generation",
    body: "Chunking, embeddings and vector search that ground LLM answers in your own data, with sources.",
  },
  {
    title: "LLM product features",
    body: "Gemini and OpenAI integrations with structured outputs, prompt design and streaming UIs.",
  },
  {
    title: "Agents & automation",
    body: "Tool-calling agents and n8n workflows that take repetitive ops work off the team's plate.",
  },
]

export const ragPipeline = [
  { step: "Ingest", detail: "PDFs, docs, DB rows" },
  { step: "Chunk", detail: "Semantic splits" },
  { step: "Embed", detail: "Dense vectors" },
  { step: "Store", detail: "Vector index" },
  { step: "Retrieve", detail: "Top-k + rerank" },
  { step: "Generate", detail: "Grounded answer" },
]

export type Project = {
  slug: string
  title: string
  kind: "production" | "featured" | "archive"
  category: "Full Stack" | "AI" | "Frontend" | "Mini"
  summary: string
  badge?: string
  stack: Tech[]
  image?: string
  live?: string
  code?: string
  accent: string
}

export const projects: Project[] = [
  // Shipped at work
  {
    slug: "bookleaf-leaderboard",
    title: "BookLeaf Sales Leaderboard",
    kind: "production",
    category: "Full Stack",
    summary: "Public sales rankings for BookLeaf's community of 10,000+ authors.",
    badge: "In production",
    stack: [tech.nextjs, tech.supabase, tech.postgresql],
    image: "/project/bookleaf-leaderboard.jpg",
    live: "https://leaderboard.bookleafpub.in/",
    accent: "#b4532a",
  },
  {
    slug: "bookleaf-reader",
    title: "BookLeaf eBook Reader",
    kind: "production",
    category: "Full Stack",
    summary: "A clean, distraction-free web reader for BookLeaf titles.",
    badge: "In production",
    stack: [tech.nextjs, tech.supabase],
    image: "/project/bookleaf-reader.jpg",
    live: "https://reader.bookleafpub.in/",
    accent: "#4f6b58",
  },
  {
    slug: "instantjob",
    title: "InstantJob",
    kind: "production",
    category: "Full Stack",
    summary: "Recruitment platform connecting job seekers and employers, built at Number11.",
    badge: "In production",
    stack: [tech.nextjs, tech.nodejs, tech.express, tech.mongodb],
    image: "/project/instantjob.jpg",
    live: "https://www.instantjob.in/",
    accent: "#2f4a6b",
  },
  {
    slug: "freewaystudy",
    title: "Freeway Study",
    kind: "production",
    category: "AI",
    summary: "My EdTech platform with courses, dashboards and AI-generated portfolios on live subdomains.",
    badge: "Founder",
    stack: [tech.react, tech.nodejs, tech.mongodb, tech.gemini],
    image: "/project/freewaystudy.jpg",
    live: "https://www.freewaystudy.in/",
    accent: "#7a4b8c",
  },
  {
    slug: "aideoa",
    title: "AIDEOA Platform",
    kind: "production",
    category: "Full Stack",
    summary: "Association website with membership flows and PayU payments, 500+ transactions a month.",
    badge: "In production",
    stack: [tech.react, tech.nodejs, tech.mysql, tech.prisma],
    image: "/project/aideoa.jpg",
    live: "https://www.aideoa.org.in/",
    accent: "#8a6d1f",
  },

  // Featured personal projects
  {
    slug: "wanderlust",
    title: "Wanderlust",
    kind: "featured",
    category: "Full Stack",
    summary: "Airbnb-style rentals with auth, reviews, image uploads and interactive maps.",
    stack: [tech.nodejs, tech.express, tech.mongodb, tech.maptiler],
    image: "/project/wanderlust.png",
    live: "https://wanderlust-5lvq.onrender.com/listings",
    code: "https://github.com/tarush5253/major-project",
    accent: "#c0573c",
  },
  {
    slug: "ai-chatbot",
    title: "Nova AI Chatbot",
    kind: "featured",
    category: "AI",
    summary: "Conversational assistant on Google Gemini for real-time question answering.",
    stack: [tech.react, tech.gemini, tech.tailwind],
    image: "/project/chatgpt.png",
    live: "https://chat-with-chatbot.vercel.app/",
    code: "https://github.com/Tarush5253/ChatBOT",
    accent: "#2f6b62",
  },
  {
    slug: "swasthya-setu",
    title: "Swasthya Setu",
    kind: "featured",
    category: "Full Stack",
    summary: "Healthcare platform for requesting hospital beds and blood, built in 48 hours.",
    badge: "Hackathon winner",
    stack: [tech.nextjs, tech.nodejs, tech.mongodb],
    image: "/project/swasthya-setu.jpg",
    live: "https://swasthya-setu-nu.vercel.app/",
    accent: "#a23b3b",
  },
  {
    slug: "echomeet",
    title: "EchoMeet",
    kind: "featured",
    category: "Full Stack",
    summary: "Video conferencing with rooms, live chat and screen sharing.",
    stack: [tech.nextjs, tech.typescript, tech.zegocloud],
    image: "/project/echomeet.jpg",
    live: "https://echo-meet-ten.vercel.app/",
    accent: "#3d4f8f",
  },
  
  {
    slug: "ams",
    title: "Attendance Management System",
    kind: "featured",
    category: "Full Stack",
    summary: "Role-based HOD, teacher and student dashboards with analytics and PDF/Excel export.",
    stack: [tech.react, tech.nodejs, tech.mongodb, tech.mui],
    image: "/project/AMS.png",
    live: "https://ams-frontend-gk3u.onrender.com/",
    accent: "#4f6b58",
  },

  // Archive: smaller builds and learning projects
  {
    slug: "blogify",
    title: "Blogify",
    kind: "archive",
    category: "Full Stack",
    summary: "Blogging platform with a rich-text editor and Appwrite backend.",
    stack: [tech.react, tech.appwrite, tech.tailwind, tech.tinymce],
    image: "/project/blogify.jpeg",
    live: "https://app-write-blogify.vercel.app/",
    code: "https://github.com/tarush5253/AppWrite_blogify",
    accent: "#5b4b8a",
  },
  {
    slug: "currency-converter",
    title: "Currency Converter",
    kind: "archive",
    category: "Frontend",
    summary: "Live exchange-rate conversion between world currencies.",
    stack: [tech.react, tech.tailwind],
    image: "/project/currency-convertor.png",
    live: "https://currency-convertor-delta-sable.vercel.app/",
    code: "https://github.com/Tarush5253/currency-convertor",
    accent: "#2f6b62",
  },
  {
    slug: "music-player",
    title: "Music Player",
    kind: "archive",
    category: "Frontend",
    summary: "Responsive Spotify-style music player with playback controls.",
    stack: [tech.html, tech.css, tech.javascript],
    image: "/project/spotify.png",
    live: "https://listenwithlove.netlify.app/",
    code: "https://github.com/Tarush5253/spotify",
    accent: "#1f6b3a",
  },
  {
    slug: "weather-app",
    title: "Weather App",
    kind: "archive",
    category: "Frontend",
    summary: "Real-time weather for any city via a public weather API.",
    stack: [tech.javascript, tech.html, tech.css],
    image: "/project/weather.png",
    live: "https://tarush5253.github.io/PRODIGY_WD_01/",
    code: "https://github.com/Tarush5253/PRODIGY_WD_01",
    accent: "#3d6b8f",
  },
  {
    slug: "amazon-clone",
    title: "Amazon Clone",
    kind: "archive",
    category: "Frontend",
    summary: "My first web page: a pixel-faithful Amazon home page.",
    stack: [tech.html, tech.css],
    image: "/project/amazon.png",
    live: "https://tarush5253.github.io/amazonClone/",
    code: "https://github.com/Tarush5253/amazonClone",
    accent: "#8a6d1f",
  },
  {
    slug: "todo",
    title: "Todo App",
    kind: "archive",
    category: "Mini",
    summary: "Add, edit, complete and delete tasks.",
    stack: [tech.html, tech.css, tech.javascript],
    image: "/project/todo.png",
    live: "https://tarush5253.github.io/todo-app/",
    code: "https://github.com/Tarush5253/todo-app",
    accent: "#5c584c",
  },
  {
    slug: "tic-tac-toe",
    title: "Tic Tac Toe",
    kind: "archive",
    category: "Mini",
    summary: "Classic two-player game on a 3×3 grid.",
    stack: [tech.html, tech.css, tech.javascript],
    image: "/project/tic-toc-toe.png",
    live: "https://tarush5253.github.io/PRODIGY_WD_02/",
    code: "https://github.com/Tarush5253/PRODIGY_WD_02",
    accent: "#a23b3b",
  },
  {
    slug: "simon-says",
    title: "Simon Says",
    kind: "archive",
    category: "Mini",
    summary: "Memory game: repeat a growing sequence of colours.",
    stack: [tech.html, tech.css, tech.javascript],
    image: "/project/simon-says.png",
    live: "https://tarush5253.github.io/siman-says-game/",
    code: "https://github.com/Tarush5253/siman-says-game",
    accent: "#7a4b8c",
  },
  {
    slug: "dino-game",
    title: "Dino Runner",
    kind: "archive",
    category: "Mini",
    summary: "Chrome's offline dinosaur runner, rebuilt from scratch.",
    stack: [tech.html, tech.css, tech.javascript],
    image: "/project/google-game.png",
    live: "https://tarush5253.github.io/google-game/",
    code: "https://github.com/Tarush5253/google-game",
    accent: "#3f3c33",
  },
]

export const education = [
  { degree: "BCA, Computer Science", school: "IAMR Group of Institutions", score: "80%", years: "2023 — 2026" },
  { degree: "Senior Secondary (XII)", school: "Saraswati Vidhya Mandir Inter College", score: "87.2%", years: "2022 — 2023" },
  { degree: "Secondary (X)", school: "Saraswati Vidhya Mandir Inter College", score: "79.33%", years: "2021 — 2022" },
]

export const certifications = [
  { title: "JavaScript", issuer: "HackerRank", url: "https://drive.google.com/file/d/1KeyfHM8g_lFO2cxpeIS5LVuPXYjbRhBD/view" },
  { title: "Data Structures & Algorithms", issuer: "Scaler", url: "https://drive.google.com/file/d/1LNlZuh3MCtEepo7eFRgcnxyNkmkRgALm/view" },
  { title: "AI Workshop", issuer: "Ducat", url: "https://drive.google.com/file/d/1MM27L8jd8BY_TGSPS_cg3oYM6RHMqXu2/view" },
  { title: "Hackathon Participation", issuer: "IMS College", url: "https://drive.google.com/file/d/1UpK_92opMBYfQ1v449ILOx3DxBn57OFT/view" },
  { title: "Web Technology Training", issuer: "Appwars Technologies", url: "https://drive.google.com/file/d/14Z4-lgKrJzBR673HyH52ToF53VNkrpbi/view?usp=drivesdk" },
]

export const achievements = [
  { value: "Winner", label: "Swasthya Setu hackathon", icon: simple("devpost") },
  { value: "150+", label: "DSA problems on LeetCode", icon: simple("leetcode"), url: "https://leetcode.com/u/Tarush5253/" },
  { value: "98%", label: "Mathematics, BCA Sem 1 (CCSU)" },
  { value: "1200+", label: "Rapid rating on Chess.com", icon: simple("chessdotcom") },
]
