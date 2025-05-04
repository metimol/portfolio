import { getAssetPath } from "@/utils/assetPath";

export const projects = [
  {
    // For Post
    title: "BlackWave Studio",
    slug: "blackwave-studio",
    category: ["Backend Development", "AI", "API Design"],
    img: getAssetPath("images/project1_1.jpeg"),

    // Sticky
    owner: "Vladyslav Horobtsov",
    date: "March 2025",
    services: "Backend Development, API Design, AI Integration",
    duration: "4 months",
    budget: "Confidential",
    live: "https://blackwave.studio/",

    // Scroll
    overview:
      "BlackWave is a cutting-edge AI image generation platform I developed that offers powerful image creation capabilities through both a user-friendly interface and a robust API. The platform allows users to generate images from text prompts, transform existing images, upscale images, and even create videos from text descriptions.",
    objective:
      "The primary objective was to build a scalable and reliable backend system that could handle high-volume requests, integrate seamlessly with various AI models, and provide a secure and performant API for both the web interface and external integrations. The platform needed to support various generation modes, complex parameter configurations, and reliable security measures to protect user data.",
    process:
      "I implemented a comprehensive backend architecture using Node.js and Express, with MongoDB for data storage and Redis for caching. The system integrates with multiple AI models through a unified API layer, allowing for easy switching between models and fallback options. I designed the API with performance and scalability in mind, implementing efficient queuing systems, rate limiting, and load balancing to ensure reliable operation even during high traffic periods. The authentication system uses JWT tokens with refresh mechanisms, and all sensitive data is encrypted both in transit and at rest. For the image generation pipeline, I created a modular system that preprocesses requests, optimizes parameters, and postprocesses results for consistent quality across different models and use cases.",
    impact:
      "BlackWave Studio has successfully processed more than 1.5 million image generations since launch, with consistently high user satisfaction ratings. The API has been integrated by several third-party applications, providing a stable revenue stream. The platform's reliability has been exceptional, with 99.9% uptime and response times averaging under 500ms for API calls (excluding processing time). This project has become a significant showcase of my ability to build complex, robust backend systems that handle computationally intensive tasks at scale.",
  },
  {
    // For Post
    title: "Media Streaming Platform",
    slug: "media-streaming",
    category: ["Web Scraping", "Backend", "Frontend"],
    img: getAssetPath("images/project2_1.jpeg"),

    // Sticky
    owner: "Vladyslav Horobtsov",
    date: "January 2025",
    services: "Web Scraping, Backend Development, Frontend Development",
    duration: "6 months",
    budget: "Personal Project",
    live: "Private Access",

    //Scroll
    overview:
      "I developed a comprehensive media platform for educational purposes that aggregates, processes, and streams movies and TV shows from publicly available sources. The platform features a sophisticated web scraping system that collects metadata and streaming links, processes them for quality and reliability, and presents them through an intuitive user interface.",
    objective:
      "The goal was to create a personal educational tool to practice advanced web scraping techniques, streaming protocol handling, and full-stack development. I aimed to build a system that could autonomously discover content, evaluate streaming quality, and present a Netflix-like user experience while respecting copyright by only accessing publicly available content.",
    process:
      "I developed a multi-layered scraping system using Node.js, Puppeteer, and custom HTTP clients that can navigate complex websites, bypass anti-bot measures, and extract relevant metadata and streaming URLs. The backend, built with Express and MongoDB, processes and categorizes the data, evaluates stream quality, and manages user preferences and watching history. I implemented real-time stream analysis to determine the best available sources based on resolution, bitrate, and stability. The frontend was developed using React with server-side rendering for optimal performance and SEO, featuring a responsive design that works across devices from mobile to large screens.",
    impact:
      "This personal project has significantly enhanced my skills in distributed systems, data processing, and both frontend and backend development. It processes thousands of media entries daily, providing reliable access to a vast library of content for educational purposes. The platform has become an excellent showcase of my ability to tackle complex technical challenges and build full-stack solutions with excellent user experience.",
  },
  {
    // For Post
    title: "Home Server Infrastructure",
    slug: "home-server",
    category: ["DevOps", "System Administration", "Self-hosting"],
    img: getAssetPath("images/project3_1.png"),

    // Sticky
    owner: "Vladyslav Horobtsov",
    date: "October 2024",
    services: "System Administration, Docker, Network Configuration",
    duration: "Ongoing",
    budget: "Personal Project",
    live: "Private Network",

    //Scroll
    overview:
      "I've designed and implemented a comprehensive home server infrastructure running Ubuntu Server 22.04, serving as a centralized hub for media streaming, file management, remote access, and development testing. The system incorporates multiple containerized services managed through Docker, providing both utility and learning opportunities.",
    objective:
      "The primary objective was to create a reliable and secure home infrastructure that could serve multiple purposes: hosting media content through various streaming services, providing tools for downloading and managing content, offering remote access capabilities, and serving as a testbed for development projects. Additionally, the system needed to be easily maintainable and expandable as new needs arise.",
    process:
      "I began by selecting appropriate hardware and installing Ubuntu Server 22.04 as the base operating system. I implemented Docker and Docker Compose to containerize services, allowing for easy deployment, updates, and configuration management. For media services, I deployed Plex, Jellyfin, and Audiobookshelf, each configured with appropriate hardware acceleration and optimized settings. For file management and downloads, I implemented FileBrowser, AriaNg with Aria2, and MeTube (a yt-dlp interface). System monitoring and administration are handled through Dashdot for resource visualization, Webmin for Linux administration, and Portainer for container management. Network security and remote access are managed through Cloudflare Tunnel for secure external access without port forwarding, and Tailscale for a private VPN network based on WireGuard.",
    impact:
      "The home server has become an essential part of my personal infrastructure, providing reliable access to media content, simplifying file management across devices, and offering a secure way to access my home network when traveling. It has also served as an excellent learning platform for Linux administration, containerization, and network security. This project demonstrates my ability to design, implement, and maintain complex systems that integrate multiple technologies and services.",
  },
];
