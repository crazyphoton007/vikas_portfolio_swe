// src/data.js
// Data modeled after Priyanshi's portfolio structure (clean + section-driven)

export const data = {
  name: "Vikas Shukla",
  photo: "avatar.jpg", // public/
  location: "Bellevue, WA",
  email: "vikasofficial927@gmail.com",
  github: "crazyphoton007",
  linkedin: "vikas-s-8ab14a270",
  resumeUrl: "Vikas_Resume_updated.pdf", // public/

  // Hero headline (1–2 lines)
  headline:
    "Software Engineer specializing in reliable, high-performance backend systems, ML platforms, and data pipelines that scale. Proven ability to deliver production-ready cloud solutions and turn complex engineering challenges into clean, maintainable software that drives measurable business outcomes.",

  // Rotating roles in Hero
  roles: ["Software Engineer", "Builder", "Billiards Player"],

  about:
    "Software Engineer ML with experience building production services, data ingestion systems, REST API integrations, and ML-powered products across Capital One, Amazon, and SGS Tekniks. Strong in Python, JavaScript, cloud infrastructure, CI/CD, FastAPI, React, and scalable backend design.",

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
      "Data Structures & Algorithms",
      "FAISS",
      "LLM/RAG",
      "XGBoost",
    ],
  },

  experience: [
    {
      company: "Capital One",
      title: "Software Engineer",
      dates: "Jul 2023 – Present",
      location: "Bellevue, WA",
      bullets: [
        "Architected and shipped a hybrid ML plus rule-based software pipeline using XGBoost for real-time account compromise detection, reducing fraud analyst investigation workload by 45 hours/month and improving model precision by 17%.",
        "Engineered an automated Python/SQL data-quality monitoring service with real-time KPI alerting integrated into CI/CD, intercepting data issues pre-production in roughly 80% of cases and reducing weekly metric variance by 20%.",
        "Designed and built a scalable ingestion and transformation layer consolidating 40M+ transactions from disparate systems into a unified self-serve analytics platform, eliminating 60% of manual analysis cycles.",
        "Developed and productionized fraud scoring microservices with automated model-threshold management via CI/CD, achieving 98% model adoption and zero-downtime deployments across Risk Management teams.",
        "Collaborated with engineering, compliance, and legal teams to align ML model outputs with U.S. regulatory standards while implementing dashboards, diagnostics, and root-cause analysis tooling.",
      ],
    },
    {
      company: "Amazon",
      title: "Software Engineer (ML)",
      dates: "Jun 2022 – Apr 2023",
      location: "Bellevue, WA",
      bullets: [
        "Designed and deployed secure notebook infrastructure for ML model training and deployment, reducing model development-to-production time by 40% for the Alexa Data Science team.",
        "Built an AI-powered notification quality assessment framework integrating user settings, reachability signals, and A/B test results across push, SMS, and email channels, improving Alexa engagement and retention by 20%.",
        "Launched an uplift-based targeting system with guardrails against notification fatigue, reducing sends by roughly 22% with no engagement loss, cutting SMS/email failures by roughly 30%, and lifting incremental conversion by roughly 8%.",
        "Implemented automated business logic for A/B, multivariate, and auto-targeting marketing experiments using Python, increasing campaign ROI and strategy effectiveness.",
      ],
    },
    {
      company: "SGS Tekniks",
      title: "Software Engineer",
      dates: "Nov 2014 – May 2018",
      location: "Gurugram, India",
      bullets: [
        "Built and maintained REST API integrations to pull data from third-party vendor systems into internal dashboards, tested endpoints, handled error responses, and documented API contracts for the team.",
        "Developed and maintained internal CRUD application features using Python and JavaScript to manage product catalog and customer records, fixed bugs, wrote unit tests, and participated in code reviews.",
        "Built a demand forecasting module using regression models in Python, integrated it into the order management system, and exposed results through a REST API endpoint consumed by the frontend dashboard, reducing overstock incidents by roughly 15%.",
      ],
    },
  ],

  projects: [
    {
      name: "Fraud Detection System",
      stack: ["Python", "XGBoost", "SQL"],
      bullets: [
        "Trained an XGBoost classifier with target encoding and transaction pattern features.",
        "Validated model performance with decile analysis, Lorenz curve, and Gini coefficient.",
        "Top 2 deciles captured the majority of fraud while maintaining high recall.",
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
      name: "IntelliQuery Engine (LLM + RAG)",
      stack: ["Python", "FastAPI", "FAISS", "React Native", "SQL"],
      bullets: [
        "Built a retrieval-augmented generation system using LLM embeddings and FAISS vector search, enabling semantic queries across 10K+ document chunks with sub-800ms response time and reducing unsupported responses by roughly 60%.",
        "Implemented intent routing with lightweight classification for finance and legal queries, improving accuracy by roughly 45% and cutting manual validation effort by roughly 50%.",
        "Deployed a scalable FastAPI backend integrated with a React Native application, delivering production-grade low-latency AI responses.",
      ],
      links: [
        {
          label: "Repo",
          href: "https://github.com/crazyphoton007/Intelliquery-Engine",
        },
      ],
    },
  ],

  education: [
    {
      school: "Trine University",
      degree: "M.S. Computer & Information Studies",
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
