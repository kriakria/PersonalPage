import React from 'react';
import { Logo } from '../components/Logo';
import { TopNavigation } from '../components/TopNavigation';

export const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <header>
        <Logo />
        <TopNavigation />
      </header>
      <body>{children}</body>
      <footer></footer>
    </>
  );
};
