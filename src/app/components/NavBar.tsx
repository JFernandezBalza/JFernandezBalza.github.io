'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isNavHiddenByClick, setIsNavHiddenByClick] = useState(false);
  
  const [navbarTheme, setNavbarTheme] = useState<'dark' | 'light'>('light');

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrolled(currentScrollPos > 20);
      if (isNavHiddenByClick && currentScrollPos > 0) {
        setIsNavHiddenByClick(false);
      }
      if (isMobileMenuOpen && currentScrollPos > 0) {
       
        setIsMobileMenuOpen(false); 
      }
    };
    window.addEventListener('scroll', handleScroll);

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const sections = document.querySelectorAll('section[data-section-bg]');

    const options = {
      root: null, 
      rootMargin: '0px',
      threshold: 0.1, 
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      let currentActiveSectionTheme: 'dark' | 'light' = 'light';
      let highestTopIntersection = Infinity; 

      entries.forEach((entry) => {
  
        if (
          entry.isIntersecting &&
          entry.boundingClientRect.top < window.innerHeight * 0.7
        ) {
          
          if (entry.boundingClientRect.top < highestTopIntersection) {
            highestTopIntersection = entry.boundingClientRect.top;
            const sectionBgType = entry.target.getAttribute('data-section-bg');
          
            if (sectionBgType === 'dark') {
              currentActiveSectionTheme = 'light';
            }
          
            else if (sectionBgType === 'light') {
              currentActiveSectionTheme = 'dark';
            }
          }
        }
      });
     
      setNavbarTheme(currentActiveSectionTheme);
    };

    observerRef.current = new IntersectionObserver(callback, options);
    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observerRef.current) {
        observerRef.current.disconnect(); 
      }
    };
  }, [isNavHiddenByClick, isMobileMenuOpen]);

  const toggleMobileMenu = () => {

    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsNavHiddenByClick(true);
    setIsMobileMenuOpen(false);
  };

  const DARK_NAV_CLASSES = {
    bg: 'bg-gray-950',
    bgScrolled: 'bg-gray-950/95',
    textMain: 'text-blue-500',
    textLink: 'text-blue-300',
    hoverTextLink: 'hover:text-blue-500',
    hoverBgLink: 'hover:bg-blue-700/20',
  };

  const LIGHT_NAV_CLASSES = {
    bg: 'bg-white', 
    bgScrolled: 'bg-white/95',
    textMain: 'text-gray-900',
    textLink: 'text-gray-700',
    hoverTextLink: 'hover:text-gray-900',
    hoverBgLink: 'hover:bg-gray-200',
  };

  const activeTheme =
    navbarTheme === 'dark' ? DARK_NAV_CLASSES : LIGHT_NAV_CLASSES;

  let currentBgClass = '';
  let shadowClasses = '';
  let blurClasses = '';

  if (isNavHiddenByClick) {
    currentBgClass = `${activeTheme.bg.replace(/(\/\d{2,3})$/, '/20')}`;
    shadowClasses = '';
    blurClasses = '';
  } else {
    
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
        
        <div
          className={`font-bold tracking-tight text-lg md:text-xl ${activeTheme.textMain}`}
        >
          <span
            className={`${activeTheme.hoverTextLink} transition-colors duration-300 cursor-default`}
          >
            Desarrollador Full Stack
          </span>
        </div>

        <div className='md:hidden'>
          <button
            onClick={toggleMobileMenu}
            className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 ${activeTheme.textLink}`}
            aria-label='Toggle navigation'
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className='h-7 w-7' /> 
            ) : (
              <Bars3Icon className='h-7 w-7' /> 
            )}
          </button>
        </div>

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
