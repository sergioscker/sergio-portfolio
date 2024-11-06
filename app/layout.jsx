import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

//components
import PageTransition from '@/components/PageTransition';
import StairTransition from '@/components/StairTransition';
import { Header } from '@/components/Header';

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrainsMono',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'Portfolio',
  description:
    'Check out the portfolio of [Sérgio Oliveira], specialist in [JavaScript, React, Node, TypeScript, NoSql, SQL].',
  keywords: 'portfolio, web developer, designer, JavaScript, React.js, Next.js',
  openGraph: {
    title: `Sérgio Oliveira Porfolio`,
    description:
      'Discover high quality projects and design by Sérgio Oliveira.',
    url: 'https://sergio-portfolio-six.vercel.app',
    type: 'website',
    images: [
      {
        url: '',
        width: 800,
        height: 600,
        alt: 'logo',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable}  antialiased`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
