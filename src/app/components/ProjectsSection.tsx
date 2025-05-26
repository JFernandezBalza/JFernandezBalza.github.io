// src/app/components/ProjectsSection.tsx
'use client'; // Asegúrate de que esta línea esté al inicio si usas componentes interactivos aquí

import Image from 'next/image';
import React from 'react'; // Importar React para JSX
import { projectsData } from '../data/projects'; // Asegúrate de que la ruta de importación sea correcta

const ProjectsSection = () => {
  return (
    <section
      id='proyectos'
      data-section-bg='light' // Indica a la Navbar que esta sección tiene un fondo CLARO
      className='
        min-h-screen flex items-center justify-center
        bg-white text-gray-900
        w-full
      '
    >
      <div
        className='
        w-full {/* Ocupa todo el ancho disponible */}
        pt-20 px-16 pb-16 {/* Padding superior de 20, lateral y abajo de 16 */}
        text-left {/* Alinea todo el texto a la izquierda */}
      '
      >
        {/* Título de la sección */}
        <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-8 md:mb-12 text-center'>
          Explora mis Proyectos
        </h2>

        <div className='flex flex-col gap-16'>
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`
                flex flex-col md:flex-row items-center gap-8 p-6 rounded-lg shadow-lg
                ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                bg-gray-900 border border-gray-900
              `}
            >
              {/* Contenedor de la imagen */}
              <div className='w-full md:w-1/2 flex justify-center'>
                <Image
                  src={project.image}
                  alt={project.alt} // Usando la propiedad 'alt' de tu Project
                  width={900}
                  height={600}
                  className='rounded-md object-cover shadow-md border border-white-900'
                />
              </div>

              {/* Contenedor de la información del proyecto */}
              <div className='w-full md:w-1/2 text-center md:text-left'>
                <h3 className='text-3xl font-bold text-gray-300 mb-3'>
                  {project.title}
                </h3>
                <p className='text-gray-300 mb-4'>{project.description}</p>
                <div className='flex flex-wrap justify-center md:justify-start gap-2 mb-4'>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='bg-blue-900 text-gray-300 text-xs font-bold px-10 py-1 rounded-full'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className='flex justify-center md:justify-start gap-4'>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='
                        px-6 py-3 border-2 rounded-lg {/* Borde, padding y esquinas redondeadas */}
                        border-blue-900 text-blue-900 {/* Borde y texto azul */}
                        hover:bg-blue-900 hover:text-white {/* Efecto hover: fondo azul, texto blanco */}
                        transition-colors duration-300 {/* Transición suave */}
                        font-semibold text-xl {/* Tamaño de fuente aumentado */}
                        w-full sm:w-auto text-center {/* Ancho completo en móvil, auto en desktop, texto centrado */}
                      '
                    >
                      Ver Proyecto
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='
                        px-6 py-3 border-2 rounded-lg {/* Borde, padding y esquinas redondeadas */}
                        border-gray-700 text-gray-700 {/* Borde y texto gris oscuro */}
                        hover:bg-gray-700 hover:text-white {/* Efecto hover: fondo gris, texto blanco */}
                        transition-colors duration-300 {/* Transición suave */}
                        font-semibold text-xl {/* Tamaño de fuente aumentado */}
                        w-full sm:w-auto text-center {/* Ancho completo en móvil, auto en desktop, texto centrado */}
                      '
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
