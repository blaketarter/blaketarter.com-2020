import classnames from "classnames"
import { ReactNode } from "react"
import styles from "./index.module.scss"

interface Props {
  children: ReactNode
  className?: string
  size?: "normal" | "small"
}

export function ContentSection({
  children,
  className = "",
  size = "normal",
}: Props) {
  return (
    <div
      className={classnames(styles.contentSection, className, {
        [styles.small]: size === "small",
      })}
    >
      {children}
    </div>
  )
}
