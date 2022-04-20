import Image from 'next/image'
import React from 'react'
import styles from './header.module.css'
import LogoMobile from '@/assets/images/logo-mobile.png'
import LogoDesktop from '@/assets/images/logo-desktop.png'
import { Cart } from '../cart/cart'
import Link from 'next/link'

export const Header: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__wrapper}>
          <Link href="/" passHref>
            <a className={[styles.logo, styles['logo--mobile']].join(' ')}>
              <Image
                src={LogoMobile}
                alt="Logo Renner"
                className={styles.logo__image}
                unoptimized
              />
            </a>
          </Link>

          <Link href="/" passHref>
            <a className={[styles.logo, styles['logo--desktop']].join(' ')}>
              <Image
                src={LogoDesktop}
                alt="Logo Renner"
                className={styles.logo__image}
                unoptimized
              />
            </a>
          </Link>
          <Cart />
        </div>
      </header>
      <div className={styles.fill} />
    </>
  )
}
