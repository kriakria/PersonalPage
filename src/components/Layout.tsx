import Head from 'next/head'
import { Logo } from './Logo'
import { TopNavigation } from './TopNavigation'
import Footer from './Footer'
import { HeaderTags } from './HeaderTags'

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <HeaderTags />
      <header>
        <Logo />
        <TopNavigation />
      </header>
      <body>{children}</body>
      <Footer />
    </>
  )
}

export default Layout
