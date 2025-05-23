import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';

import { TrainerProvider } from '@/app/context/TrainerContext';

export const metadata: Metadata = {
  title: 'Pokémon Page',
  description: 'Search and view your favorite Pokémon!',
  icons: {
    icon: '/favicon/pikachu.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <TrainerProvider>{children}</TrainerProvider>

        <footer className='text-center p-4 text-white bg-[#FF6347]'>
          © {new Date().getFullYear()} Pokémon Trainer App
        </footer>
      </body>
    </html>
  );
}
