import React from 'react';
import styles from "./header.module.css"
// import { Container } from './styles';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>
        <img src="" alt="Logo Renner" className={styles.header__logo} />
      </h1>
      <button className="header__bag"></button>
    </header>
  );
}