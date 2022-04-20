import React from 'react';
import styles from "./section-title.module.css"

interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({children}: SectionTitleProps) => {
  return (
    <h2 className={styles['section-title']}>{children}</h2>
  );
}
