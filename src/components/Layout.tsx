import React from 'react';
import { Logo } from './Logo';
import { TopNavigation } from './TopNavigation';
import Footer from './Footer'

export const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    
    <>
      <header>
        <Logo />
        <TopNavigation />
      </header>
      <body>{children}</body>
      <Footer />
      </>
  );
};
