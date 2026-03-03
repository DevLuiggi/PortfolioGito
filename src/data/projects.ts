export interface Project {
  number: string;
  name: string;
  type: { en: string; es: string };
  description: { en: string; es: string };
  features: { en: string[]; es: string[] };
  tech: string[];
  demoUrl?: string;
  repoUrl?: string;
  language: string;
  stars: number;
  forks: number;
}

export const projects: Project[] = [
  {
    number: '01',
    name: 'StarFact',
    type: { en: 'SaaS', es: 'SaaS' },
    description: {
      en: 'Multi-tenant SaaS platform for electronic billing in Peru (SUNAT). Supports UBL 2.1, digital signing, GRE, SIRE, POS, and inventory management.',
      es: 'Plataforma SaaS multi-tenant de facturación electrónica Perú (SUNAT). Soporta UBL 2.1, firmado digital, GRE, SIRE, POS e inventario.',
    },
    features: {
      en: [
        'UBL 2.1 electronic invoicing',
        'Digital signing & SUNAT validation',
        'Multi-tenant architecture',
        'POS & inventory management',
        'GRE & SIRE compliance',
      ],
      es: [
        'Facturación electrónica UBL 2.1',
        'Firmado digital y validación SUNAT',
        'Arquitectura multi-tenant',
        'POS y gestión de inventario',
        'Cumplimiento GRE y SIRE',
      ],
    },
    tech: ['NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker', 'DigitalOcean'],
    demoUrl: 'https://starfact.pe',
    language: 'TypeScript',
    stars: 12,
    forks: 3,
  },
  {
    number: '02',
    name: 'FacturIA',
    type: { en: 'Microservice', es: 'Microservicio' },
    description: {
      en: 'OCR pipeline for invoice and receipt processing. Combines computer vision with post-processing for automatic data extraction.',
      es: 'Pipeline OCR para procesamiento de facturas y comprobantes. Combina visión por computadora con post-procesamiento para extracción automática de datos.',
    },
    features: {
      en: [
        'OCR document scanning',
        'AI-powered data extraction',
        'Post-processing pipeline',
        'REST API integration',
      ],
      es: [
        'Escaneo OCR de documentos',
        'Extracción de datos con IA',
        'Pipeline de post-procesamiento',
        'Integración API REST',
      ],
    },
    tech: ['Python', 'NestJS', 'PostgreSQL', 'Docker'],
    language: 'Python',
    stars: 5,
    forks: 1,
  },
  {
    number: '03',
    name: 'Homelab Deploy',
    type: { en: 'Infrastructure', es: 'Infraestructura' },
    description: {
      en: 'Self-hosted infrastructure setup with Proxmox, Docker containers, reverse proxy, and Cloudflare tunnel for secure remote access.',
      es: 'Infraestructura self-hosted con Proxmox, contenedores Docker, reverse proxy y Cloudflare tunnel para acceso remoto seguro.',
    },
    features: {
      en: [
        'Proxmox virtualization',
        'Docker container orchestration',
        'Reverse proxy with SSL',
        'Cloudflare tunnel setup',
      ],
      es: [
        'Virtualización Proxmox',
        'Orquestación de contenedores Docker',
        'Reverse proxy con SSL',
        'Configuración Cloudflare tunnel',
      ],
    },
    tech: ['Docker', 'Linux', 'Nginx', 'Cloudflare'],
    language: 'Shell',
    stars: 3,
    forks: 0,
  },
];
