import './globals.css';
import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Joser Fernández | Desarrollador Full Stack', // ¡Personaliza esto!
  description:
    'Portafolio profesional de Joser Fernández, desarrollador Full Stack especializado en aplicaciones robustas y escalables.', // ¡Personaliza esto!
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='es'
      className={`${inter.variable} ${robotoMono.variable} scroll-smooth`}
    >
      <body className='bg-gray-900 text-gray-100 antialiased font-sans'>
        {children}{' '}
        {/* Aquí es donde Next.js inyectará el contenido de tu page.tsx */}
      </body>
    </html>
  );
}
