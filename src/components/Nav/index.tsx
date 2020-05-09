import classNames from "classnames"
import * as React from "react"
import { debounce } from "../../utils/debounce"
import { MaxWidth } from "../MaxWidth"
import { ScrollLink } from "../ScrollLink"
import styles from "./index.module.scss"

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
