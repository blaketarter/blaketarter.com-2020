import classnames from "classnames"
import * as React from "react"
import styles from "./index.module.scss"

interface Props {
  children: React.ReactNode
  className?: string
}

export function BodyParagraph({ children, className = "" }: Props) {
  return (
    <p className={classnames(styles.bodyParagraph, className)}>{children}</p>
  )
}
