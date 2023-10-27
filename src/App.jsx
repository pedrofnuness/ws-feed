import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

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

 