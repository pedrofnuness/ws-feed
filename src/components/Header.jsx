import styles from './Header.module.css'

import hatLogo from '../assets/hat-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={hatLogo} alt="Cowboy hat logo" />
    </header>
  );
}