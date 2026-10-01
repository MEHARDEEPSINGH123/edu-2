import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { PathwayProvider } from '@/context/PathwayContext';
import SmoothScrollProvider from '@/components/common/SmoothScrollProvider';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-editorial',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1D3557',
};

export const metadata: Metadata = {
  title: 'Eduvanta Academy | Design Your Academic Journey',
  description:
    'Singapore’s premier academic success platform. Visualize, plan, and achieve excellence across PSLE, GCE O-Level, A-Level, IBDP, IGCSE, and Advanced Research Pathways.',
  keywords: [
    'Eduvanta Academy',
    'Academic Journey Platform',
    'Singapore PSLE AL1',
    'GCE O-Level Distinction',
    'GCE A-Level 90RP',
    'IB Diploma 45 Points',
    'Academic Mentorship Singapore',
    'Oxbridge Admissions Singapore'
  ],
  authors: [{ name: 'Eduvanta Academy Directorate' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${cormorantGaramond.variable} ${inter.variable}`}
    >
      <body className="min-h-screen bg-[#F8F7F4] text-[#1D3557] antialiased selection:bg-[#F4E1C1] selection:text-[#1D3557]">
        <PathwayProvider>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </PathwayProvider>
      </body>
    </html>
  );
}
