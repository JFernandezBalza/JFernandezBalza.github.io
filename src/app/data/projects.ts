// src/app/data/projects.ts

export interface Project {
  title: string;
  description: string;
  image: string;
  alt: string;
  technologies: string[];
  liveUrl?: string; // ¡Cambiado de liveDemo a liveUrl!
  githubUrl?: string; // ¡Cambiado de githubRepo a githubUrl!
}

// Exporta tus datos de proyectos, ahora tipados
export const projectsData: Project[] = [
  {
    title: 'XtremeGym - Plataforma Full Stack',
    description:
      'Participé activamente en el desarrollo de una aplicación Full Stack robusta, construida sobre una arquitectura moderna y escalable con NestJS. Mi enfoque garantizó una base sólida y mantenible para la plataforma. Mis contribuciones clave en el Back-End incluyeron el diseño e implementación de módulos esenciales: Panel de Administración Inteligente, Sistema Integral de Gestión de Eventos, Sistema de Reservas Optimizado, Módulo de Comunidad Dinámica, Gestión Segura y Eficiente de Carga de Imágenes y Funcionalidades de Geolocalización Inteligente.',
    image: '/xtreme.jpg', // Asegúrate de que esta imagen exista en tu carpeta `public`
    alt: 'Imagen de la plataforma Extreme Gym',
    technologies: ['NestJS', 'Node.js', 'TypeScript', 'NextJs'],
    liveUrl: 'https://pf-extreme-gym.vercel.app/', // ¡Ajustado!
    githubUrl: 'https://github.com/ExtremeGym25/PF-Extreme-Gym', // ¡Ajustado!
  },
  {
    title: 'E-commerce - Backend',
    description:
      'Lideré el backend de un e-commerce potente y atractivo, donde puse en práctica mis habilidades para crear arquitecturas robustas y escalables con NestJS. Este proyecto muestra cómo construyo backend complejos, seguros y bien documentados, listos para la nube.',
    image: '/ecommerce.jpg', // Asegúrate de que esta imagen exista en tu carpeta `public`
    alt: 'Imagen de la documentación del back-end del e-commerce',
    technologies: [
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'TypeORM',
      'JWT',
      'Swagger',
      'Render',
    ],
    liveUrl: 'https://e-commerce-nemn.onrender.com/api', // ¡Ajustado!
    githubUrl: 'https://github.com/JFernandezBalza/E-commerce', // ¡Ajustado!
  },
  {
    title: 'Restaurante App - Plataforma Full Stack de Reservas',
    description:
      'Diseñé y desarrollé una aplicación Full Stack integral para la gestión de un restaurante, que abarca desde la administración de usuarios hasta un robusto sistema de reservas. Mi enfoque se centró en construir una solución escalable y fácil de usar. Las funcionalidades clave incluyen la creación segura de usuarios y autenticación, un completo sistema de reservas con validaciones y gestión de disponibilidad, y el registro persistente de todos los datos en una base de datos. El proyecto garantiza una interacción fluida y una experiencia de usuario óptima, desde la creación de una cuenta hasta la confirmación de una reserva.',
    image: '/restaurant.png',
    alt: 'Imagen de la aplicación de reservas del restaurante',
    technologies: [
      'React',
      'TypeScript',
      'Express.js',
      'Node.js',
      'PostgreSQL',
      'TypeORM',
      'Vite',
    ],
    liveUrl: 'https://restaurant-phi-tan.vercel.app/login', 
    githubUrl: 'https://github.com/JFernandezBalza/Restaurant',
  },
];
