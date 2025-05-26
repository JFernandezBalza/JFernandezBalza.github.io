// import Image from 'next/image';
// import { projectsData } from './data/projects';
// import {
//   CodeBracketSquareIcon,
//   CommandLineIcon,
//   BeakerIcon,
//   CubeIcon,
//   LightBulbIcon,
//   UserGroupIcon,
//   CheckIcon,
//   CogIcon,
//   LockClosedIcon,
//   CloudIcon,
//   CpuChipIcon,
//   PresentationChartBarIcon,
//   DocumentDuplicateIcon,
//   CodeBracketIcon,
//   WrenchScrewdriverIcon,
//   UsersIcon,
//   FolderIcon,
// } from '@heroicons/react/24/solid';
// import Navbar from '../app/components/NavBar';

// const Proyectos = () => (
//   <section id='proyectos' className='py-16'>
//     {' '}
//     <div className='container mx-auto text-center'>
//       <h2 className='text-3xl font-semibold text-gray-300 mb-8'>
//         Explora mi Trabajo
//       </h2>
//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
//         {' '}
//         {projectsData.map((project, index) => (
//           <div key={index} className='rounded-lg shadow-md overflow-hidden'>
//             {' '}
//             <Image
//               src={project.image}
//               alt={project.alt}
//               width={600}
//               height={400}
//               className='w-full h-48 object-cover'
//             />
//             <div className='p-6'>
//               <h3 className='text-xl font-semibold text-white mb-2'>
//                 {project.title}
//               </h3>
//               <p className='text-gray-400 text-sm mb-4'>
//                 {project.description}
//               </p>
//               <div className='flex flex-wrap gap-2 mb-4'>
//                 {project.technologies.map((tech, techIndex) => (
//                   <span
//                     key={techIndex}
//                     className='inline-flex items-center bg-gray-600 text-gray-300 rounded-full px-2 py-1 text-xs font-semibold'
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className='flex justify-between'>
//                 {project.liveDemo && (
//                   <a
//                     href={project.liveDemo}
//                     target='_blank'
//                     rel='noopener noreferrer'
//                     className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm'
//                   >
//                     Demo
//                   </a>
//                 )}
//                 {project.githubRepo && (
//                   <a
//                     href={project.githubRepo}
//                     target='_blank'
//                     rel='noopener noreferrer'
//                     className='bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded text-sm'
//                   >
//                     GitHub
//                   </a>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );
// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <main className='flex min-h-screen flex-col items-center justify-between p-24 text-white'>
//         <section className='text-center md:text-left'>
//           {' '}
//           <div className='flex flex-col md:flex-row items-center justify-center md:justify-start mb-8'>
//             {' '}
//             <Image
//               src='/perfil.jpeg.jpeg'
//               alt='Mi foto personal'
//               width={300}
//               height={300}
//               className='rounded-lg border-5 border-gray-300 shadow-sm mr-0 md:mr-8 mb-4 md:mb-0'
//             />
//             <div>
//               <h1 className='text-4xl font-bold text-gray-100'>
//                 Joser A. Fernández B.
//               </h1>
//               <p className='text-2xl mt-2 text-gray-300'>
//                 Desarrollador Full Stack | Especialista en Back-End
//               </p>
//               <p className='text-2xl mt-2 text-gray-300'>
//                 Soy un Desarrollador Full Stack con una sólida formación en
//                 Back-End, creando APIs eficientes y escalables con Node.js y
//                 NestJS. Experiencia práctica en bases de datos SQL y NoSQL
//                 (MongoDB), junto con habilidades en Front-End (ReactJS, Next.js,
//                 HTML5, CSS3) para desarrollar aplicaciones web completas.
//               </p>
//               <p className='mt-4 text-lg text-gray-400'>
//                 Creando soluciones web robustas y escalables con pasión por la
//                 innovación y la excelencia en el desarrollo.
//               </p>
//               <div className='mt-6 flex items-center'>
//                 <a
//                   href='/CVJoserFernandez.pdf'
//                   target='_blank'
//                   rel='noopener noreferrer'
//                   className='bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md mr-4 transition duration-300'
//                 >
//                   Ver mi CV
//                 </a>
//                 <a
//                   href='https://github.com/JFernandezBalza'
//                   target='_blank'
//                   rel='noopener noreferrer'
//                   className='bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md mr-4 transition duration-300'
//                 >
//                   GitHub
//                 </a>
//                 <a
//                   href='https://www.linkedin.com/in/joser-a-fernandez-b-76182429b/'
//                   target='_blank'
//                   rel='noopener noreferrer'
//                   className='bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300'
//                 >
//                   LinkedIn
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section id='habilidades' className='mt-12 py-8'>
//           <h2 className='text-3xl font-semibold mb-6 text-gray-300 text-center md:text-left'>
//             Habilidades Clave
//           </h2>
//           <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6'>
//             <div className='flex items-center space-x-2 bg-gray-800 rounded-md p-3 hover:bg-gray-700 transition duration-300'>
//               <CodeBracketSquareIcon className='h-6 w-6 text-blue-500' />
//               <span>NestJS</span>
//             </div>
//             <div className='flex items-center space-x-2 bg-gray-800 rounded-md p-3 hover:bg-gray-700 transition duration-300'>
//               <CommandLineIcon className='h-6 w-6 text-green-500' />
//               <span>Node.js</span>
//             </div>
//             <div className='flex items-center space-x-2 bg-gray-800 rounded-md p-3 hover:bg-gray-700 transition duration-300'>
//               <BeakerIcon className='h-6 w-6 text-purple-500' />
//               <span>TypeScript</span>
//             </div>
//             <div className='flex items-center space-x-2 bg-gray-800 rounded-md p-3 hover:bg-gray-700 transition duration-300'>
//               <CogIcon className='h-6 w-6 text-red-500' />{' '}
//               {/* Alternativa para TypeORM */}
//               <span>TypeORM</span>
//             </div>
//             <div className='flex items-center space-x-2 bg-gray-800 rounded-md p-3 hover:bg-gray-700 transition duration-300'>
//               <PresentationChartBarIcon className='h-6 w-6 text-red-500' />{' '}
//               {/* Alternativa para SQL */}
//               <span>SQL</span>
//             </div>
//             <div className='flex items-center space-x-2 bg-gray-800 rounded-md p-3 hover:bg-gray-700 transition duration-300'>
//               <CpuChipIcon className='h-6 w-6 text-teal-500' />{' '}
//               {/* Alternativa para NoSQL (MongoDB) */}
//               <span>NoSQL (MongoDB)</span>
//             </div>
//             <div className='flex items-center space-x-2 bg-gray-800 rounded-md p-3 hover:bg-gray-700 transition duration-300'>
//               <DocumentDuplicateIcon className='h-6 w-6 text-orange-500' />{' '}
//               {/* Alternativa para Swagger */}
//               <span>Swagger</span>
//             </div>
//             <div className='flex items-center space-x-2 bg-gray-800 rounded-md p-3 hover:bg-gray-700 transition duration-300'>
//               <CubeIcon className='h-6 w-6 text-yellow-500' />
//               <span>NextJS</span>
//             </div>
//             <div className='flex items-center space-x-2 bg-gray-800 rounded-md p-3 hover:bg-gray-700 transition duration-300'>
//               <CubeIcon className='h-6 w-6 text-blue-300' />
//               <span>React</span>
//             </div>
//             <div className='flex items-center space-x-2 bg-gray-800 rounded-md p-3 hover:bg-gray-700 transition duration-300'>
//               <CodeBracketIcon className='h-6 w-6 text-yellow-400' />{' '}
//               {/* Alternativa para JavaScript */}
//               <span>JavaScript</span>
//             </div>
//             <div className='flex items-center space-x-2 bg-gray-800 rounded-md p-3 hover:bg-gray-700 transition duration-300'>
//               <WrenchScrewdriverIcon className='h-6 w-6 text-purple-400' />{' '}
//               {/* Alternativa para Bootstrap */}
//               <span>Bootstrap</span>
//             </div>
//             <div className='flex items-center space-x-2 bg-gray-800 rounded-md p-3 hover:bg-gray-700 transition duration-300'>
//               <LockClosedIcon className='h-6 w-6 text-red-400' />
//               <span>JWT</span>
//             </div>
//             <div className='flex items-center space-x-2 bg-gray-800 rounded-md p-3 hover:bg-gray-700 transition duration-300'>
//               <CloudIcon className='h-6 w-6 text-blue-400' />
//               <span>Cloudinary</span>
//             </div>
//           </div>
//         </section>

//         <section className='mt-8'>
//           <h2 className='text-3xl font-semibold mb-6 text-gray-300 text-center md:text-left'>
//             Otras Habilidades
//           </h2>
//           <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6'>
//             <div className='flex items-center space-x-2 bg-gray-800 rounded-md p-3 hover:bg-gray-700 transition duration-300'>
//               <LightBulbIcon className='h-6 w-6 text-indigo-500' />
//               <span>Planificación y Desarrollo de Soluciones</span>
//             </div>
//             <div className='flex items-center space-x-2 bg-gray-800 rounded-md p-3 hover:bg-gray-700 transition duration-300'>
//               <UserGroupIcon className='h-6 w-6 text-pink-500' />
//               <span>Gestión de Equipos y Coordinación de Tareas</span>
//             </div>
//             <div className='flex items-center space-x-2 bg-gray-800 rounded-md p-3 hover:bg-gray-700 transition duration-300'>
//               <CheckIcon className='h-6 w-6 text-lime-500' />
//               <span>Aseguramiento de la Calidad y Atención al Detalle</span>
//             </div>
//             <div className='flex items-center space-x-2 bg-gray-800 rounded-md p-3 hover:bg-gray-700 transition duration-300'>
//               <CogIcon className='h-6 w-6 text-orange-500' />
//               <span>Resolución de Problemas y Gestión de Incidentes</span>
//             </div>
//             <div className='flex items-center space-x-2 bg-gray-800 rounded-md p-3 hover:bg-gray-700 transition duration-300'>
//               <FolderIcon className='h-6 w-6 text-teal-500' />
//               <span>Organización y Gestión de Información/Recursos</span>
//             </div>
//             <div className='flex items-center space-x-2 bg-gray-800 rounded-md p-3 hover:bg-gray-700 transition duration-300'>
//               <UsersIcon className='h-6 w-6 text-purple-500' />
//               <span>Trabajo en Equipo y Comunicación</span>
//             </div>
//             {/* Puedes seguir añadiendo más habilidades aquí */}
//           </div>
//         </section>

//         <Proyectos />

//         <section id='contacto' className='py-16'>
//           <div className='container mx-auto text-center'>
//             <h2 className='text-3xl font-semibold text-gray-300 mb-8'>
//               Ponte en Contacto
//             </h2>
//             <div className='max-w-md mx-auto'>
//               <form className='space-y-4'>
//                 <div>
//                   <label
//                     htmlFor='nombre'
//                     className='block text-gray-300 text-sm font-bold mb-2'
//                   >
//                     Nombre
//                   </label>
//                   <input
//                     type='text'
//                     id='nombre'
//                     className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700'
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor='email'
//                     className='block text-gray-300 text-sm font-bold mb-2'
//                   >
//                     Email
//                   </label>
//                   <input
//                     type='email'
//                     id='email'
//                     className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700'
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor='mensaje'
//                     className='block text-gray-300 text-sm font-bold mb-2'
//                   >
//                     Mensaje
//                   </label>
//                   <textarea
//                     id='mensaje'
//                     rows={5}
//                     className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700'
//                   ></textarea>
//                 </div>
//                 <button
//                   type='submit'
//                   className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline'
//                 >
//                   Enviar Mensaje
//                 </button>
//               </form>
//               <div className='mt-8'>
//                 <p className='text-gray-400'>
//                   O puedes contactarme directamente en:
//                 </p>
//                 <a
//                   href='mailto:joss.jota21@gmail.com'
//                   className='text-blue-300 hover:underline'
//                 >
//                   joss.jota21@gmail.com
//                 </a>
//                 {/* Enlaces a redes sociales */}
//                 {/* <div className='flex justify-center space-x-4 mt-2'>
//                   <a href='#' className='text-gray-400 hover:text-blue-300'><GitHubIcon className='h-6 w-6' /></a>
//                   <a href='#' className='text-gray-400 hover:text-blue-300'><LinkedInIcon className='h-6 w-6' /></a>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </section>

//         <div className='mt-6'>
//           <a href='#sobre-mi' className='mr-4 text-blue-300 hover:underline'>
//             Sobre mí
//           </a>
//           <a
//             href='https://github.com/JFernandezBalza'
//             target='_blank'
//             rel='noopener noreferrer'
//             className='mr-4 text-blue-300 hover:underline'
//           >
//             GitHub
//           </a>
//           <a
//             href='https://www.linkedin.com/in/joser-a-fernandez-b-76182429b/'
//             target='_blank'
//             rel='noopener noreferrer'
//             className='text-blue-300 hover:underline'
//           >
//             LinkedIn
//           </a>
//         </div>
//       </main>
//     </>
//   );
// }
// src/app/page.tsx
// src/app/page.tsx
"use client"; // Asegúrate de que esta línea esté al inicio si usas componentes interactivos aquí o en sus hijos

import Navbar from '../app/components/NavBar'
import IntroSection from './components/IntroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import FooterLinks from './components/FooterLinks';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='flex min-h-screen flex-col items-center justify-between text-white bg-gray-900'>
        <IntroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <FooterLinks />
      </main>
    </>
  );
}