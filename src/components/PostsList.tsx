import { useSelector } from 'react-redux';

import { RootState } from '@/app/store';
import Post from '@/components/Post';
import { selectAllPosts } from '@/reducers/postSlice';

function PostsList() {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post: Post) => (
    <Post key={post.id} post={post} />
  ));

  return (
    <div className="bg-gray-400 mb-10 mt-6 w-[30%] rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      {renderedPosts}
    </div>
  );
}

export default PostsList;
