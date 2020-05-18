import classnames from "classnames"
import { ReactNode } from "react"
import styles from "./index.module.scss"

interface Props {
  children: ReactNode
  className?: string
}

export function BodyParagraph({ children, className = "" }: Props) {
  return (
    <p className={classnames(styles.bodyParagraph, className)}>{children}</p>
  )
}
