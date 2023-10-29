import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css'
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?auto=format&fit=crop&q=50&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="sidebar cover image"
        className={styles.cover}
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/pedrofnuness.png" />
        <strong>Pedro Nunes</strong>
        <span>Software Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Edit profile
        </a>
      </footer>
    </aside>
  )
}
