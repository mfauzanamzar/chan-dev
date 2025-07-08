import './globals.css';
import { ReactNode } from 'react';
import { Unbounded, Inter } from 'next/font/google';

const unbounded = Unbounded({
  subsets: ['latin'],
  variable: '--font-unbounded',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={`${unbounded.variable} ${inter.variable}`} lang="en">
      <body>{children}</body>
    </html>
  );
}
