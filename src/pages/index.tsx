import * as React from "react"
import Head from 'next/head'

import { usePattern } from "../utils/usePattern";
import { Hero } from "../components/Hero";
import { About } from "../components/About";

export default function App() {
  const [pattern, nextPattern] = usePattern();
  const [theme, setTheme] = React.useState("light");

  return (
    <div className={`App theme-${theme}`}>
      <Head>
        <title>blaketarter.com</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Hero
        pattern={pattern}
        nextPattern={nextPattern}
        changeTheme={() => setTheme(theme === "light" ? "dark" : "light")}
      />
      <main>
        <About pattern={pattern} />
      </main>
    </div>
  );
}
