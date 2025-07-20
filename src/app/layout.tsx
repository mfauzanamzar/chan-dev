import './globals.css';
import { Outfit, Fira_Mono } from 'next/font/google';
import type { Metadata } from 'next';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const firaMono = Fira_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-fira-mono',
});

export const metadata: Metadata = {
  title: 'FauzanAmzar - Frontend Developer & UI/UX Designer',
  description: 'Professional frontend developer specializing in React, Next.js, TypeScript, and modern web technologies. Creating beautiful, responsive, and user-friendly web applications.',
  keywords: [
    'frontend developer',
    'react developer',
    'next.js',
    'typescript',
    'web development',
    'UI/UX design',
    'javascript',
    'tailwind css',
    'php',
    'portfolio'
  ],
  authors: [{ name: 'FauzanAmzar' }],
  creator: 'FauzanAmzar',
  publisher: 'FauzanAmzar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fauzanamzar.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'FauzanAmzar - Frontend Developer',
    description: 'Professional frontend developer specializing in React, Next.js, TypeScript, and modern web technologies. Creating beautiful, responsive, and user-friendly web applications.',
    url: 'https://fauzanamzar.vercel.app/', // Replace with your actual domain
    siteName: 'FauzanAmzar Portfolio',
    images: [
      {
        url: '/og-image.jpg', // You can add an Open Graph image
        width: 1200,
        height: 630,
        alt: 'FauzanAmzar - Frontend Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FauzanAmzar - Frontend Developer & UI/UX Designer',
    description: 'Professional frontend developer specializing in React, Next.js, TypeScript, and modern web technologies.',
    images: ['/og-image.jpg'], // Same image as Open Graph
    creator: '@mfauzanamzar', // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${outfit.variable} ${firaMono.variable}`} lang="en">
      <head>
        <link href="/favicon.ico" rel="icon" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <meta content="#000000" name="theme-color" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </head>
      <body>{children}</body>
    </html>
  );
}
