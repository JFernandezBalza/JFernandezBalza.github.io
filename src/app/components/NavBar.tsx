// src/app/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
// Importa los iconos de Heroicons para el menú móvil
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'; // <-- ¡Importa estos iconos!

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isNavHiddenByClick, setIsNavHiddenByClick] = useState(false);
  // Estado para el tema actual de la Navbar: 'dark' (para fondo claro) o 'light' (para fondo oscuro)
  const [navbarTheme, setNavbarTheme] = useState<'dark' | 'light'>('light'); // Por defecto: Navbar es CLARA (el body es oscuro)

  // NUEVO ESTADO: Para controlar la visibilidad del menú móvil
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // <-- NUEVO

  // Ref para el IntersectionObserver
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // ---- Lógica para el comportamiento al hacer scroll ----
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrolled(currentScrollPos > 20);
      if (isNavHiddenByClick && currentScrollPos > 0) {
        setIsNavHiddenByClick(false);
      }
      // Asegúrate de cerrar el menú móvil al hacer scroll
      if (isMobileMenuOpen && currentScrollPos > 0) {
        // <-- NUEVO
        setIsMobileMenuOpen(false); // <-- NUEVO
      }
    };
    window.addEventListener('scroll', handleScroll);

    // ---- Lógica para la detección de la sección actual (cambio de tema de Navbar) ----
    // Limpia cualquier observador existente antes de crear uno nuevo
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Selecciona todas las secciones que tienen el atributo data-section-bg
    const sections = document.querySelectorAll('section[data-section-bg]');

    const options = {
      root: null, // Observa con respecto al viewport
      rootMargin: '0px', // No hay margen extra en el root
      threshold: 0.1, // El callback se ejecutará cuando al menos el 10% del elemento sea visible
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      let currentActiveSectionTheme: 'dark' | 'light' = 'light'; // Por defecto: Navbar CLARA (para un fondo oscuro)
      let highestTopIntersection = Infinity; // Para encontrar la sección cuyo top está más cerca del 0 del viewport

      entries.forEach((entry) => {
        // Solo consideramos las secciones que están intersectando y cuyo top está en la parte superior del viewport
        // (por ejemplo, dentro del 70% superior del viewport)
        if (
          entry.isIntersecting &&
          entry.boundingClientRect.top < window.innerHeight * 0.7
        ) {
          // Si esta sección está más cerca de la parte superior que la mejor encontrada hasta ahora
          if (entry.boundingClientRect.top < highestTopIntersection) {
            highestTopIntersection = entry.boundingClientRect.top;
            const sectionBgType = entry.target.getAttribute('data-section-bg');
            // Si la sección tiene fondo OSCURO, la Navbar debe ser CLARA
            if (sectionBgType === 'dark') {
              currentActiveSectionTheme = 'light';
            }
            // Si la sección tiene fondo CLARO, la Navbar debe ser OSCURA
            else if (sectionBgType === 'light') {
              currentActiveSectionTheme = 'dark';
            }
          }
        }
      });
      // Actualiza el tema de la Navbar
      setNavbarTheme(currentActiveSectionTheme);
    };

    // Crea y empieza a observar las secciones
    observerRef.current = new IntersectionObserver(callback, options);
    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });

    // ---- Función de limpieza para cuando el componente se desmonte ----
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observerRef.current) {
        observerRef.current.disconnect(); // Desconecta el observador para evitar fugas de memoria
      }
    };
  }, [isNavHiddenByClick, isMobileMenuOpen]); // isMobileMenuOpen como dependencia para que el efecto de scroll se actualice

  // NUEVA FUNCIÓN: Para alternar el estado del menú móvil
  const toggleMobileMenu = () => {
    // <-- NUEVO
    setIsMobileMenuOpen(!isMobileMenuOpen); // <-- NUEVO
  }; // <-- NUEVO

  // Modifica handleNavLinkClick para cerrar también el menú móvil
  const handleNavLinkClick = () => {
    setIsNavHiddenByClick(true);
    setIsMobileMenuOpen(false); // <-- Añade esto para cerrar el menú al hacer clic en un enlace
  };

  // --- Definiciones de Clases para los Temas de Navbar ---
  // Tema OSCURO para la Navbar (cuando está sobre un fondo CLARO)
  const DARK_NAV_CLASSES = {
    bg: 'bg-gray-950',
    bgScrolled: 'bg-gray-950/95',
    textMain: 'text-blue-500', // Título principal
    textLink: 'text-blue-300', // Texto de enlaces
    hoverTextLink: 'hover:text-blue-500',
    hoverBgLink: 'hover:bg-blue-700/20',
  };

  // Tema CLARO para la Navbar (cuando está sobre un fondo OSCURO)
  const LIGHT_NAV_CLASSES = {
    bg: 'bg-white', // Fondo blanco
    bgScrolled: 'bg-white/95', // Fondo blanco semi-opaco al scroll
    textMain: 'text-gray-900', // Título principal oscuro
    textLink: 'text-gray-700', // Texto de enlaces oscuro
    hoverTextLink: 'hover:text-gray-900',
    hoverBgLink: 'hover:bg-gray-200', // Fondo de hover gris claro
  };

  // Selecciona el conjunto de clases activo según el estado 'navbarTheme'
  const activeTheme =
    navbarTheme === 'dark' ? DARK_NAV_CLASSES : LIGHT_NAV_CLASSES;

  let currentBgClass = '';
  let shadowClasses = '';
  let blurClasses = '';

  // Lógica de visibilidad por clic (superpone al tema normal)
  if (isNavHiddenByClick) {
    // Si está oculta por clic, usa el color base del tema actual, pero muy transparente
    currentBgClass = `${activeTheme.bg.replace(/(\/\d{2,3})$/, '/20')}`;
    shadowClasses = '';
    blurClasses = '';
  } else {
    // Lógica normal de scroll, aplica el tema activo
    if (scrolled) {
      currentBgClass = activeTheme.bgScrolled;
      shadowClasses = 'shadow-lg';
      blurClasses = 'backdrop-blur-sm';
    } else {
      currentBgClass = activeTheme.bg;
    }
  }

  return (
    <nav
      className={`
        fixed w-full z-50 top-0 transition-all duration-300 ease-in-out
        ${currentBgClass}
        ${shadowClasses}
        ${blurClasses}
        py-3 md:py-5
      `}
    >
      <div className='container mx-auto flex justify-between items-center px-4'>
        {/* Título "Desarrollador Full Stack" - ahora con clases de tema dinámicas */}
        <div
          className={`font-bold tracking-tight text-lg md:text-xl ${activeTheme.textMain}`}
        >
          <span
            className={`${activeTheme.hoverTextLink} transition-colors duration-300 cursor-default`}
          >
            Desarrollador Full Stack
          </span>
        </div>

        {/* Botón de Hamburguesa (visible solo en pantallas pequeñas) */}
        {/* Usamos md:hidden para ocultarlo en pantallas medianas y grandes */}
        <div className='md:hidden'>
          <button
            onClick={toggleMobileMenu}
            className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 ${activeTheme.textLink}`}
            aria-label='Toggle navigation'
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className='h-7 w-7' /> // Icono de cerrar si el menú está abierto
            ) : (
              <Bars3Icon className='h-7 w-7' /> // Icono de hamburguesa si el menú está cerrado
            )}
          </button>
        </div>

        {/* Enlaces de Navegación (visible en pantallas medianas y grandes) */}
        {/* Usamos hidden md:flex para ocultarlo en pantallas pequeñas y mostrarlo en md+ */}
        <ul className='hidden md:flex space-x-2 sm:space-x-4 md:space-x-6 text-sm md:text-base'>
          <li>
            <Link
              href='#sobre-mi'
              onClick={handleNavLinkClick}
              className={`${activeTheme.textLink} ${activeTheme.hoverTextLink} px-3 py-1.5 rounded-md transition-all duration-300 ${activeTheme.hoverBgLink} font-semibold whitespace-nowrap`}
            >
              Sobre mí
            </Link>
          </li>
          <li>
            <Link
              href='#habilidades'
              onClick={handleNavLinkClick}
              className={`${activeTheme.textLink} ${activeTheme.hoverTextLink} px-3 py-1.5 rounded-md transition-all duration-300 ${activeTheme.hoverBgLink} font-semibold whitespace-nowrap`}
            >
              Habilidades
            </Link>
          </li>
          <li>
            <Link
              href='#proyectos'
              onClick={handleNavLinkClick}
              className={`${activeTheme.textLink} ${activeTheme.hoverTextLink} px-3 py-1.5 rounded-md transition-all duration-300 ${activeTheme.hoverBgLink} font-semibold whitespace-nowrap`}
            >
              Proyectos
            </Link>
          </li>
          <li>
            <Link
              href='#contacto'
              onClick={handleNavLinkClick}
              className={`${activeTheme.textLink} ${activeTheme.hoverTextLink} px-3 py-1.5 rounded-md transition-all duration-300 ${activeTheme.hoverBgLink} font-semibold whitespace-nowrap`}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>

      {/* Menú móvil desplegable (visible solo cuando isMobileMenuOpen es true) */}
      {/* También usamos md:hidden para que solo aparezca en pantallas pequeñas */}
      <div
        className={`
          md:hidden transition-all duration-300 ease-in-out origin-top
          ${
            isMobileMenuOpen
              ? 'max-h-96 opacity-100 py-4'
              : 'max-h-0 opacity-0 overflow-hidden'
          }
          ${activeTheme.bg}
          ${scrolled ? shadowClasses : ''}
          ${scrolled ? blurClasses : ''}
          w-full
        `}
      >
        <ul className='flex flex-col items-center space-y-4 px-4'>
          <li>
            <Link
              href='#sobre-mi'
              onClick={handleNavLinkClick}
              className={`${activeTheme.textLink} ${activeTheme.hoverTextLink} px-3 py-1.5 rounded-md transition-all duration-300 ${activeTheme.hoverBgLink} font-semibold text-lg`}
            >
              Sobre mí
            </Link>
          </li>
          <li>
            <Link
              href='#habilidades'
              onClick={handleNavLinkClick}
              className={`${activeTheme.textLink} ${activeTheme.hoverTextLink} px-3 py-1.5 rounded-md transition-all duration-300 ${activeTheme.hoverBgLink} font-semibold text-lg`}
            >
              Habilidades
            </Link>
          </li>
          <li>
            <Link
              href='#proyectos'
              onClick={handleNavLinkClick}
              className={`${activeTheme.textLink} ${activeTheme.hoverTextLink} px-3 py-1.5 rounded-md transition-all duration-300 ${activeTheme.hoverBgLink} font-semibold text-lg`}
            >
              Proyectos
            </Link>
          </li>
          <li>
            <Link
              href='#contacto'
              onClick={handleNavLinkClick}
              className={`${activeTheme.textLink} ${activeTheme.hoverTextLink} px-3 py-1.5 rounded-md transition-all duration-300 ${activeTheme.hoverBgLink} font-semibold text-lg`}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
