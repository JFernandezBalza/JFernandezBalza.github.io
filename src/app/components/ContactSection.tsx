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
        py-12
      '
    >
      <div
        className='
        w-full max-w-screen-xl mx-auto
        pt-20 px-10
        text-center
      '
      >
        <h2 className='text-4xl md:text-5xl font-bold text-gray-300 mb-8'>
          Ponte en Contacto
        </h2>

        <div className='max-w-md mx-auto mb-0'>
          {' '}
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
