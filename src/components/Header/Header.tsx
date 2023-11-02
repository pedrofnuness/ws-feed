import styles from './Header.module.css'

import hatLogo from '/hat-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={hatLogo} alt="Cowboy hat logo" />
      <h3 className={styles.title}>WS Feed</h3>
    </header>
  );
}