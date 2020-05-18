import classNames from "classnames"
import { useEffect, useState } from "react"
import { debounce } from "../../utils/debounce"
import { ThemeMode } from "../../utils/theme"
import { MaxWidth } from "../MaxWidth"
import { ScrollLink } from "../ScrollLink"
import { ThemeModeSwitcher } from "../ThemeModeSwitcher"
import styles from "./index.module.scss"

interface Props {
  scrollEnabled?: boolean
  theme: ThemeMode
  setTheme: (theme: ThemeMode) => unknown
}

export function Nav({ theme, setTheme, scrollEnabled = false }: Props) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (scrollEnabled) {
      const listener = debounce(() => {
        setScrolled(window?.pageYOffset > 0)
      })

      listener()

      document.addEventListener("scroll", listener, {
        passive: true,
      })

      return () => {
        document.removeEventListener("scroll", listener)
      }
    } else {
      return
    }
  }, [scrollEnabled])

  return (
    <nav
      className={classNames(styles.nav, {
        [styles.scrolled]: scrolled,
        [styles.fixed]: scrollEnabled,
      })}
    >
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
        <li className={classNames(styles.navItem, styles.theme)}>
          <ThemeModeSwitcher theme={theme} setTheme={setTheme} />
        </li>
      </MaxWidth>
    </nav>
  )
}
