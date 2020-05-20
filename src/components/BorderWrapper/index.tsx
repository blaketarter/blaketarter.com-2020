import classNames from "classnames"
import { ReactNode } from "react"
import styles from "./index.module.scss"

interface Props {
  children: ReactNode
  component?: string
  className?: string
}

export function BorderWrapper({
  children,
  component = "div",
  className,
}: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component: any = component
  return (
    <Component className={classNames(styles.borderWrapper, className)}>
      {children}
    </Component>
  )
}
