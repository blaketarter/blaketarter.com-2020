import { MaxWidth } from "../MaxWidth"
import { ScrollLink } from "../ScrollLink"
import styles from "./index.module.scss"

export function Nav() {
  return (
    <nav className={styles.nav}>
      <MaxWidth className={styles.navInner} component="ul">
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
