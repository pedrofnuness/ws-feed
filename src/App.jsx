import { Post } from './Post'
import { Header } from './components/Header'

import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Pedro Nunes" 
            content="What an awesome app!!"
          />
          <Post 
            author="Bill Gates"
            content="We most care for the planet."
          />
        </main>
      </div>
    </div>
  )
}

 