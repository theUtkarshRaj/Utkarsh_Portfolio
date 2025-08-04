export const projects = [
    {
      title: "SupplyGuard AI - Smart Risk Management",
      github: "https://github.com/theUtkarshRaj/SupplyGuard",
      live: "https://supplyguard.onrender.com/",
      date: "June 2025",
      tech: ["Python", "FastAPI", "React", "Vite", "Tailwind", "Hugging Face", "spaCy", "Docker"],
      features: [
        "Tracked disruptions across 10,000+ suppliers and 50+ articles/day to detect ESG, climate, and geo risks",
        "Used spaCy NER to extract entities with 95%+ precision, and BART-based LLM to summarize 100+ news items",
        "Generated risk scores (0.0–1.0) and 30+ real-time alerts with severity, timestamps, and action plans",
        "Built a responsive dashboard with 10+ UI views in React + Tailwind, enabling filtering by risk type and region",
        "Deployed 5+ REST endpoints via FastAPI and containerized with Docker for scalable integration"
      ]
    },
    {
      title: "Government Scheme QnA using RAG/CRAG",
      github: "https://github.com/theUtkarshRaj/Govt-Scheme-QnA-RAG",
      live: "https://government-scheme-qna-using-rag-8utmbjvkamtja65g8mrfqb.streamlit.app/",
      date: "May 2025",
      tech: ["Python", "Selenium", "FAISS", "Hugging Face", "MiniLM", "Flan-T5", "gemini-1.5-flash", "Streamlit", "LangChain"],
      features: [
        "Scraped and structured data for 3000+ Indian government schemes from the MyScheme portal using Selenium",
        "Embedded scheme documents into dense vectors with all-MiniLM-L6-v2 for semantic search using FAISS",
        "Assembled a RAG system using FAISS and Flan-T5-small for real-time, context-aware Q&A",
        "Released a user-friendly Streamlit frontend with secure Hugging Face API access"
      ]
    },
    {
      title: "AI Voice Cloning Model",
      github: "https://github.com/bharathgaddam1712/SyndicateSmashers",
      date: "April 2025",
      tech: ["Python", "Qwen2.5", "Triton Inference Server", "SparkTTS"],
      features: [
        "Engineered a TTS pipeline with Qwen2.5 to generate natural-sounding voice synthesis without external models",
        "Deployed on Triton Inference Server, reducing latency by 40% and tripling throughput scalability",
        "Utilized SparkTTS for high-fidelity multilingual speech synthesis with support for diverse regional accents",
        "Built both CLI and web UI interfaces for accessible and intuitive voice cloning usage"
      ]
    }
    
  ];