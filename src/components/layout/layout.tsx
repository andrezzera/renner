import React from 'react'
import { Footer } from '../footer/footer'
import { Header } from '../header/header'
import styles from './layout.module.css'

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}
