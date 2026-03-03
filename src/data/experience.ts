export interface ExperienceEntry {
  hash: string;
  branch: string;
  role: { en: string; es: string };
  company: string;
  dateRange: { en: string; es: string };
  description: { en: string; es: string };
  tech: string[];
  stats: { files: number; insertions: number; deletions: number };
}

export const experience: ExperienceEntry[] = [
  {
    hash: 'f4c7b21',
    branch: 'HEAD -> fullstack',
    role: { en: 'FullStack Developer', es: 'Desarrollador FullStack' },
    company: 'L & C Financial Tech S.A.C.',
    dateRange: { en: 'Sep 2025 – Feb 2026', es: 'Sep 2025 – Feb 2026' },
    description: {
      en: 'Built microservices with NestJS/TypeScript for SUNAT electronic billing. Designed REST APIs, PostgreSQL schemas with Prisma, and deployed via Docker on DigitalOcean.',
      es: 'Construí microservicios con NestJS/TypeScript para facturación electrónica SUNAT. Diseñé APIs REST, esquemas PostgreSQL con Prisma, y despliegues con Docker en DigitalOcean.',
    },
    tech: ['NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker', 'DigitalOcean'],
    stats: { files: 47, insertions: 3842, deletions: 156 },
  },
  {
    hash: 'a91e3f0',
    branch: 'feature/calma-fullstack',
    role: { en: 'FullStack Developer', es: 'Desarrollador FullStack' },
    company: 'Fundación CALMA',
    dateRange: { en: 'Jan 2026 – Feb 2026', es: 'Ene 2026 – Feb 2026' },
    description: {
      en: 'Developed backend with NestJS + PostgreSQL and frontend with React + Next.js. Implemented microservices architecture for the foundation platform.',
      es: 'Desarrollé backend con NestJS + PostgreSQL y frontend con React + Next.js. Implementé arquitectura de microservicios para la plataforma de la fundación.',
    },
    tech: ['NestJS', 'React', 'Next.js', 'PostgreSQL', 'Microservices'],
    stats: { files: 32, insertions: 2156, deletions: 89 },
  },
  {
    hash: 'c3d8a47',
    branch: 'feature/calma-backend',
    role: { en: 'Backend Developer Intern', es: 'Practicante Backend' },
    company: 'Fundación CALMA',
    dateRange: { en: 'Sep 2025 – Dec 2025', es: 'Sep 2025 – Dic 2025' },
    description: {
      en: 'Built NestJS microservices with async Kafka messaging. Focused on automation and performance optimization for backend systems.',
      es: 'Construí microservicios NestJS con mensajería asíncrona Kafka. Enfocado en automatización y optimización de rendimiento de sistemas backend.',
    },
    tech: ['NestJS', 'Kafka', 'TypeScript', 'Microservices'],
    stats: { files: 28, insertions: 1893, deletions: 234 },
  },
  {
    hash: 'b7f2e19',
    branch: 'main',
    role: { en: 'Founder & Freelance', es: 'Fundador & Freelance' },
    company: 'CodeGito',
    dateRange: { en: 'Dec 2024 – Present', es: 'Dic 2024 – Presente' },
    description: {
      en: 'Building scalable APIs with Spring Boot and NestJS. Designing systems with PostgreSQL/MySQL and deploying to cloud infrastructure.',
      es: 'Construyendo APIs escalables con Spring Boot y NestJS. Diseñando sistemas con PostgreSQL/MySQL y desplegando en infraestructura cloud.',
    },
    tech: ['Spring Boot', 'NestJS', 'PostgreSQL', 'MySQL', 'Docker', 'AWS'],
    stats: { files: 64, insertions: 5210, deletions: 412 },
  },
];
