import * as React from "react"
import styles from "./index.module.scss"

interface Props {
  pattern: string
  className?: string
  children?: React.ReactChild
  offsetMultiplier?: number
}

export function AnimatedPattern({ pattern, className = "", children, offsetMultiplier = 10 }: Props) {
  const [offset, setOffset] = React.useState([0, 0]);

  return (<div
    onMouseMove={e => {
      const rect = e.currentTarget.getBoundingClientRect()
      const relativeX = e.pageX - e.currentTarget.offsetLeft
      const relativeY = e.pageY - e.currentTarget.offsetTop

      const offset = [
        Math.min(relativeX / rect.width, 1) * -offsetMultiplier,
        Math.min(relativeY / rect.height, 1) * -offsetMultiplier
      ];

      setOffset(offset);
    }}
    className={`${styles.animatedPatternWrapper} ${className}`}
  >
    <div
      style={{
        transform: `translate(${offset[0]}px, ${offset[1]}px)`
      }}
      className={`${styles.animatedPattern} pattern-${pattern}`} />
    {children}
  </div>)
}
