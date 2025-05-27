import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';
import {
  CodeBracketSquareIcon, 
  CommandLineIcon, 
  BeakerIcon,
  Cog6ToothIcon,
  UserGroupIcon,
  GlobeAltIcon, 
  AdjustmentsHorizontalIcon,
  ClockIcon,  
  CloudIcon,  
  LightBulbIcon,
  CheckIcon, 
  FolderIcon,
  LockClosedIcon, 
} from '@heroicons/react/24/solid';

export type Skill = {
  name: string;
  category: 'backend' | 'frontend' | 'databases' | 'tools' | 'soft-skills';
  icon?: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
  color?: string; 
};

export const allSkillsData: Skill[] = [
  {
    name: 'HTML5',
    category: 'frontend',
    icon: CommandLineIcon,
    color: 'text-orange-500',
  },
  {
    name: 'CSS3',
    category: 'frontend',
    icon: CommandLineIcon,
    color: 'text-blue-500',
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    icon: CommandLineIcon,
    color: 'text-yellow-400',
  },
  {
    name: 'React.js',
    category: 'frontend',
    icon: CommandLineIcon,
    color: 'text-blue-400',
  },
  {
    name: 'Next.js',
    category: 'frontend',
    icon: CommandLineIcon,
    color: 'text-gray-400',
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    icon: CommandLineIcon,
    color: 'text-cyan-400',
  },
  {
    name: 'Bootstrap',
    category: 'frontend',
    icon: CommandLineIcon,
    color: 'text-purple-500',
  },
  {
    name: 'jQuery',
    category: 'frontend',
    icon: CommandLineIcon,
    color: 'text-blue-600',
  },
  {
    name: 'Manejo del DOM',
    category: 'frontend',
    icon: CommandLineIcon,
    color: 'text-green-400',
  },
  {
    name: 'Consumo de APIs (RESTful)',
    category: 'frontend',
    icon: GlobeAltIcon,
    color: 'text-teal-400',
  },

  // Backend
  {
    name: 'Node.js',
    category: 'backend',
    icon: CodeBracketSquareIcon,
    color: 'text-green-500',
  },
  {
    name: 'NestJS',
    category: 'backend',
    icon: CodeBracketSquareIcon,
    color: 'text-red-500',
  },
  {
    name: 'Express.js',
    category: 'backend',
    icon: CodeBracketSquareIcon,
    color: 'text-yellow-500',
  },
  {
    name: 'APIs RESTful (Diseño)',
    category: 'backend',
    icon: GlobeAltIcon,
    color: 'text-orange-500',
  },
  {
    name: 'OAuth',
    category: 'backend',
    icon: LockClosedIcon,
    color: 'text-indigo-400',
  },
  {
    name: 'Cloudinary',
    category: 'backend',
    icon: CloudIcon,
    color: 'text-blue-400',
  },

  {
    name: 'MongoDB',
    category: 'databases',
    icon: BeakerIcon,
    color: 'text-green-600',
  },
  {
    name: 'PostgreSQL',
    category: 'databases',
    icon: BeakerIcon,
    color: 'text-blue-600',
  },
  {
    name: 'MySQL',
    category: 'databases',
    icon: BeakerIcon,
    color: 'text-orange-600',
  },

  {
    name: 'Git',
    category: 'tools',
    icon: Cog6ToothIcon,
    color: 'text-red-400',
  },
  {
    name: 'Docker',
    category: 'tools',
    icon: Cog6ToothIcon,
    color: 'text-blue-400',
  },
  {
    name: 'Vercel',
    category: 'tools',
    icon: CloudIcon,
    color: 'text-gray-500',
  },
  {
    name: 'Postman',
    category: 'tools',
    icon: Cog6ToothIcon,
    color: 'text-orange-400',
  },
  {
    name: 'JSON',
    category: 'tools',
    icon: Cog6ToothIcon,
    color: 'text-gray-300',
  },

  {
    name: 'Comunicación',
    category: 'soft-skills',
    icon: UserGroupIcon,
    color: 'text-purple-400',
  },
  {
    name: 'Trabajo en Equipo',
    category: 'soft-skills',
    icon: UserGroupIcon,
    color: 'text-teal-400',
  },
  {
    name: 'Resolución de Problemas',
    category: 'soft-skills',
    icon: UserGroupIcon,
    color: 'text-rose-400',
  },
  {
    name: 'Proactividad',
    category: 'soft-skills',
    icon: UserGroupIcon,
    color: 'text-amber-400',
  },
  {
    name: 'Adaptabilidad y Flexibilidad',
    category: 'soft-skills',
    icon: AdjustmentsHorizontalIcon,
    color: 'text-lime-400',
  },
  {
    name: 'Gestión del Tiempo y Priorización',
    category: 'soft-skills',
    icon: ClockIcon,
    color: 'text-sky-400',
  },
  {
    name: 'Planificación y Desarrollo de Soluciones',
    category: 'soft-skills',
    icon: LightBulbIcon,
    color: 'text-indigo-500',
  },
  {
    name: 'Aseguramiento de la Calidad y Atención al Detalle',
    category: 'soft-skills',
    icon: CheckIcon,
    color: 'text-lime-500',
  },
  {
    name: 'Organización y Gestión de Información/Recursos',
    category: 'soft-skills',
    icon: FolderIcon,
    color: 'text-teal-500',
  },
];
