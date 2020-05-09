import classNames from "classnames"
import * as React from "react"
import { MaxWidth } from "../MaxWidth"
import { ScrollLink } from "../ScrollLink"
import styles from "./index.module.scss"

// The debounce function receives our function as a parameter
const debounce = <A extends any[], B extends any>(fn: (...a: A) => B) => {
  // This holds the requestAnimationFrame reference, so we can cancel it if we wish
  let frame: number

  // The debounce function returns a new function that can receive a variable number of arguments
  return (...params: A) => {
    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) {
      cancelAnimationFrame(frame)
    }

    // Queue our function call for the next frame
    frame = requestAnimationFrame(() => {
      // Call our function and pass any params we received
      fn(...params)
    })
  }
}

export function Nav() {
  const [scroll, setScroll] = React.useState(0)

  React.useEffect(() => {
    const listener = debounce(() => {
      setScroll(window?.pageYOffset ?? 0)
    })

    document.addEventListener("scroll", listener, {
      passive: true,
    })

    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [])

  return (
    <nav className={classNames(styles.nav, { [styles.scrolled]: scroll > 0 })}>
      <MaxWidth className={styles.navInner} component="ul">
        <li className={classNames(styles.navItem, styles.top)}>
          <ScrollLink href="#top">↑</ScrollLink>
        </li>
        <li className={styles.navItem}>
          <ScrollLink href="#about">About Me.</ScrollLink>
        </li>
        <li className={styles.navItem}>
          <ScrollLink href="#history">My History.</ScrollLink>
        </li>
        <li className={styles.navItem}>
          <ScrollLink href="#work">Some Work.</ScrollLink>
        </li>
        <li className={styles.navItem}>
          <ScrollLink href="#find">Find Me.</ScrollLink>
        </li>
      </MaxWidth>
    </nav>
  )
}
