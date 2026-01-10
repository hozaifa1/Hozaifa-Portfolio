export const projects = [
  {
    id: "prova-erp",
    title: "Textile Supply Chain ERP",
    client: "Prova Fashion",
    category: "Production / Freelance",
    description: "Engineered a full-scale ERP automating inventory, order tracking, and financial reporting for Prova Fashion.",
    highlights: [
      "Built custom modules for supplier ledgers and fabric stock",
      "Replaced manual systems and reduced accounting errors by 85%",
      "Real-time inventory tracking with automatic reorder alerts"
    ],
    tech: ["Next.js", "Django", "PostgreSQL", "Cloudflare R2", "DigitalOcean"],
    image: "/projects/prova-erp.png",
    github: "https://github.com/farihafhf/provabook-3",
    status: "Production",
    impact: {
      client: "Prova Fashion",
      efficiency: "85% Error Reduction",
      automation: "100% Automated Ledgers"
    }
  },
  {
    id: "igmis-lms",
    title: "University Learning Management System",
    client: "IGMIS College, Chattogram",
    category: "Academic / Production",
    description: "Deployed an LMS for an institution affiliated with National University serving BBA, MBA, CSE, and THM programs.",
    highlights: [
      "Integrated biometric attendance sync for 500+ students",
      "Automated result generation securing academic payment processing",
      "Multi-program curriculum management (BBA, MBA, CSE, THM)"
    ],
    tech: ["Next.js", "Django", "PostgreSQL", "Cloudinary", "Vercel"],
    image: "/projects/igmis-lms.png",
    github: "https://github.com/hozaifa1/uni-management-sys",
    status: "Production",
    impact: {
      users: "500+ Students & Staff",
      programs: "4 Academic Programs",
      uptime: "99.9% Availability"
    }
  },
  {
    id: "streamsync",
    title: "StreamSync: Real-time Audio Routing",
    client: "Commercial Beta",
    category: "Mobile / Android",
    description: "Developed a low-latency Android app to transmit in-app audio and voice during HD screen sharing sessions.",
    highlights: [
      "Overcame standard Android limitations for dual-channel audio",
      "Optimized for mobile gaming and remote collaboration",
      "Achieved <50ms audio latency for real-time communication"
    ],
    tech: ["Kotlin", "Java", "Android Studio", "Firebase"],
    image: "/projects/voicelink.png",
    status: "Beta",
    impact: {
      latency: "<50ms Audio Delay",
      compatibility: "Android 10+ Devices",
      sessions: "HD Screen Sharing"
    }
  },
  {
    id: "torbiz",
    title: "Torbiz: Distributed LLM Inference",
    client: "Open Source / ML",
    category: "AI/ML / Desktop",
    description: "Launched a decentralized chatbot system using the Petals library, enabling shard hosting on consumer-grade CPUs.",
    highlights: [
      "Designed P2P exchange mechanism for distributed model execution",
      "Cross-platform desktop app using Tauri (Windows, macOS, Linux)",
      "Democratized access to large language models"
    ],
    tech: ["Python", "Petals", "Rust", "Tauri", "React"],
    image: "/projects/torbiz.png",
    github: "https://github.com/hozaifa1/torbiz-desktop",
    status: "Open Source",
    impact: {
      model: "Distributed LLM Hosting",
      platforms: "Windows, macOS, Linux",
      community: "Open Source"
    }
  },
  {
    id: "waiter-detection",
    title: "Waiter Detection & Person Recognition",
    client: "ML Challenge / Computer Vision",
    category: "AI/ML / Computer Vision",
    description: "Real-time person detection and recognition system for restaurant service monitoring using Roboflow DETR model.",
    highlights: [
      "Trained custom DETR model on 73 labeled video frames",
      "Real-time video processing with confidence threshold 0.42",
      "Multi-person recognition (TANVIR, ANIK, TOUFIQ, IMRAN, MUFRAD, EMON, SHAFAYET, FAISAL)"
    ],
    tech: ["Python", "OpenCV", "Roboflow", "DETR", "Computer Vision"],
    github: "https://github.com/hozaifa1/Waiter_Calling_Job_Challenge",
    status: "Prototype",
    impact: {
      accuracy: "0.42+ Confidence Threshold",
      detection: "8 Person Recognition",
      processing: "Real-time Video"
    }
  },
  {
    id: "video-transcription",
    title: "Video Transcription with Timestamp Search",
    client: "ML Challenge / NLP",
    category: "AI/ML / NLP",
    description: "Advanced video transcription system with fuzzy string matching for precise timestamp-based content search.",
    highlights: [
      "Integrated OpenAI Whisper for high-accuracy transcription",
      "Implemented fuzzy string matching with 80% similarity threshold",
      "Achieved 89% similarity match for complex queries"
    ],
    tech: ["Python", "OpenAI Whisper", "FuzzyWuzzy", "NLP"],
    github: "https://github.com/hozaifa1/Video_Transcription_Timestamp",
    status: "Prototype",
    impact: {
      accuracy: "89% Query Match Success",
      transcription: "Word-level Timestamps",
      search: "Fuzzy String Matching"
    }
  },
  {
    id: "panorama-maker",
    title: "Automated Panorama Generation",
    client: "ML Challenge / Computer Vision",
    category: "AI/ML / Image Processing",
    description: "Intelligent video frame extraction and panoramic image stitching system using OpenCV.",
    highlights: [
      "Automatic frame extraction at configurable intervals (30 frames)",
      "OpenCV Stitcher for seamless panorama creation",
      "Error handling for insufficient keypoints and homography estimation"
    ],
    tech: ["Python", "OpenCV", "NumPy", "Computer Vision"],
    github: "https://github.com/hozaifa1/Pano_Maker",
    status: "Prototype",
    impact: {
      stitching: "9 Frame Processing",
      output: "High-resolution Panoramas",
      automation: "Fully Automated"
    }
  },
  {
    id: "meme-searcher",
    title: "AI-Powered Meme Search Engine",
    client: "ML Challenge / Multimodal AI",
    category: "AI/ML / Multimodal Search",
    description: "Semantic image search system using CLIP model for text-to-image matching across meme datasets.",
    highlights: [
      "Integrated Sentence-Transformers CLIP ViT-L-14 model",
      "Multi-format image support (PNG, JPG, WebP)",
      "Semantic similarity scoring with cosine similarity"
    ],
    tech: ["Python", "Sentence-Transformers", "CLIP", "PyTorch", "Multimodal AI"],
    github: "https://github.com/hozaifa1/Meme_Searcher",
    status: "Prototype",
    impact: {
      model: "CLIP ViT-L-14",
      accuracy: "Semantic Similarity Matching",
      formats: "Multi-format Support"
    }
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform for Women's Fashion",
    client: "Fashion Retail",
    category: "E-commerce / Web Development",
    description: "Complete e-commerce solution for imported women's clothing with international market reach.",
    highlights: [
      "Product catalog with 15+ fashion categories (abayas, hijabs, tunics)",
      "Bagisto framework integration with custom themes",
      "Payment gateway integration and inventory management"
    ],
    tech: ["PHP", "Laravel", "Bagisto", "MySQL", "Tailwind CSS"],
    image: "/projects/ecommerce-platform.png",
    github: "https://github.com/hozaifa1/Ecommerce",
    status: "Development",
    impact: {
      products: "15+ Categories",
      framework: "Bagisto E-commerce",
      market: "International Trade"
    }
  }
];

export const skills = [
  {
    category: "Frontend Development",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend Development",
    technologies: ["Django", "FastAPI", "Node.js", "PostgreSQL", "MySQL"]
  },
  {
    category: "Mobile Development",
    technologies: ["Kotlin", "Android Studio", "React Native", "Firebase"]
  },
  {
    category: "AI/ML",
    technologies: ["Python", "PyTorch", "TensorFlow", "OpenCV", "Whisper", "CLIP"]
  },
  {
    category: "DevOps & Cloud",
    technologies: ["Docker", "DigitalOcean", "Vercel", "Cloudflare", "Git"]
  },
  {
    category: "Desktop Development",
    technologies: ["Rust", "Tauri", "Electron"]
  }
];

export const stats = [
  { label: "Projects Completed", value: "20+" },
  { label: "Years of Experience", value: "3+" },
  { label: "Technologies Mastered", value: "25+" },
  { label: "Client Satisfaction", value: "100%" }
];
