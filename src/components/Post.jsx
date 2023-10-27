import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img 
            src="https://github.com/pedrofnuness.png" 
            alt="user avatar" 
            className={styles.avatar}
          />
          <div className={styles.authorInfo}>
            <strong>Pedro Nunes</strong>
            <span>Software Developer</span>
          </div>
        </div>

        <time 
          title="October 27th at 3pm"
          dateTime="2023-10-27 15:00:00"
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Wow, what an awesome app!
        Looking foward to explore more and share some experience</p>

        <p>Lets also connect on <a href="https://www.linkedin.com/in/pedrofnuness/">Linkedin</a></p>

        <p>
          <a href="">#newproject</a>{' '}
          <a href="">#development </a>{' '}
          <a href="">#ReactJS </a>
        </p>
      </div>

      <form action="" className={styles.commentForm}>
        <strong>Give your feedback</strong>

        <textarea 
          placeholder="Leave a comment"
        />

        <footer>
          <button type="submit">Post</button>
        </footer>
      </form>
    </article>
  )
}
