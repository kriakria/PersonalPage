import Head from 'next/head'
import favicon from '../../public/favicon.svg'

type HeaderTagsProps = {
  title?: string
  url?: string
  content?: string
}

export const HeaderTags = ({
  title = 'Code, Coffee and Music key',
  url = '',
  content = '',
}: HeaderTagsProps) => {
  return (
    <>
      <Head>
        <title>{`Jorge Writes | ${title}`}</title>
        <meta
          name="title"
          content={`Jorge Writes | ${title}`}
          key="page:title"
        />
        <link rel="icon" href="favicon.svg" sizes="any" type="image/svg+xml" />
        <meta
          name="description"
          key="description"
          content="This is where I write about the things I know most about: Code, Coffee and Music. Come along and nerd out about musings on these topics."
        />
        {/* open graph tags */}
        <meta property="og:type" key="og:type" content="website" />
        <meta property="og:url" key="og:url" content="https://jorge.express" />
        <meta
          property="og:title"
          key="og:title"
          content={`Jorge Writes | ${title}`}
        />
        <meta
          property="og:description"
          key="og:description"
          content="This is where I write about the things I know most about: Code, Coffee and Music. Come along and nerd out about musings on these topics."
        />
        <meta
          key="og:image"
          property="og:image"
          content="public/LogoRedux.png"
        />
        {/* Twitter tags - investigate whether they are still needed */}
        <meta
          key="twitter:card"
          property="twitter:card"
          content="summary_large_image"
        />
        <meta
          key="twitter:url"
          property="twitter:url"
          content="https://jorge.express"
        />
        <meta
          key="twitter:title"
          property="twitter:title"
          content={`Jorge Writes | ${title}`}
        />
        <meta
          key="twitter:description"
          property="twitter:description"
          content="This is where I write about the things I know most about: Code, Coffee and Music. Come along and nerd out about musings on these topics."
        />
        <meta
          key="twitter:image"
          property="twitter:image"
          content="public/LogoRedux.png"
        />
      </Head>
    </>
  )
}
