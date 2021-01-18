import classnames from "classnames"
import { MouseEventHandler, ReactNode, useState } from "react"
import styles from "./index.module.scss"

interface Props {
  pattern: string
  className?: string
  children?: ReactNode
  offsetMultiplier?: number
  onClick?: MouseEventHandler<HTMLDivElement>
  testId?: string
}

export function AnimatedPattern({
  pattern,
  className = "",
  children,
  offsetMultiplier = 10,
  onClick,
  testId,
}: Props) {
  const [offset, setOffset] = useState([0, 0])

  return (
    <div
      role="presentation"
      onClick={onClick}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const relativeX = e.pageX - e.currentTarget.offsetLeft
        const relativeY = e.pageY - e.currentTarget.offsetTop

        const offset = [
          Math.min(relativeX / rect.width, 1) * -offsetMultiplier,
          Math.min(relativeY / rect.height, 1) * -offsetMultiplier,
        ]

        setOffset(offset)
      }}
      className={`${styles.wrapper} ${className}`}
      data-testid={testId}
    >
      <div
        style={{
          transform: `translate(${offset[0]}px, ${offset[1]}px)`,
        }}
        className={classnames(styles.animatedPattern, `pattern-${pattern}`)}
      />
      {children}
    </div>
  )
}