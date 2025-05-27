'use client';

import React, { useState } from 'react';
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
import { allSkillsData, Skill } from '../data/skills';

const SkillItem = ({ name, icon: Icon, color }: Skill) => (
  <div className='flex items-center justify-center sm:justify-start space-x-2 bg-gray-800 rounded-md p-3 hover:bg-gray-700 transition duration-300 text-center sm:text-left'>
    {Icon && <Icon className={`h-6 w-6 ${color} flex-shrink-0`} />}{' '}
    
    <span className='text-base font-medium whitespace-nowrap overflow-hidden text-ellipsis'>
      {name}
    </span>
  </div>
);

const SkillsSection = () => {
  
  const [activeCategory, setActiveCategory] =
    useState<Skill['category']>('backend');

  const categories: { id: Skill['category']; label: string }[] = [
    { id: 'backend', label: 'Back-End' },
    { id: 'frontend', label: 'Front-End' },
    { id: 'databases', label: 'Bases de Datos' },
    { id: 'tools', label: 'Herramientas' },
    { id: 'soft-skills', label: 'Habilidades Blandas' },
  ];

  const filteredSkills = allSkillsData.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    <section
      id='habilidades' 
      data-section-bg='dark'
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
        <h2 className='text-4xl md:text-5xl font-bold text-gray-300 mb-8 md:mb-12 text-center'>
          Mis Habilidades
        </h2>

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
                    ? 'bg-blue-900 border-blue-300 text-white shadow-md hover:bg-blue-900' 
                    : 'border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white'
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </div>

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
