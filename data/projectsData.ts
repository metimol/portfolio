import { getAssetPath } from "@/utils/assetPath";

export const projects = [
  {
    // For Post
    title: "BlackWave Studio",
    slug: "blackwave-studio",
    category: ["Backend Development", "AI", "API Design"],
    img: getAssetPath("images/project1_1.jpg"),

    // Sticky
    owner: "Vladyslav Horobtsov",
    date: "March 2025",
    services: "Backend Development, API Design, AI Integration",
    duration: "4 months",
    budget: "Confidential",
    live: "https://blackwave.studio/",

    // Scroll
    overview:
      "BlackWave is a cutting-edge AI image generation platform I developed that provides advanced image creation capabilities through both a user-friendly web interface and a robust API. The platform enables users to generate images from text prompts using multiple AI models (including Stable Diffusion variants, SDXL, Flux, Kolors, and more), apply LoRA models for style customization, upscale images with various algorithms, and share creations through an integrated gallery system.",
    objective:
      "The primary objective was to build a scalable and reliable backend system that could handle high-volume image generation requests, integrate seamlessly with multiple AI models, implement a secure token-based economy, and provide a performant API for both the web interface and external integrations. The platform needed to support streaming responses, complex parameter configurations, and comprehensive security measures while maintaining high availability.",
    process:
      "I implemented a comprehensive backend architecture using Python and FastAPI, with an asynchronous database system for data storage and Redis for caching and rate limiting. The system integrates with multiple AI generation models through a unified service layer, enabling seamless switching between models like SD 1.5/2.0/3.0, SDXL, Flux, Kolors, and many others. I designed the API with performance in mind, implementing efficient request handling with streaming responses, rate limiting middleware, and comprehensive error handling. The authentication system uses JWT tokens with configurable expiration, and the platform includes a Gumroad payment integration for handling token purchases. For image storage, I integrated MinIO (S3-compatible storage) with imgproxy for secure image serving. The system also features a sophisticated NSFW content filter, background task processing, and notification systems for monitoring errors and important events.",
    impact:
      "BlackWave Studio has successfully processed over 1.5 million image generations while maintaining exceptional reliability with 99.9% uptime. The platform's token-based economy has created a sustainable business model, with multiple token package options providing flexible pricing for users. The API's streaming capabilities have been particularly well-received, allowing for real-time progress updates during the generation process. The gallery system has fostered a creative community around the platform, while the robust backend architecture has easily scaled to meet growing demand. This project showcases my ability to build complex, high-performance backend systems that integrate multiple AI technologies and handle media processing at scale."
  },
  {
    // For Post
    title: "Media Streaming Platform",
    slug: "media-streaming",
    category: ["Web Scraping", "Backend", "Frontend"],
    img: getAssetPath("images/project2_1.jpeg"),

    // Sticky
    owner: "Vladyslav Horobtsov",
    date: "February 2025",
    services: "Web Scraping, Backend Development, Frontend Development",
    duration: "2 weeks",
    budget: "Personal Project",
    live: "None",

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
    img: getAssetPath("images/project3_1.jpg"),

    // Sticky
    owner: "Vladyslav Horobtsov",
    date: "December 2024",
    services: "System Administration, Docker, Network Configuration",
    duration: "Ongoing",
    budget: "Personal Project",
    live: "None",

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
