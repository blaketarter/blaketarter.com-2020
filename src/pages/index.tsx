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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        pattern={pattern}
        nextPattern={nextPattern}
        changeTheme={() => setTheme(theme === "light" ? "dark" : "light")}
      />
      <About pattern={pattern} />
    </div>
  );
}
