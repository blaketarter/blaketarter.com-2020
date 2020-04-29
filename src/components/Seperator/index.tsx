import * as React from "react";
import styles from "./index.module.css";

interface Props {
  pattern: string;
}

export function Seperator({ pattern }: Props) {
  return <div className={`${styles.seperator} pattern-${pattern}`} />;
}
