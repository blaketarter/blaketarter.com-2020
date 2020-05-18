import classnames from "classnames"
import { ReactNode } from "react"
import styles from "./index.module.scss"

interface Props {
  className?: string
  children: ReactNode
  component?: string
  id?: string
}

export function MaxWidth({
  className = "",
  children,
  component = "div",
  id,
}: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component: any = component
  return (
    <Component id={id} className={classnames(styles.maxWidth, className)}>
      {children}
    </Component>
  )
}
