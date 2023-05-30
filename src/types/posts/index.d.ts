interface Post {
  id: string;
  title: string;
  content: string;
  userId: string;
}

type PostsState = Post[];
