export interface Skill {
  name: string;
  deviconClass: string;
  svgUrl?: string;
  category: 'language' | 'backend' | 'frontend' | 'database' | 'devops' | 'messaging' | 'tool';
}

export const skills: Skill[] = [
  { name: 'Java', deviconClass: 'devicon-java-plain colored', category: 'language' },
  { name: 'TypeScript', deviconClass: 'devicon-typescript-plain colored', category: 'language' },
  { name: 'JavaScript', deviconClass: 'devicon-javascript-plain colored', category: 'language' },
  { name: 'Python', deviconClass: 'devicon-python-plain colored', category: 'language' },
  { name: 'NestJS', deviconClass: 'devicon-nestjs-original colored', category: 'backend' },
  { name: 'Spring Boot', deviconClass: 'devicon-spring-original colored', category: 'backend' },
  { name: 'Node.js', deviconClass: 'devicon-nodejs-plain colored', category: 'backend' },
  { name: 'Angular', deviconClass: 'devicon-angular-plain colored', category: 'frontend' },
  { name: 'React', deviconClass: 'devicon-react-original colored', category: 'frontend' },
  { name: 'Next.js', deviconClass: 'devicon-nextjs-plain', category: 'frontend' },
  { name: 'PostgreSQL', deviconClass: 'devicon-postgresql-plain colored', category: 'database' },
  { name: 'MySQL', deviconClass: 'devicon-mysql-plain colored', category: 'database' },
  { name: 'MongoDB', deviconClass: 'devicon-mongodb-plain colored', category: 'database' },
  { name: 'Prisma', deviconClass: 'devicon-prisma-original', category: 'database' },
  { name: 'Docker', deviconClass: 'devicon-docker-plain colored', category: 'devops' },
  { name: 'AWS', deviconClass: 'devicon-amazonwebservices-plain-wordmark colored', category: 'devops' },
  { name: 'DigitalOcean', deviconClass: 'devicon-digitalocean-original colored', category: 'devops' },
  { name: 'Linux', deviconClass: '', svgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg', category: 'devops' },
  { name: 'Kafka', deviconClass: 'devicon-apachekafka-original', category: 'messaging' },
  { name: 'Nginx', deviconClass: 'devicon-nginx-original colored', category: 'devops' },
  { name: 'CSS3', deviconClass: 'devicon-css3-plain colored', category: 'frontend' },
  { name: 'HTML5', deviconClass: 'devicon-html5-plain colored', category: 'frontend' },
  { name: 'Git', deviconClass: 'devicon-git-plain colored', category: 'tool' },
  { name: 'Postman', deviconClass: 'devicon-postman-plain colored', category: 'tool' },
  { name: 'Swagger', deviconClass: 'devicon-swagger-plain colored', category: 'tool' },
];
