import classnames from "classnames"
import * as React from "react"
import styles from "./index.module.scss"

interface Props {
  children: React.ReactNode
  className?: string
}

export function Title({ children, className = "" }: Props) {
  return <h2 className={classnames(styles.title, className)}>{children}</h2>
}
