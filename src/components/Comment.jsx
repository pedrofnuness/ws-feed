import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/yrimaciel.png" alt="Comment author avatar" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Yuri Maciel</strong>
              <time 
                title="October 27th at 3:30pm"
                dateTime="2023-10-27 15:30:00"
              >
                About 30m ago
              </time>
            </div>

            <button title='Delete comment'>
              <Trash size={24}/>
            </button>
          </header>

          <p>Nice, I totally agree with you my friend!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Like <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
