// src/app/components/FooterLinks.tsx
'use client'; // Necesario para usar useState y useEffect

import Link from 'next/link';
import React, { useState, useEffect } from 'react'; // Importar useState y useEffect
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid'; // Importar el icono de flecha

const FooterLinks = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Efecto para controlar la visibilidad del botón de scroll
  useEffect(() => {
    const handleScroll = () => {
      // Muestra el botón si el scroll vertical es mayor a 300px
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar

  // Función para hacer scroll al inicio de la página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Desplazamiento suave
    });
  };

  return (
    <>
      <div
        className='
          w-full flex flex-col sm:flex-row items-center justify-center {/* Ocupa todo el ancho y centra el contenido */}
          pt-5 px-10 pb-5 {/* Padding superior de 5, lateral de 10, e inferior de 5 */}
          bg-gray-900 text-gray-300 {/* Fondo muy oscuro y texto claro para el footer */}
          border-t border-gray-600 {/* Borde superior sutil */}
          gap-4 sm:gap-6 {/* Espacio entre los enlaces */}
        '
      >
        {/* Enlace a GitHub */}
        <a
          href='https://github.com/JFernandezBalza'
          target='_blank'
          rel='noopener noreferrer'
          className='
            bg-gray-600 hover:bg-gray-900 text-gray-100 {/* Fondo y texto para el botón */}
            font-semibold py-3 px-6 rounded-lg {/* Padding, esquinas redondeadas */}
            transition duration-300 ease-in-out {/* Transición suave */}
            text-base md:text-lg {/* Tamaño de texto responsivo */}
            shadow-md hover:shadow-lg {/* Sombra para profundidad */}
            w-full sm:w-auto text-center {/* Ancho completo en móvil, auto en desktop, texto centrado */}
          '
        >
          GitHub
        </a>
        {/* Enlace a LinkedIn */}
        <a
          href='https://www.linkedin.com/in/joser-a-fernandez-b-76182429b/'
          target='_blank'
          rel='noopener noreferrer'
          className='
            bg-blue-900 hover:bg-blue-600 text-white {/* Fondo y texto para el botón de LinkedIn */}
            font-semibold py-3 px-6 rounded-lg
            transition duration-300 ease-in-out
            text-base md:text-lg
            shadow-md hover:shadow-lg
            w-full sm:w-auto text-center
          '
        >
          LinkedIn
        </a>
        {/* Línea divisoria */}
        <div className='w-full h-px bg-gray-300 my-4 sm:my-0 sm:hidden'></div>{' '}
        {/* Línea visible solo en móvil */}
        {/* Aviso de Copyright */}
        <p className='text-sm text-gray-300 mt-4 sm:mt-0'>
          © 2025 - Developed by Joser Fernández
        </p>
      </div>

      {/* Botón de "Scroll to Top" */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className='
            fixed bottom-4 right-4 {/* Posición fija en la esquina inferior derecha */}
            bg-blue-600 hover:bg-blue-700 text-white {/* Colores del botón */}
            p-3 rounded-full shadow-lg {/* Padding, forma redonda, sombra */}
            transition-opacity duration-300 opacity-90 hover:opacity-100 {/* Transición de opacidad */}
            z-50 {/* Asegura que esté por encima de otros elementos */}
          '
          aria-label='Scroll to top'
        >
          <ArrowUpCircleIcon className='h-8 w-8' /> {/* Icono de flecha */}
        </button>
      )}
    </>
  );
};

export default FooterLinks;
