import { AppProps } from "next/app"
import Head from "next/head"
import "normalize.css"
import "pattern.css"
import "./styles.scss"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          blaketarter.com | TypeScript Developer based in Kansas City, MO
        </title>
        <meta
          name="description"
          content="Blake is a TypeScript developer with 6+ years of experience planning, creating, and maintaining websites and various application platforms."
        />
        <meta
          name="keywords"
          content="typescript, javascript, developer, dev, web, font-end, website, kansas city, react"
        />

        <meta
          property="og:title"
          content="blaketarter.com | TypeScript Developer based in Kansas City, MO"
        />
        <meta
          property="og:description"
          content="Blake is a TypeScript developer with 6+ years of experience planning, creating, and maintaining websites and various application platforms."
        />
        <meta property="og:image" content="https://blaketarter.com/me.jpeg" />
        <meta property="og:url" content="https://blaketarter.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="blaketarter.com" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
