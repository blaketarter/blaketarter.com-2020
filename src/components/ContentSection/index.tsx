import classnames from "classnames"
import * as React from "react"
import styles from "./index.module.scss"

interface Props {
  children: React.ReactNode
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
