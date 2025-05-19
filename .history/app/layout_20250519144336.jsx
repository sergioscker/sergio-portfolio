// fonts
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

//components
import PageTransition from '@/components/PageTransition';

// import StairTransition from '@/components/StairTransition';
import { Header } from '@/components/Header';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import ThemeProviderWrapper from '@/components/ThemeProvider';
import ClientOnly from '@/components/ClientOnly';

// fonts style
const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrainsMono',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

// SEO
export const metadata = {
  title: 'Sérgio Oliveira | Fullstack Developer',
  description:
    'Portfólio profissional de Sérgio Oliveira, desenvolvedor web fullstack especializado em JavaScript, React, Node.js, TypeScript e Next.js. Veja projetos de alta performance e design moderno.',
  keywords:
    'Sérgio Oliveira, Sergio Oliveira portfolio, desenvolvedor web, fullstack developer, frontend, JavaScript, React, Nextjs, Nodejs, TypeScript, projetos web',
  openGraph: {
    title: 'Portfólio | Sérgio Oliveira',
    description:
      'Explore os projetos desenvolvidos por Sérgio Oliveira: soluções modernas em React, Node.js, e mais.',

    url: 'https://sergioliveira-portfolio.vercel.app',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="S4CLoUW9Lhz9BwQGpCYQw1kK9LWIxFI2aWJaFR9xZfc"
        />
      </head>

      <body className={`${jetBrainsMono.variable}  antialiased`}>
        <ClientOnly>
          <ThemeProviderWrapper>
            <Header />

            <ThemeSwitcher />

            <PageTransition>{children}</PageTransition>
          </ThemeProviderWrapper>
        </ClientOnly>
      </body>
    </html>
  );
}
