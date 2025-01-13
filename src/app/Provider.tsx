'use client';
import { Suspense } from 'react';
import { ThemeProvider } from 'next-themes';
import Loading from './loading';
import dynamic from 'next/dynamic';

// const aboutPage = dynamic(() => import('./about/page'), { ssr: true },Loading:()=><Loading/>);

const aboutPage = dynamic(() => import('./about/page'), {
  ssr: true,
  //   loading: () => <Loading />, // i don't think we need this, PageView seems to be more expensive to load
});
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </Suspense>
  );
}
