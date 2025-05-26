// src/app/components/IntroSection.tsx
import React from 'react';
import Link from 'next/link'; // Importa Link para los botones

const IntroSection = () => {
  return (
    <section
      id='inicio'
      data-section-bg='dark' // Indica a la Navbar que esta sección tiene un fondo OSCURO
      className='
        flex items-center justify-start {/* Alinea el contenido al inicio verticalmente */}
        bg-gray-900 text-gray-900 {/* Fondo oscuro, texto general claro */}
        pt-20 {/* Espacio para la Navbar fija */}
        py-6 md:py-10 lg:py-14 {/* Padding vertical reducido */}
        w-full {/* Asegura que la sección ocupe todo el ancho */}
      '
    >
      <div
        className='
        w-full {/* Ocupa todo el ancho disponible */}
        p-10 {/* <--- CAMBIADO: Padding de 10 en todos los lados (arriba, abajo, izquierda, derecha) */}
        text-left {/* Alinea todo el texto a la izquierda */}
      '
      >
        {/* Contenedor para el nombre y la especialidad: flexbox para alinearlos */}
        <div className='flex flex-col md:flex-row md:items-baseline mb-4 md:mb-10'>
          {/* Título " Joser Fernández" con gradiente en el nombre */}
          <h1
            className='
            text-6xl md:text-7xl lg:text-8xl xl:text-9xl {/* Tamaños de fuente grandes y responsivos */}
            font-extrabold {/* Fuente muy negrita */}
            mb-2 md:mb-0 md:mr-4 {/* Margen inferior en móvil, margen derecho en desktop */}
          '
          >
            <span
              className='
              bg-gradient-to-r from-cyan-400 to-purple-500 {/* Colores del gradiente: cian a morado */}
              bg-clip-text text-transparent {/* Aplica el gradiente al texto, haciendo el texto transparente */}
            '
            >
              Joser Fernández
            </span>
          </h1>

          {/* Contenedor para las dos partes de la especialidad */}
          <div className='flex flex-col'>
            {' '}
            {/* Nuevo div para contener las dos partes */}
            <p
              className='
              text-xl md:text-2xl lg:text-3xl {/* Tamaños de fuente reducidos en un 15% */}
              font-semibold text-gray-300 {/* Color de texto claro para contraste */}
            '
            >
              Desarrollador Full Stack | Especialista en Back-End
            </p>
          </div>
        </div>

        {/* Párrafo de descripción */}
        <p
          className='
          mt-6 md:mt-8 text-xl md:text-2xl lg:text-3xl {/* Tamaños de fuente aumentados */}
          text-gray-300 {/* Texto gris claro para contraste */}
          leading-relaxed
        '
        >
          Creando soluciones web robustas y escalables con pasión por la
          innovación y la excelencia en el desarrollo.
        </p>

        {/* Contenedor para los botones (flexbox para que estén uno al lado del otro en pantallas grandes) */}
        <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8 md:mt-12'>
          {/* Botón "Ver más" (ej. a "Sobre mí") */}
          <Link
            href='#sobre-mi' // Enlaza a la sección "Sobre mí"
            className='
              px-6 py-3 border-2 rounded-lg {/* Borde, padding y esquinas redondeadas */}
              border-green-500 text-green-500 {/* Borde y texto verde */}
              hover:bg-green-500 hover:text-white {/* Efecto hover: fondo verde, texto blanco */}
              transition-colors duration-300 {/* Transición suave */}
              font-semibold text-xl {/* Tamaño de fuente aumentado */}
              w-full sm:w-auto text-center {/* Ancho completo en móvil, auto en desktop, texto centrado */}
            '
          >
            Ver más
          </Link>

          {/* Botón "Proyectos" */}
          <Link
            href='#proyectos' // Enlaza a la sección "Proyectos"
            className='
              px-6 py-3 border-2 rounded-lg
              border-purple-500 text-purple-500
              hover:bg-purple-500 hover:text-white
              transition-colors duration-300
              font-semibold text-xl {/* Tamaño de fuente aumentado */}
              w-full sm:w-auto text-center
            '
          >
            Proyectos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
