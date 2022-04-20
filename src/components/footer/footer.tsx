import Link from 'next/link'
import React from 'react'
import styles from './footer.module.css'

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <span>
          Av. Joaquim Porto Villanova, 401 - B. Jardim Carvalho - Porto
          Alegre/RS CEP: 91410-400 CNPJ: 92.754.738/0001-62
        </span>
        <span>
          Para reclamações, clique aqui:
          <Link href="http://www.procon.rj.gov.br/">Procon RJ</Link>|
          <Link href="http://www.procon.sc.gov.br/">Procon SC</Link>
        </span>
        <span>Todos os direitos reservados</span>
      </div>
    </footer>
  )
}
