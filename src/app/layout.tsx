import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';

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
      <body>{children}</body>
    </html>
  );
}
