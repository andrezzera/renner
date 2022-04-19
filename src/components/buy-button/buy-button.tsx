import React from 'react';
import styles from  "./buy-button.module.css"

export const BuyButton: React.FC = () => {

  return (
    <button className={styles['buy-button']} disabled>
      INDISPONÍVEL
    </button>
  );
}
