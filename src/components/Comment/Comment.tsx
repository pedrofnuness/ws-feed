import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from '../Avatar/Avatar'
import { useState } from 'react'
import { CommentInterface } from '../../types'

type CommentComponentProps = {
  comment: CommentInterface;
  onDeleteComment: (comment: CommentInterface) => void;
}

export function Comment({ comment, onDeleteComment }: CommentComponentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(comment)
  }

  function handleLikeComment() {
    setLikeCount(prevState => prevState + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar 
        hasBorder={false} 
        src="https://github.com/o-yurimaciel.png" 
        alt="Comment author avatar" 
      />

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

            <button onClick={handleDeleteComment} title='Delete comment'>
              <Trash size={24}/>
            </button>
          </header>

          <p>{comment.content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Like <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
