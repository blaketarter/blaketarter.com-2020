import * as React from "react";
import styles from "./index.module.scss";

interface Props {
  children: string;
}

export function SectionTitle({ children }: Props) {
  return <h2 className={styles.title}>{children}</h2>
}
