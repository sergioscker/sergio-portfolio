import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

//components
import PageTransition from '@/components/PageTransition';
import StairTransition from '@/components/StairTransition';
import { Header } from '@/components/Header';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import ThemeProviderWrapper from '@/components/ThemeProvider';
import ClientOnly from '@/components/ClientOnly';

// notifications
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrainsMono',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'Portfolio',
  description:
    'Check out the portfolio of Sérgio Oliveira, professional in [JavaScript, React, Node, TypeScript, NoSql, SQL].',
  keywords:
    'portfolio, web developer, fullstack developer, JavaScript, React.js, Next.js',
  openGraph: {
    title: `Sérgio Oliveira Porfolio`,
    description:
      'Discover high quality projects and design by Sérgio Oliveira.',
    url: 'https://sergio-portfolio-six.vercel.app',
    type: 'website',
    images: [
      {
        url: '',
        alt: 'logo',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
      </head>
      <body className={`${jetBrainsMono.variable}  antialiased`}>
        <ClientOnly>
          <ThemeProviderWrapper>
            <Header />
            <ThemeSwitcher />
            <StairTransition />
            <ToastContainer
              autoClose={2000}
              theme="colored"
              position="top-right"
              draggable
            />
            <PageTransition>{children}</PageTransition>
          </ThemeProviderWrapper>
        </ClientOnly>
      </body>
    </html>
  );
}
