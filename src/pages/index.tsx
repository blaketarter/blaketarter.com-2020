import classnames from "classnames"
import Head from "next/head"
import * as React from "react"
import { CSP } from "../components/CSP"
import { Nav } from "../components/Nav"
import { SectionAbout } from "../components/SectionAbout"
import { SectionFindMe } from "../components/SectionFindMe"
import { SectionFooter } from "../components/SectionFooter"
import { SectionHero } from "../components/SectionHero"
import { SectionHistory } from "../components/SectionHistory"
import { SectionSomeWork } from "../components/SectionSomeWork"
import { useTheme } from "../utils/theme"
import { usePattern } from "../utils/usePattern"

export default function App() {
  const [pattern, nextPattern] = usePattern()
  const [theme, setTheme] = useTheme()

  return (
    <div className={classnames("App", `theme-${theme}`)}>
      <Head>
        <CSP />
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
      <Nav theme={theme} setTheme={setTheme} />
      <main>
        <SectionHero pattern={pattern} nextPattern={nextPattern} />
        <SectionAbout pattern={pattern} />
        <SectionHistory pattern={pattern} />
        <SectionSomeWork pattern={pattern} />
        <SectionFindMe pattern={pattern} />
      </main>
      <SectionFooter pattern={pattern} />
    </div>
  )
}
