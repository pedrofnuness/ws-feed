export interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

export interface PostContent {
  type: string;
  content: string;
}

export interface PostProps {
  author: Author;
  publishedAt: Date;
  content: PostContent[];
}

export interface CommentInterface {
  id: string,
  content: string;
}