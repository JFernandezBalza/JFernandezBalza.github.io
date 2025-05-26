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