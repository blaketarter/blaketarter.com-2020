import * as React from "react"
import styles from "./index.module.scss"

interface Props {
  className?: string
  children: React.ReactNode
  component?: string
}

export function MaxWidth({
  className = "",
  children,
  component = "div",
}: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component: any = component
  return (
    <Component className={`${styles.maxWidth} ${className}`}>
      {children}
    </Component>
  )
}
