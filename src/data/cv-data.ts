export interface ContactInfo {
  name: string;
  location: string;
  email: string;
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

export interface Achievement {
  title: string;
  description: string;
}

export const contactInfo: ContactInfo = {
  name: 'Edward Yu',
  location: 'Auckland, New Zealand',
  email: 'edwardkcyu@gmail.com',
  linkedin: 'https://www.linkedin.com/in/edwardkcyu',
};

export const summary: SummaryPoint[] = [
  {
    text: '15+ years of experience in fullstack engineering, specializing in AWS-native architectures, event-driven systems, and hybrid integration across on-prem and cloud environments.',
  },
  {
    text: 'Proven ability to lead teams and deliver scalable, secure integration platforms for large-scale SaaS and Web3 systems.',
  },
  {
    text: 'Hands-on expertise with Node.js, AWS (Lambda, API Gateway, Step Functions, EventBridge, SQS/SNS, ECS, DynamoDB), and IaC (CDK, Terraform).',
  },
  {
    text: 'Skilled in modern integration patterns, CI/CD, and system migration to AWS.',
  },
  {
    text: 'Experienced in collaborating with executives to define architecture strategies and align tech with business goals.',
  },
];

export const achievements: Achievement[] = [
  {
    title: 'Optimized Indexer Performance (Futureverse)',
    description:
      'Improved blockchain indexer throughput by 2x and reduced cost by 10x through parallelization and query restructuring on AWS.',
  },
  {
    title: 'Enhanced GraphQL Efficiency (Futureverse)',
    description:
      'Cut GraphQL response time by up to 10s, improving data reliability.',
  },
  {
    title: 'Infrastructure Migration (New Order)',
    description:
      'Migrated core systems from Heroku to AWS ECS, reducing latency by 50% and cutting costs by 30%.',
  },
  {
    title: 'Streamlined CI/CD Pipelines (Pushpay)',
    description:
      'Reduced deployment time by 30 minutes through Jenkins & AWS pipeline tuning.',
  },
];

export const skills: SkillCategory[] = [
  {
    name: 'Backend',
    skills: ['Node.js', 'TypeScript', 'NestJS', 'GraphQL', 'Golang'],
  },
  {
    name: 'Databases',
    skills: [
      'DynamoDB',
      'MongoDB',
      'PostgreSQL',
      'ElasticSearch/OpenSearch',
      'Neptune',
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      'AWS (ECS, Lambda, EventBridge, DynamoDB, Kinesis, SQS)',
      'Terraform',
      'CDK',
      'Docker',
      'CI/CD (GitHub Actions, Jenkins)',
    ],
  },
  {
    name: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'Chakra UI',
      'Vite',
      'Webpack',
    ],
  },
  {
    name: 'Web3',
    skills: [
      'Solidity',
      'Hardhat',
      'Alchemy API',
      'Infura API',
      'JSON RPC',
      'Indexers',
    ],
  },
  {
    name: 'Testing & Quality',
    skills: ['Jest', 'Mocha', 'ESLint', 'Prettier'],
  },
  {
    name: 'AI Tools',
    skills: [
      'Cursor',
      'GitHub Copilot',
      'MCP',
      'OpenAI Atlas',
      'GitHub Spec Kit',
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    title: 'Principal Engineer — Futureverse, NZ | Web3',
    company: 'Futureverse, NZ (Web3)',
    period: 'Aug 2023 – Oct 2025',
    note: 'Company shut down due to lack of funding',
    description: [
      'Designed AWS-based integration layers powering multi-chain APIs and event-driven pipelines.',
      'Built real-time integration services using EventBridge and SQS for improved reliability.',
      'Drove performance tuning for backend indexers, cutting operational cost by 10x and boosting performance by 2x.',
      'Partnered with CTO and VP Engineering to define integration strategy and architecture standards.',
      'Mentored developers on scalability, modularity, and fault tolerance.',
      'Owned platform reliability, monitoring, and deployment automation.',
    ],
    links: [
      { name: 'Futureverse', url: 'https://www.futureverse.com/' },
      { name: 'The Root Network', url: 'https://www.therootnetwork.com/' },
      { name: 'Asset Register', url: 'https://ar-docs.futureverse.app/' },
    ],
  },
  {
    title: 'Senior Software Engineer — New Order, US | Web3',
    company: 'New Order, US (Web3)',
    period: 'Apr 2023 – Jul 2023',
    note: 'Project discontinued due to funding shortage',
    description: [
      'Fullstack development collaborating directly with cofounders and executives.',
    ],
    links: [
      { name: 'New Order', url: 'https://www.neworder.network/' },
      { name: 'Motherboard.fi', url: 'https://medium.com/@motherboard_fi' },
    ],
  },
  {
    title: 'Senior Software Engineer — NEAR Inc, US | Web3',
    company: 'NEAR Inc, US (Web3)',
    period: 'Oct 2022 – Jan 2023',
    note: 'Project halted due to company restructuring',
    description: ['Fullstack engineering to support system development.'],
    links: [{ name: 'AstroDAO', url: 'https://x.com/astrodao?lang=en' }],
  },
  {
    title: 'Senior Software Engineer — Pushpay, NZ | SaaS',
    company: 'Pushpay, NZ (SaaS)',
    period: 'Mar 2020 – Sep 2022',
    description: [
      'Mastered AWS infrastructure, optimized CI/CD pipelines, and migrated REST APIs to GraphQL.',
      'Tuned AWS Timestream DB and delivered Node.js backend improvements.',
    ],
  },
  {
    title: 'Backend Engineer - KintoHub, HK',
    company: 'KintoHub, HK',
    period: 'Apr 2019 – Feb 2020',
    description: [
      'Developed backend and infrastructure using Golang, Kubernetes (GCP), Argo CD, and PostgreSQL.',
      'Built GraphQL services using Hasura.',
    ],
  },
  {
    title: 'Senior Software Analyst - TVB New Media Group, HK',
    company: 'TVB New Media Group, HK',
    period: 'Apr 2018 – Mar 2019',
    description: [
      'Worked with React, Koa, Kubernetes (Azure), Cosmos DB, and Redis to support large-scale media systems.',
    ],
  },
  {
    title: 'Analyst Programmer - Hospital Authority, HK',
    company: 'Hospital Authority, HK',
    period: 'Aug 2010 – Apr 2018',
    description: [
      'Developed enterprise systems using JavaEE, WebLogic, Sybase, and Node.js.',
    ],
  },
  {
    title: 'Software Engineer - Mobigator Technology Group, HK',
    company: 'Mobigator Technology Group, HK',
    period: 'Jul 2009 – Aug 2010',
    description: [
      'Built healthcare-related systems using Java, Groovy, MySQL, and ExtJS.',
    ],
  },
];

export const education: EducationItem = {
  degree: 'BEng (Computer Science) — 1st Class Honours',
  institution: 'The Hong Kong University of Science and Technology',
  period: '2006 – 2009',
};
