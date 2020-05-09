import * as React from "react"

interface Props {
  href: string
  className?: string
  children: React.ReactNode
}

const onClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  const el = document.getElementById(href.slice(1))

  if (el && el.scrollIntoView) {
    e.preventDefault()
    el.scrollIntoView({ behavior: "smooth" })

    // if (window.history.pushState) {
    //   window.history.pushState(null, href, href)
    // } else {
    //   window.location.href = href
    // }
  }
}

export function ScrollLink({ href, children, className = "" }: Props) {
  return (
    <a
      className={className}
      href={href}
      onClick={(e) => onClick(e, href)}
      tabIndex={0}
    >
      {children}
    </a>
  )
}
