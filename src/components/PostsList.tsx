import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import Post from '@/components/Post';

function PostsList() {
  const posts = useSelector((state: RootState) => state.posts);

  const renderedPosts = posts.map((post: Post) => (
    <Post key={post.id} title={post.title} content={post.content} />
  ));

  return (
    <div className="bg-gray-400 mt-6 w-[30%] rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      {renderedPosts}
    </div>
  );
}

export default PostsList;
