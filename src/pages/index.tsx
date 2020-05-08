import classnames from "classnames"
import Head from "next/head"
import * as React from "react"
import { About } from "../components/About"
import { FindMe } from "../components/FindMe"
import { Footer } from "../components/Footer"
import { Hero } from "../components/Hero"
import { History } from "../components/History"
import { Nav } from "../components/Nav"
import { SomeWork } from "../components/SomeWork"
import { usePattern } from "../utils/usePattern"

export default function App() {
  const [pattern, nextPattern] = usePattern()
  const [theme, setTheme] = React.useState("light")

  return (
    <div className={classnames("App", `theme-${theme}`)}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>
          blaketarter.com | TypeScript Developer based in Kansas City, MO
        </title>
        <meta name="theme-color" content="#f8b195" />
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
      <Nav />
      <main>
        <Hero
          pattern={pattern}
          nextPattern={nextPattern}
          changeTheme={() => setTheme(theme === "light" ? "dark" : "light")}
        />
        <About pattern={pattern} />
        <History pattern={pattern} />
        <SomeWork pattern={pattern} />
        <FindMe pattern={pattern} />
      </main>
      <Footer pattern={pattern} />
    </div>
  )
}
