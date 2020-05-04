import classnames from "classnames"
import Head from "next/head"
import * as React from "react"
import { About } from "../components/About"
import { FindMe } from "../components/FindMe"
import { Footer } from "../components/Footer"
import { Hero } from "../components/Hero"
import { History } from "../components/History"
import { Nav } from "../components/Nav"
import { usePattern } from "../utils/usePattern"

export default function App() {
  const [pattern, nextPattern] = usePattern()
  const [theme, setTheme] = React.useState("light")

  return (
    <div className={classnames("App", `theme-${theme}`)}>
      <Head>
        <title>
          blaketarter.com | TypeScript Developer based in Kansas City, MO
        </title>
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
      </Head>
      <Nav />
      <Hero
        pattern={pattern}
        nextPattern={nextPattern}
        changeTheme={() => setTheme(theme === "light" ? "dark" : "light")}
      />
      <main>
        <About pattern={pattern} />
        <History pattern={pattern} />
        <FindMe pattern={pattern} />
      </main>
      <Footer pattern={pattern} />
    </div>
  )
}
