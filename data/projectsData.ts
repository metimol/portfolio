import { getAssetPath } from "@/utils/assetPath";

export const projects = [
  {
    title: "NeuroIMG – AI Image Generation Platform",
    slug: "neuroimg-ai-image-generation",
    category: ["Backend Development", "AI", "Infrastructure"],
    img: getAssetPath("images/project1_1.png"),
    owner: "Vladyslav Horobtsov",
    date: "2025",
    services: "Backend, AI Integration, Infrastructure",
    duration: "6 months",
    budget: "Confidential",
    live: "https://neuroimg.art",
    overview:
      "Developed the backend for a cutting-edge AI-powered image generation service. Integrated OpenAI, TensorArt, and other AI solutions for text-to-image generation. Optimized request handling to ensure cost-effective AI model execution. Built full infrastructure for model routing, queuing, and monitoring.",
    objective:
      "To deliver a scalable, cost-effective, and robust AI image generation backend supporting multiple providers and models, with advanced monitoring and routing capabilities.",
    process:
      "Designed a modular backend in Python (FastAPI), implemented async request handling, integrated OpenAI/TensorArt APIs, and built a monitoring/queuing system for efficient resource use.",
    impact:
      "Enabled rapid, reliable AI image generation for thousands of users, reducing costs and improving model flexibility for the platform.",
  },
  {
    title: "Neurogen Telegram Bot",
    slug: "neurogen-telegram-bot",
    category: ["Bot Development", "AI Integration", "Python"],
    img: getAssetPath("images/serviceCard.png"),
    owner: "Vladyslav Horobtsov",
    date: "2025",
    services: "Bot Development, AI Integration",
    duration: "Ongoing",
    budget: "Personal Project",
    live: "https://t.me/neurogen_artbot",
    overview:
      "Created a Telegram bot using PyTelegramBotAPI and async webhooks. Integrated with NeuroIMG to allow users to generate AI images inside chats. Currently serves over 10,000 users with scalable VPS deployment.",
    objective:
      "To provide seamless AI image generation directly in Telegram chats, leveraging NeuroIMG backend.",
    process:
      "Developed bot logic in Python, set up async webhooks, integrated with NeuroIMG API, and deployed on scalable VPS infrastructure.",
    impact:
      "Over 10,000 users served, with high reliability and fast response times for AI image generation in Telegram.",
  },
  {
    title: "BlackWave – AI-Driven Social Network Simulation",
    slug: "blackwave-social-simulation",
    category: ["AI", "Backend", "Simulation"],
    img: getAssetPath("images/project1_1.png"),
    owner: "Vladyslav Horobtsov",
    date: "2025",
    services: "AI, Backend, Simulation",
    duration: "4 months",
    budget: "Open Source",
    live: "https://github.com/metimol/blackwave",
    overview:
      "Developed a social network where one human interacts with thousands of AI users. Combined Django (frontend/API) with FastAPI (AI bots backend). Implemented vector memory search with Qdrant, personality simulation, and real-time interactions. Fully open-source and dockerized for easy deployment.",
    objective:
      "To simulate large-scale social interactions between humans and AI agents, exploring emergent behaviors and scalable AI architectures.",
    process:
      "Built Django frontend/API, FastAPI backend for AI bots, integrated Qdrant for vector search, and dockerized the entire stack.",
    impact:
      "Demonstrated scalable AI social simulation, with open-source code enabling research and experimentation by others.",
  },
  {
    title: "Movie Scraper & Downloader API",
    slug: "movie-scraper-downloader-api",
    category: ["Backend", "Web Scraping", "API"],
    img: getAssetPath("images/project2_1.jpeg"),
    owner: "Vladyslav Horobtsov",
    date: "2024",
    services: "Backend, Web Scraping, API",
    duration: "1 week",
    budget: "Personal Project",
    live: "None",
    overview:
      "Built a FastAPI-based scraper for movie and series metadata. Containerized the app using Docker for scalability. Implemented a lightweight search frontend for easy browsing.",
    objective:
      "To automate movie/series metadata collection and provide a simple API and frontend for searching and downloading.",
    process:
      "Developed FastAPI backend, Dockerized the app, and built a minimal frontend for search.",
    impact:
      "Streamlined media metadata collection and access for personal use and automation.",
  },
  {
    title: "Homelab Media Server Automation",
    slug: "homelab-media-server-automation",
    category: ["DevOps", "Automation", "Media"],
    img: getAssetPath("images/project3_1.jpg"),
    owner: "Vladyslav Horobtsov",
    date: "2024",
    services: "DevOps, Automation, Media Server",
    duration: "Ongoing",
    budget: "Personal Project",
    live: "None",
    overview:
      "Configured a Raspberry Pi home media center with Jellyfin, Plex, and Audiobookshelf. Set up secure remote access via Cloudflare Tunnel. Automated service restarts, updates, and remote backups.",
    objective:
      "To automate and secure a home media server setup for reliable, remote access and maintenance.",
    process:
      "Deployed media servers, configured Cloudflare Tunnel, and scripted automation for updates and backups.",
    impact:
      "Achieved a robust, self-maintaining home media environment with secure remote access.",
  },
];
