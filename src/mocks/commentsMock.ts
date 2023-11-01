import { v4 as uuidv4 } from 'uuid';
import { CommentInterface } from '../types';

export const commentsMock: CommentInterface[] = [
  {
    id: uuidv4(),
    content: "I like it!! Let's do this"
  }
]