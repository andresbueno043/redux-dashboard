interface Post {
  id: string;
  title: string;
  content: string;
  userId: string;
  date: string;
  reactions: { [key: string]: number };
}

type PostsState = {
  posts: Post[];
  status: Status;
  error: null;
};
