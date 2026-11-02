export const projects = [
  {
    id: "differentiable-silicon",
    title: "Differentiable Silicon",
    client: "Tesseract Hackathon 2026",
    category: "Research / Differentiable TCAD",
    description: "One gradient from an ECG classification loss, through a PyTorch spiking network and a JAX device model, into Synopsys Sentaurus TCAD. Best-in-Track winner, Hybrid ML and Mechanistic Models track.",
    highlights: [
      "Sentaurus is a closed binary with no adjoint, so the gradient comes from trust-region finite differences plus a Broyden update",
      "Balanced cross-entropy 1.400 to 1.018 and accuracy 0.250 to 0.688 in 64 solver calls",
      "An open DEVSIM backend can replace Sentaurus without changing the pipeline"
    ],
    tech: ["Python", "PyTorch", "JAX", "Tesseract", "Sentaurus TCAD", "DEVSIM"],
    github: "https://github.com/hozaifa1/differentiable-silicon",
    status: "Open Source",
    impact: {
      loss: "1.400 to 1.018",
      accuracy: "0.250 to 0.688",
      solverCalls: "64 calls"
    }
  },
  {
    id: "tesseract-upstream",
    title: "Upstream contributions to Tesseract",
    client: "Pasteur Labs / Open Source",
    category: "Research / Open Source",
    description: "Pull requests to Pasteur Labs' open-source tesseract-core (#712) and tesseract-jax (#248), made while building Differentiable Silicon. The work found two bugs in tesseract-jax.",
    highlights: [
      "tesseract-core pull request #712",
      "tesseract-jax pull request #248",
      "Found while wiring four Tesseracts (spiking network, JAX circuit model, Sentaurus over SSH, adjoint shim) into one gradient"
    ],
    tech: ["Python", "JAX", "Tesseract"],
    links: [
      { label: "tesseract-core #712", href: "https://github.com/pasteurlabs/tesseract-core/pull/712" },
      { label: "tesseract-jax #248", href: "https://github.com/pasteurlabs/tesseract-jax/pull/248" }
    ],
    status: "Open Source",
    impact: {
      pullRequests: "2 upstream PRs",
      bugsFound: "2 in tesseract-jax",
      gradientChecks: "56 of 56 passed"
    }
  },
  {
    id: "prohori",
    title: "PROHORI: Crack Width from a Phone Photo",
    client: "OpenCV AI Competition 2026",
    category: "AI Systems / Computer Vision",
    description: "A solo entry that measures structural crack width in millimetres from one phone photo of a crack beside a ChArUco board, then tells the user what to do next.",
    highlights: [
      "A conformal risk-control gate labels each reading certified, indicative or refused",
      "An agent (rules, or Amazon Bedrock Nova Lite) turns the reading into plain instructions",
      "Width error 0.070 mm MAE over 63 cracks on 8 held-out photos (0.056 mm on certified readings)"
    ],
    tech: ["Python", "OpenCV 5", "Conformal prediction", "Amazon Bedrock", "AWS Graviton4"],
    github: "https://github.com/hozaifa1/prohori",
    live: "https://184-194-241-186.sslip.io",
    status: "Competition entry",
    impact: {
      widthError: "0.070 mm MAE",
      certified: "0.056 mm MAE",
      heldOut: "8 held-out photos"
    }
  },
  {
    id: "groundtrack",
    title: "Groundtrack: Graded Anomaly Detection",
    client: "AI Builders Challenge with IBM Bob",
    category: "AI Systems / Agents",
    description: "IBM Bob wrote a spacecraft telemetry fault detector. The grader was locked first and 26 of 81 NASA recordings were held out, so every improvement is scored on data the agent never saw.",
    highlights: [
      "Held-out F1 rose from 0.266 to 0.623 and false alarms fell from 128 to 7",
      "Eight rounds were tried and the grader kept one",
      "IBM Granite writes the operator briefs; a live console shows the results"
    ],
    tech: ["Python", "IBM Bob", "IBM Granite", "Vercel"],
    github: "https://github.com/hozaifa1/groundtrack",
    live: "https://groundtrack-console.vercel.app",
    status: "Competition entry",
    impact: {
      heldOutF1: "0.266 to 0.623",
      falseAlarms: "128 to 7",
      precision: "0.163 to 0.731"
    }
  },
  {
    id: "titan-title-review",
    title: "Titan Title Review AI",
    client: "Real-estate title review",
    category: "AI Systems / RAG",
    description: "Turns real-estate title PDFs into a cited, eight-section ALTA Title Review Summary, and learns from the edits the operator makes.",
    highlights: [
      "PDF parsing with pdfplumber and Docling, structured extraction with BAML",
      "Hybrid retrieval: BM25 and BGE-M3 in Qdrant, fused with RRF and reranked",
      "Operator edits feed back into later summaries; Streamlit interface"
    ],
    tech: ["Python", "BAML", "Qdrant", "BGE-M3", "Streamlit"],
    github: "https://github.com/hozaifa1/titan-title-review-ai",
    status: "Prototype",
    impact: {
      output: "Cited 8-section summary",
      retrieval: "BM25 + BGE-M3 + RRF",
      feedback: "Learns from edits"
    }
  },
  {
    id: "prova-erp",
    title: "Provabook - Production OS",
    client: "Prova Fashion",
    category: "Production / SaaS",
    description: "The operating system for textile buying houses. Replaces WhatsApp/Excel chaos with a single source of truth from inquiry to shipment.",
    highlights: [
      "Live Production Cockpit: Real-time progress bars for knitting, dyeing, and finishing",
      "Precision Loss Tracking: Automatic calculation of Process Loss % and mixed fabric usage",
      "The 'Mega-Timeline': Centralized activity log and document stack for full accountability"
    ],
    tech: ["Next.js", "Django", "PostgreSQL", "Google Cloud Storage", "DigitalOcean"],
    image: "/projects/prova-erp.png",
    status: "Production",
    impact: {
      visibility: "Realtime Order & Inventory Tracking",
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
    tech: ["Django REST", "React", "Vite", "PostgreSQL", "Vercel"],
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
    client: "Android app",
    category: "Mobile / Android",
    description: "An Android 10+ watch-party app that bridges in-app audio to a viewer during screen sharing, built on MediaProjection and WebRTC.",
    highlights: [
      "Overcame standard Android limitations for dual-channel audio",
      "MediaProjection audio capture on Android 10+",
      "WebRTC with Firebase signaling and a Cloudflare TURN relay"
    ],
    tech: ["Kotlin", "Jetpack Compose", "WebRTC", "Firebase", "Cloudflare TURN"],
    image: "/projects/voicelink.png",
    github: "https://github.com/hozaifa1/streamsync",
    status: "Beta",
    impact: {
      transport: "WebRTC + TURN",
      compatibility: "Android 10+ Devices",
      sessions: "HD Screen Sharing"
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
      "OpenCV Stitcher for panorama creation",
      "Error handling for insufficient keypoints and homography estimation"
    ],
    tech: ["Python", "OpenCV", "NumPy", "Computer Vision"],
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
    status: "Development",
    impact: {
      products: "15+ Categories",
      framework: "Bagisto E-commerce",
      market: "International Trade"
    }
  },
  {
    id: "screen-rest",
    title: "ScreenRest: Break Reminders",
    client: "Productivity / Android",
    category: "Mobile / Android",
    description: "A Kotlin Android app that reminds you to take screen breaks and shows a Quranic verse during each break.",
    highlights: [
      "Native Kotlin Android app",
      "Break reminders that display Quranic verses",
      "A matching desktop version is in a separate repository"
    ],
    tech: ["Kotlin", "Android Studio"],
    github: "https://github.com/hozaifa1/screen-rest-app",
    status: "Development",
    impact: {
      platform: "Android",
      content: "Quranic verses on breaks",
      language: "Kotlin"
    }
  }
];

export const skills = [
  {
    category: "Device Simulation",
    technologies: ["Synopsys Sentaurus TCAD", "Sentaurus Structure Editor", "DEVSIM", "FDTD"]
  },
  {
    category: "Ferroelectric FETs",
    technologies: ["HZO", "GAA-FeFET", "Preisach model", "Analog synapses"]
  },
  {
    category: "Neuromorphic Hardware",
    technologies: ["Spiking neural networks", "LIF neurons", "SpikingJelly", "MIT-BIH ECG"]
  },
  {
    category: "Hardware Acceleration",
    technologies: ["Siemens Catapult HLS", "hls4ml", "QKeras", "PowerPro"]
  },
  {
    category: "Scientific & Differentiable ML",
    technologies: ["PyTorch", "JAX", "Tesseract", "Python"]
  },
  {
    category: "Agentic AI & RAG",
    technologies: ["Agents", "BM25 + BGE-M3", "Qdrant", "Conformal prediction"]
  },
  {
    category: "Full-Stack Web",
    technologies: ["Next.js", "Payload CMS", "TypeScript", "Django REST", "PostgreSQL"]
  }
];
