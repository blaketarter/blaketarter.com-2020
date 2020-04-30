import styles from "./index.module.scss"
import { MaxWidth } from "../MaxWidth"

export function Nav() {
  return (
    <nav className={styles.nav}>
      <MaxWidth className={styles.navInner} component="ul">
        <li className={styles.navItem}>About Me.</li>
        <li className={styles.navItem}>My History.</li>
        <li className={styles.navItem}>Some Work.</li>
        <li className={styles.navItem}>Find Me.</li>
      </MaxWidth>
    </nav>
  )
}
