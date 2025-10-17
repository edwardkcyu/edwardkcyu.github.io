export interface ContactInfo {
  name: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
}

export interface SummaryPoint {
  text: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  note?: string;
  description: string[];
  links?: { name: string; url: string }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  honors?: string;
}

export const contactInfo: ContactInfo = {
  name: "Edward Yu",
  location: "Auckland, New Zealand",
  email: "edwardkcyu@gmail.com",
  phone: "(+64) 212296411",
  linkedin: "https://www.linkedin.com/in/edwardkcyu",
};

export const summary: SummaryPoint[] = [
  {
    text: "15+ years of experience in software engineering, specializing in backend systems, distributed architecture, and performance optimization.",
  },
  {
    text: "Principal Engineer in Web3 infrastructure since 2022 — built scalable NFT/SFT platforms, multi-chain APIs, and blockchain indexers.",
  },
  {
    text: "Expertise in performance tuning, system reliability, and cross-functional leadership.",
  },
  {
    text: "Strong track record in mentoring engineers, leading architecture design, and delivering high-performance infrastructure for large-scale systems.",
  },
];

export const skills: SkillCategory[] = [
  {
    name: "Backend",
    skills: [
      "TypeScript",
      "Golang",
      "Python",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "ElasticSearch",
      "GraphQL",
      "AWS (SQS, DynamoDB, Kinesis, ECS, EKS, EventBridge)",
    ],
  },
  {
    name: "Frontend",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Vercel",
      "Webpack",
      "Chakra UI",
    ],
  },
  {
    name: "Code Quality",
    skills: ["Jest", "Mocha", "ESLint", "Prettier", "Mocking"],
  },
  {
    name: "DevOps",
    skills: [
      "CI/CD",
      "AWS CDK",
      "Terraform",
      "GitHub Actions",
      "Jenkins",
      "Containers",
      "Docker",
    ],
  },
  {
    name: "Web3",
    skills: [
      "Solidity",
      "Hardhat",
      "Alchemy API",
      "Infura API",
      "JSON RPC",
      "Indexers",
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    title: "Principal Engineer",
    company: "Futureverse, NZ (Web3)",
    period: "May 2025 – Oct 2025",
    note: "Company closed due to funding issues",
    description: [
      "Architected scalable multi-chain APIs for NFT/SFT asset management across multiple L1/L2 chains.",
      "Optimized blockchain indexers for 10x cost reduction and 2x performance gains.",
      "Designed cross-chain asset infrastructure for real-time gaming item management.",
      "Led system-wide performance tuning and database optimization.",
      "Mentored teams and drove architecture decisions for scalability and reliability.",
    ],
    links: [
      { name: "Futureverse", url: "https://www.futureverse.com/" },
      { name: "The Root Network", url: "https://www.therootnetwork.com/" },
      { name: "Asset Register", url: "https://ar-docs.futureverse.app/" },
    ],
  },
  {
    title: "Senior Full Stack Engineer",
    company: "Futureverse, NZ (Web3)",
    period: "Aug 2023 – May 2025",
    description: [
      "Built and maintained GraphQL APIs and TypeScript SDKs for blockchain data and gaming integrations.",
      "Worked across AWS infrastructure (Lambda, DynamoDB, ECS, EventBridge, SQS, OpenSearch).",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "New Order, US (Web3)",
    period: "Apr 2023 – Jul 2023",
    note: "Project stopped due to lack of funding",
    description: [
      "Full-stack development using NestJS, Next.js, and AWS CDK.",
      "Managed frontend, backend, infrastructure, and research as a core startup engineer.",
    ],
    links: [
      { name: "New Order", url: "https://www.neworder.network/" },
      { name: "Motherboard.fi", url: "https://medium.com/@motherboard_fi" },
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "NEAR Inc, US (Web3)",
    period: "Oct 2022 – Jan 2023",
    note: "Ended due to company restructure and layoffs",
    description: [
      "Contributed to AstroDAO, a DAO management platform on the NEAR protocol.",
      "Worked on full-stack development using Next.js, NestJS, AWS, and Kubernetes.",
    ],
    links: [{ name: "AstroDAO", url: "https://app.astrodao.com/" }],
  },
  {
    title: "Senior Software Engineer",
    company: "Pushpay, NZ (SaaS)",
    period: "Mar 2020 – Sep 2022",
    description: [
      "Migrated REST APIs to GraphQL and optimized AWS services (ECS, DynamoDB, Kinesis, SQS, Lambda).",
      "Improved CI/CD pipelines using Jenkins and enhanced backend performance for production workloads.",
    ],
  },
  {
    title: "Backend Engineer",
    company: "KintoHub, HK",
    period: "Apr 2019 – Feb 2020",
    description: [
      "Developed backend and infrastructure using Golang, Kubernetes (GCP), Argo CD, and PostgreSQL.",
      "Built GraphQL services using Hasura.",
    ],
  },
  {
    title: "Senior Software Analyst",
    company: "TVB New Media Group, HK",
    period: "Apr 2018 – Mar 2019",
    description: [
      "Worked with React, Koa, Kubernetes (Azure), Cosmos DB, and Redis to support large-scale media systems.",
    ],
  },
  {
    title: "Analyst Programmer",
    company: "Hospital Authority, HK",
    period: "Aug 2010 – Apr 2018",
    description: [
      "Developed enterprise systems using JavaEE, WebLogic, Sybase, and Node.js.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Mobigator Technology Group, HK",
    period: "Jul 2009 – Aug 2010",
    description: [
      "Built healthcare-related systems using Java, Groovy, MySQL, and ExtJS.",
    ],
  },
];

export const education: EducationItem = {
  degree: "Bachelor of Engineering in Computer Science",
  institution: "The Hong Kong University of Science and Technology",
  period: "2006 – 2009",
  honors: "Graduated with First Class Honors",
};
