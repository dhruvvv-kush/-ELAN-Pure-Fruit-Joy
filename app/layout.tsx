import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://elanbeverages.in'),
  title: 'ÉLAN — PURE FRUIT JOY | Premium Cold Pressed Juice',
  description: 'A cinematic luxury digital experience for ÉLAN. 100% natural, cold-pressed raw fruit juice crafted by nature and perfected for you in Bhopal, India.',
  keywords: ['Élan', 'Cold Pressed Juice', 'Luxury Juice', 'Pure Fruit Joy', 'Alphonso Mango', 'Guava Glow', 'Bhopal'],
  openGraph: {
    title: 'ÉLAN — PURE FRUIT JOY',
    description: 'Cinematic luxury digital experience for ÉLAN cold pressed fruit juice.',
    type: 'website',
    images: ['/pr1/lineup.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} dark antialiased`}>
      <body className="bg-elan-dark text-elan-cream selection:bg-elan-gold selection:text-elan-dark bg-noise min-h-screen">
        {children}
      </body>
    </html>
  );
}
