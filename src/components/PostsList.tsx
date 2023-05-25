import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';

function PostsList() {
  const posts = useSelector((state: RootState) => state.posts);

  const renderedPosts = posts.map((post: Post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));

  return <div>{renderedPosts}</div>;
}

export default PostsList;
