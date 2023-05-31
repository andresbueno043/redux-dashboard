import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Post from '@/components/Post';
import postSlice, {
  selectAllPosts,
  getPostStatus,
  getPostError,
  fetchPosts,
} from '@/reducers/postSlice';
import { AppDispatch } from '@/app/store';

function PostsList() {
  const dispatch: AppDispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostStatus);
  const postsError = useSelector(getPostError);

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts());
    }
  });

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post: Post) => (
    <Post key={post.id} post={post} />
  ));

  return (
    <div className="bg-gray-400 mb-10 mt-6 w-[30%] rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      {renderedPosts}
    </div>
  );
}

export default PostsList;
