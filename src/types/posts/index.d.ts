interface Post {
  id: string;
  title: string;
  content: string;
  userId: string;
  date: string;
}

type PostsState = Post[];
