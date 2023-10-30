/* eslint-disable react/prop-types */
import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { commentsMock } from '../mocks/commentsMock';
import styles from './Post.module.css';

export function Post({ author, content, publishedAt }) {
  const publishedDateFormatted = format(publishedAt, "LLLL do', at' h:mm aaa");
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { addSuffix: true })

  const [comments, setComments] = useState(commentsMock);
  const [newComment, setNewComment] = useState('');

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newComment]);
    setNewComment('');
  }

  function handleNewCommentChange() {
    setNewComment({ id: uuidv4(), content:event.target.value });
  }

  function deleteComment(comment) {
    
  }

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

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Give your feedback</strong>

        <textarea
          name="comment"
          placeholder="Leave a comment"
          onChange={handleNewCommentChange}
          value={newComment}
        />

        <footer>
          <button type="submit">Post</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => (
          <Comment 
            key={comment.id}
            comment={comment}
            deleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  )
}
