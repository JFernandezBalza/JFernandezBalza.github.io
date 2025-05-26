// src/app/components/AboutSection.tsx
import Image from 'next/image';
import React from 'react'; // Importar React para JSX
import Link from 'next/link'; // Importar Link para los nuevos botones

const AboutSection = () => {
  return (
    <section
      id='sobre-mi'
      data-section-bg='light' // Indica a la Navbar que esta sección tiene un fondo CLARO
      className='
        py-16 md:py-24 lg:py-32 {/* Padding vertical estándar para secciones */}
        bg-white text-gray-900 {/* Fondo claro, texto general oscuro */}
        w-full {/* Asegura que la sección ocupe todo el ancho */}
      '
    >
      <div
        className='
        w-full {/* Ocupa todo el ancho disponible */}
        px-10 pt-0 pb-0 {/* Padding horizontal de 10, sin padding superior ni inferior */}
        text-center {/* Alinea todo el texto al centro */}
      '
      >
        {/* Título de la sección */}
        <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-8 md:mb-12'>
          Acerca de mí
        </h2>

        <div className='flex flex-col md:flex-row items-center md:items-start justify-center'>
          {' '}
          {/* Alinea a la izquierda */}
          <Image
            src='/perfil.jpeg.jpeg' // Asegúrate de que esta imagen esté en tu carpeta `public/`
            alt='Mi foto personal'
            width={300}
            height={300}
            className='
              rounded-lg border-4 border-gray-500 shadow-sm {/* Borde más oscuro para contraste */}
              mr-0 md:mr-8 mb-8 md:mb-0 {/* Margen inferior en móvil, margen derecho en desktop */}
              flex-shrink-0 {/* Evita que la imagen se encoja */}
            '
          />
          <div>
            <p className='text-lg md:text-xl leading-relaxed text-gray-900 mb-6'>
              {' '}
              {/* Tamaño de texto y color para contraste */}
              Como desarrollador de aplicaciones web, me especializo en la
              construcción de sistemas robustos y eficientes, con un enfoque
              particular en el lado del servidor utilizando Node.js y NestJS. Mi
              experiencia abarca la gestión de bases de datos relacionales y no
              relacionales, complementada con habilidades en la creación de
              interfaces de usuario dinámicas con ReactJS y Next.js. Mi
              trayectoria, forjada en un programa de estudio intensivo, me ha
              dotado de la capacidad de transformar ideas en soluciones
              funcionales, siempre con un compromiso con la calidad del código y
              la colaboración en equipo. Busco activamente proyectos desafiantes
              que impulsen mi crecimiento y me permitan aplicar mi creatividad
              en el desarrollo de experiencias digitales innovadoras.
            </p>
            {/* Contenedor para los botones (flexbox para que estén uno al lado del otro en pantallas grandes) */}
            <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8 md:mt-12 justify-center'>
              {/* Botón "Descargar CV" */}
              <a
                href='/CVJoserFernandez.pdf' // Asegúrate de que este PDF esté en tu carpeta `public/`
                download='CVJoserFernandez.pdf' // Atributo 'download' para descargar
                className='
                  px-6 py-3 border-2 rounded-lg {/* Borde, padding y esquinas redondeadas */}
                  border-blue-900 text-blue-900 {/* Borde y texto azul */}
                  hover:bg-blue-900 hover:text-white {/* Efecto hover: fondo azul, texto blanco */}
                  transition-colors duration-300 {/* Transición suave */}
                  font-semibold text-xl {/* Tamaño de fuente aumentado */}
                  w-full sm:w-auto text-center {/* Ancho completo en móvil, auto en desktop, texto centrado */}
                '
              >
                Descargar CV
              </a>

              {/* Botón "GitHub" */}
              <a
                href='https://github.com/JFernandezBalza'
                target='_blank'
                rel='noopener noreferrer'
                className='
                  px-6 py-3 border-2 rounded-lg
                  border-gray-900 text-gray-900
                  hover:bg-gray-900 hover:text-white
                  transition-colors duration-300
                  font-semibold text-xl
                  w-full sm:w-auto text-center
                '
              >
                GitHub
              </a>

              {/* Botón "LinkedIn" */}
              <a
                href='https://www.linkedin.com/in/joser-a-fernandez-b-76182429b/'
                target='_blank'
                rel='noopener noreferrer'
                className='
                  px-6 py-3 border-2 rounded-lg
                  border-blue-900 text-blue-900
                  hover:bg-blue-900 hover:text-white
                  transition-colors duration-300
                  font-semibold text-xl
                  w-full sm:w-auto text-center
                '
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
