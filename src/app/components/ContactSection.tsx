'use client';

import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);

    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <section
      id='contacto'
      data-section-bg='dark'
      className='
        min-h-screen flex items-center justify-center {/* Ocupa al menos la altura de la pantalla y centra contenido */}
        bg-gray-900 text-gray-100 {/* CAMBIADO: Fondo oscuro, texto general claro */}
        w-full {/* Asegura que la sección ocupe todo el ancho */}
      '
    >
      <div
        className='
        w-full max-w-screen-xl mx-auto {/* Centra el contenido y le da un ancho máximo */}
        pt-20 px-10 {/* CAMBIADO: Padding superior de 20, lateral y abajo de 10 */}
        text-center {/* Alinea todo el texto al centro */}
      '
      >
        <h2 className='text-4xl md:text-5xl font-bold text-gray-300'> 
          Ponte en Contacto
        </h2>

        <div className='max-w-md mx-auto'> 
          <form onSubmit={handleSubmit} className='space-y-2'>
            <div>
              <label
                htmlFor='nombre'
                className='block text-gray-300 text-lg font-bold mb-2' 
              >
                Nombre
              </label>
              <input
                type='text'
                id='nombre'
                value={formData.nombre}
                onChange={handleChange}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700 text-lg'
                required
              />
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-gray-300 text-lg font-bold mb-2'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                value={formData.email}
                onChange={handleChange}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700 text-lg' 
                required
              />
            </div>
            <div>
              <label
                htmlFor='mensaje'
                className='block text-gray-300 text-lg font-bold mb-2'
              >
                Mensaje
              </label>
              <textarea
                id='mensaje'
                rows={5}
                value={formData.mensaje}
                onChange={handleChange}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700 text-lg'
                required
              ></textarea>
            </div>
            <button
              type='submit'
              className='bg-blue-900 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300'
            >
              Enviar Mensaje
            </button>
          </form>
          <div className='mt-8'>
            <p className='text-gray-300'>
              O puedes contactarme directamente en:
            </p>
            <a
              href='mailto:joss.jota21@gmail.com'
              className='text-blue-400 hover:underline font-semibold' 
            >
              joss.jota21@gmail.com
            </a>
            {/* <div className='flex justify-center space-x-4 mt-2'>
              <a href='#' className='text-gray-400 hover:text-blue-400'><GitHubIcon className='h-6 w-6' /></a>
              <a href='#' className='text-gray-400 hover:text-blue-400'><LinkedInIcon className='h-6 w-6' /></a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
