// src/app/components/SkillsSection.tsx
'use client';

import React, { useState } from 'react';
// Asegúrate de que '@heroicons/react/24/solid' esté instalado: npm install @heroicons/react
import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  BeakerIcon,
  Cog6ToothIcon,
  UserGroupIcon,
  GlobeAltIcon,
  AdjustmentsHorizontalIcon,
  ClockIcon,
} from '@heroicons/react/24/solid';

// Importa los datos de habilidades desde el archivo que creamos
import { allSkillsData, Skill } from '../data/skills';

// Componente individual para cada habilidad (SkillItem)
const SkillItem = ({ name, icon: Icon, color }: Skill) => (
  <div className='flex items-center justify-center sm:justify-start space-x-2 bg-gray-800 rounded-md p-3 hover:bg-gray-700 transition duration-300 text-center sm:text-left'>
    {Icon && <Icon className={`h-6 w-6 ${color} flex-shrink-0`} />}{' '}
    {/* Renderiza el icono solo si existe */}
    <span className='text-base font-medium whitespace-nowrap overflow-hidden text-ellipsis'>
      {name}
    </span>
  </div>
);

const SkillsSection = () => {
  // Estado para la pestaña activa. Por defecto, 'backend'.
  const [activeCategory, setActiveCategory] =
    useState<Skill['category']>('backend');

  // Definir las categorías y sus etiquetas para los botones
  const categories: { id: Skill['category']; label: string }[] = [
    { id: 'backend', label: 'Back-End' },
    { id: 'frontend', label: 'Front-End' },
    { id: 'databases', label: 'Bases de Datos' },
    { id: 'tools', label: 'Herramientas' },
    { id: 'soft-skills', label: 'Habilidades Blandas' },
  ];

  // Filtrar las habilidades según la categoría activa
  const filteredSkills = allSkillsData.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    <section
      id='habilidades' // ID para la navegación desde la Navbar
      data-section-bg='dark' // Indica a la Navbar que esta sección tiene un fondo OSCURO
      className='
        min-h-screen flex items-center justify-center {/* Ocupa al menos la altura de la pantalla y centra contenido */}
        bg-gray-900 text-gray-100 {/* Fondo oscuro, texto general claro */}
        w-full {/* Asegura que la sección ocupe todo el ancho */}
      '
    >
      <div
        className='
        w-full max-w-screen-xl mx-auto {/* Centra el contenido y le da un ancho máximo */}
        px-16 pb-10 pt-0 {/* Padding horizontal a 16, abajo 10, arriba 0 */}
        text-left {/* Alinea todo el texto a la izquierda */}
      '
      >
        {/* Título de la sección */}
        <h2 className='text-4xl md:text-5xl font-bold text-gray-300 mb-8 md:mb-12 text-center'>
          Mis Habilidades
        </h2>

        {/* Botones de las pestañas */}
        <div className='flex flex-wrap justify-center md:justify-between gap-2 mb-8'>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                px-6 py-3 border-2 rounded-lg {/* Borde, padding y esquinas redondeadas */}
                font-semibold text-xl {/* Tamaño de fuente aumentado */}
                transition-colors duration-300 ease-in-out {/* Transición suave */}
                w-full sm:w-auto text-center {/* Ancho completo en móvil, auto en desktop, texto centrado */}
                ${
                  activeCategory === category.id
                    ? 'bg-blue-900 border-blue-300 text-white shadow-md hover:bg-blue-900' // Estilo para pestaña activa
                    : 'border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white' // Estilo para pestaña inactiva
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Contenedor de las habilidades filtradas */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-5'>
          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill, index) => (
              <SkillItem key={index} {...skill} />
            ))
          ) : (
            <p className='col-span-full text-center text-gray-400'>
              No hay habilidades en esta categoría.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
