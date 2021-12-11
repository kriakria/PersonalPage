import Head from 'next/head';
import { Logo } from './Logo';
import { TopNavigation } from './TopNavigation';
import Footer from './Footer';

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <Head>
        <title>Jorge Writes - Code, Coffee and Music</title>
        <meta name="title" content="Jorge Writes - Code, Coffee and Music" />
        <meta
          name="description"
          content="This is where I write about the things I know most about: Code, Coffee and Music. Come along and nerd out about musings on these topics."
        />
        {/* open graph tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jorge.express" />
        <meta
          property="og:title"
          content="Jorge Writes - Code, Coffee and Music"
          key="title"
        />
        <meta
          property="og:description"
          content="This is where I write about the things I know most about: Code, Coffee and Music. Come along and nerd out about musings on these topics."
        />
        <meta property="og:image" content="public/LogoRedux.png" />
        {/* Twitter tags - investigate whether they are still needed */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jorge.express" />
        <meta
          property="twitter:title"
          content="Jorge Writes - Code, Coffee and Music"
        />
        <meta
          property="twitter:description"
          content="This is where I write about the things I know most about: Code, Coffee and Music. Come along and nerd out about musings on these topics."
        />
        <meta property="twitter:image" content="public/LogoRedux.png" />
      </Head>
      <header>
        <Logo />
        <TopNavigation />
      </header>
      <body>{children}</body>
      <Footer />
    </>
  );
};

export default Layout;
