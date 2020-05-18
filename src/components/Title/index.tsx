import classnames from "classnames"
import { ReactNode } from "react"
import styles from "./index.module.scss"

interface Props {
  children: ReactNode
  className?: string
}

export function Title({ children, className = "" }: Props) {
  return <h2 className={classnames(styles.title, className)}>{children}</h2>
}
