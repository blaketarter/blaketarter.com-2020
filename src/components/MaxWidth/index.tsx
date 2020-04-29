import * as React from "react";
import styles from "./index.module.css";

interface Props {
  className: string;
  children: React.ReactNode;
  component?: string;
}

export function MaxWidth({ className, children, component = "div" }: Props) {
  const Component: any = component;
  return <Component className={`${styles.maxWidth} ${className}`}>{children}</Component>;
}
