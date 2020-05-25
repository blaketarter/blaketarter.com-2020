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
          content="I'm a TypeScript developer with over six years of experience
            planning, creating, and maintaining various types of apps and
            websites."
        />
        <meta
          name="keywords"
          content="typescript, javascript, developer, dev, web, font-end, website, kansas city, react, node"
        />

        <meta
          property="og:title"
          content="blaketarter.com | TypeScript Developer based in Kansas City, MO"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="I'm a TypeScript developer with over six years of experience
            planning, creating, and maintaining various types of apps and
            websites."
        />
        <meta
          property="og:image"
          content="https://blaketarter.com/images/me.jpeg"
        />
        <meta property="og:url" content="https://blaketarter.com" />
        <meta property="og:site_name" content="blaketarter.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
