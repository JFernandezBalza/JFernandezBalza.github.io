'use client';

import React from 'react';

const ContactSection = () => {
  return (
    <section
      id='contacto'
      data-section-bg='dark'
      className='
        min-h-screen flex items-center justify-center
        bg-gray-900 text-gray-100
        w-full
      '
    >
      <div
        className='
        w-full max-w-screen-xl mx-auto
        pt-20 px-10
        text-center
      '
      >
        <h2 className='text-4xl md:text-5xl font-bold text-gray-300'>
          Ponte en Contacto
        </h2>

        <div className='max-w-md mx-auto mt-8'>
          {' '}
          {/* Añadimos margen superior para separar del título */}
          <p className='text-gray-300 text-lg mb-4'>
            Si estás interesado en mi trabajo o tienes alguna pregunta, no dudes
            en contactarme directamente:
          </p>
          <a
            href='mailto:joss.jota21@gmail.com'
            className='
              bg-blue-900 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded
              focus:outline-none focus:shadow-outline transition duration-300
              text-xl md:text-2xl inline-block
            '
          >
            Gmail Joser Fernández
          </a>
          {/* Puedes añadir más enlaces aquí si quieres, como tu LinkedIn o GitHub */}
          {/* <div className='flex justify-center space-x-4 mt-8'>
            <a href='https://github.com/JFernandezBalza' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-blue-400 text-sm'>GitHub</a>
            <a href='https://www.linkedin.com/in/joser-a-fernandez-b-76182429b' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-blue-400 text-sm'>LinkedIn</a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
