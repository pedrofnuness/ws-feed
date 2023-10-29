import { format, formatDistanceToNow } from 'date-fns'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({ author, content, publishedAt }) {
  const publishedDateFormatted = format(publishedAt, "LLLL do', at' h:mm aaa");
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { addSuffix: true })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar 
            src={author.avatarUrl}
            alt="user avatar" 
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time 
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line, index) => {
          if (line.type === 'paragraph') {
            return <p key={index}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={index}><a href="">{line.content}</a></p>;
          }
        })}
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

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
