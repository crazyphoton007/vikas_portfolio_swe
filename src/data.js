// src/data.js
// Data modeled after Priyanshi's portfolio structure (clean + section-driven)

export const data = {
  name: "Vikas Shukla",
  photo: "profile.png", // public/
  location: "Bellevue, WA",
  email: "vikasofficial927@gmail.com",
  github: "crazyphoton007",
  linkedin: "vikas-s-8ab14a270",
  resumeUrl: "Vikas_Resume.pdf", // public/

  // Hero headline (1–2 lines)
  headline:
    "Software ML Engineer with 7+ years of experience building scalable, high-performance distributed systems. Proven technical leader with a strong track record of delivering innovative solutions, leading cross-functional teams, and driving measurable business impact.",

  // Rotating roles in Hero
  roles: ["Machine Learning Engineer", "Full-Stack SWE", "Billiards Player"],

  about:
    "Software ML Engineer focused on machine learning systems, distributed systems, scalable architecture, cloud computing, microservices, and full-stack delivery. Experienced across Capital One, Amazon, and SGS Tekniks with production work in Python, JavaScript, FastAPI, React Native, CI/CD, AWS, Azure, RAG, agentic AI, and production ML platforms.",

  skills: {
    languages: [
      "Python",
      "Java",
      "C#",
      "JavaScript",
      "TypeScript",
      "C++",
      "SQL",
      "HTML/CSS",
    ],
    tools: [
      "AWS",
      "Azure",
      "Lambda",
      "S3",
      "ECS Fargate",
      "DynamoDB",
      "RDS",
      "SQS/SNS",
      "Kinesis",
      "CloudFormation",
      "Glue",
      "EventBridge",
      "AppConfig",
      "Cosmos DB",
      "Kafka",
      "Kubernetes",
      "Git",
      "CI/CD",
    ],
    frameworks: [
      "React JS",
      "React Native",
      "Node.js",
      "FastAPI",
      "REST APIs",
      "Linux",
      "OOP",
      "Scalable Architecture",
      "Distributed Systems",
      "Cloud Computing",
      "Microservices",
      "HLD",
      "LLD",
      "Data Structures & Algorithms",
      "FAISS",
      "LLM/RAG",
      "Vector Databases",
      "Agentic AI",
      "Prompt Engineering",
      "LangGraph",
      "CrewAI",
      "OpenAI APIs",
      "AI Agents",
      "XGBoost",
    ],
  },

  experience: [
    {
      company: "Capital One",
      title: "Sr. Machine Learning Engineer",
      dates: "May 2023 – Present",
      location: "Richmond, VA",
      bullets: [
        "Architected and deployed scalable real-time ML inference services supporting fraud decisioning across 40M+ transactions, improving model precision by 17%, reducing analyst effort by 45 hours/month, and enabling highly available, low-latency production predictions.",
        "Built a platform-level observability framework for ML pipelines including automated data validation, KPI monitoring, alerting, and deployment health checks, reducing production incidents by 80%.",
        "Designed and built a scalable data ingestion and transformation layer consolidating 40M+ transactions from disparate systems into a unified self-serve analytics platform, eliminating 60% of manual analysis cycles.",
        "Designed and deployed containerized ML microservices with CI/CD automation, model versioning, rollback capabilities, and zero-downtime production releases.",
        "Balanced 60% coding and implementation, 10% system design, 25% operational excellence and on-call ownership, and 5% hiring and mentoring.",
      ],
    },
    {
      company: "Amazon",
      title: "Software ML Engineer",
      dates: "Jun 2022 – Apr 2023",
      location: "Bellevue, WA",
      bullets: [
        "Designed and deployed secure machine learning development infrastructure supporting model training, experimentation, and deployment workflows for the Alexa Data Science organization.",
        "Built an AI-powered notification quality assessment framework integrating user settings, reachability signals, and A/B test results across push, SMS, and email channels, improving Alexa engagement and retention by 20%.",
        "Launched an uplift-based targeting system with guardrails against notification fatigue, reducing total sends by 22% with no engagement loss, cutting SMS/email failures by 30%, and lifting incremental conversion by 8%.",
        "Implemented automated business logic for A/B, multivariate, and auto-targeting marketing experiments using Python, increasing campaign ROI and strategy effectiveness.",
      ],
    },
    {
      company: "SGS Tekniks",
      title: "Software Engineer",
      dates: "Nov 2014 – May 2018",
      location: "Gurugram, India",
      bullets: [
        "Automated on-premises server fleet scaling for the SGS tax engine during peak holiday traffic, reducing deployment time from 3-4 hours per server to 25 seconds.",
        "Led infrastructure design and deployment of the SGS tax processing platform, ensuring high availability, scalability, and reliable performance during peak sales periods.",
        "Mentored interns, organized innovation hackathons, and delivered technical training programs to strengthen team capability and engineering excellence.",
      ],
    },
  ],

  projects: [
    {
      name: "IntelliQuery Engine (Agentic AI Platform | LLM + RAG)",
      stack: ["Python", "FastAPI", "FAISS", "React Native", "SQL"],
      bullets: [
        "Built a retrieval-augmented generation system using LLM embeddings and FAISS vector search, enabling semantic queries across 10K+ document chunks with sub-800ms response time and reducing unsupported responses by 60%.",
        "Implemented agentic routing and context-aware retrieval workflows for finance and legal queries, improving accuracy by 45% and reducing manual validation effort by 50%.",
        "Deployed a scalable FastAPI backend integrated with a React Native application for CaseFit, delivering production-grade low-latency AI responses.",
      ],
      links: [
        {
          label: "Repo",
          href: "https://github.com/crazyphoton007/Lawyer-Mapping",
        },
      ],
    },
    {
      name: "Fraud Detection System",
      stack: ["Python", "XGBoost", "SQL"],
      bullets: [
        "Trained an XGBoost classifier with target encoding and transaction pattern features.",
        "Validated model performance with decile analysis, Lorenz curve, and Gini coefficient.",
        "Top deciles captured the majority of fraud while maintaining high recall.",
      ],
      links: [
        {
          label: "Repo",
          href: "https://github.com/crazyphoton007/Fraud-detection",
        },
      ],
    },
    {
      name: "Cancer Gene Detection",
      stack: ["R", "Python", "SQL"],
      bullets: [
        "Reduced 20K+ genomic features to 500 using PCA, achieving a 99.7% feature reduction.",
        "Applied clustering algorithms on principal components to identify patient groupings.",
        "Validated patient clusters against ground-truth labels for separability and interpretation.",
      ],
      links: [
        {
          label: "Repo",
          href: "https://github.com/crazyphoton007/Gene-Expression-Cancer-RNA-Sequence",
        },
      ],
    },
    {
      name: "Forecast Bike Rentals",
      stack: ["Python", "SQL", "Gradient Boosting"],
      bullets: [
        "Built Gradient Boosting models to estimate hourly bike rentals using historical demand patterns.",
        "Performed correlation analysis to identify high-impact features and improve forecast stability.",
        "Created evaluation checks to verify model performance across time slices and peak-hour segments.",
      ],
      links: [
        {
          label: "Repo",
          href: "https://github.com/crazyphoton007/Forecast_Bike-Rentals",
        },
      ],
    },
  ],

  education: [
    {
      school: "Trine University",
      degree: "M.S. Information Studies & AI",
      dates: "Feb 2025",
    },
    {
      school: "University at Buffalo",
      degree: "M.S. Data Science (GPA 3.7/4)",
      dates: "Feb 2022",
    },
    {
      school: "SRM University",
      degree: "B.Tech Electrical and Electronics Engineering (GPA 8.6/10)",
      dates: "May 2014",
    },
  ],
};
