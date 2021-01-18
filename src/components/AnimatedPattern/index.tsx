import classnames from "classnames"
import { MouseEventHandler, ReactNode } from "react"
import styles from "./index.module.scss"

interface Props {
  pattern: string
  className?: string
  children?: ReactNode
  onClick?: MouseEventHandler<HTMLDivElement>
  testId?: string
}

export function AnimatedPattern({
  pattern,
  className = "",
  children,
  onClick,
  testId,
}: Props) {
  return (
    <div
      role="presentation"
      onClick={onClick}
      className={`${styles.wrapper} ${className}`}
      data-testid={testId}
    >
      <div
        className={classnames(styles.animatedPattern, `pattern-${pattern}`)}
      />
      {children}
    </div>
  )
}
