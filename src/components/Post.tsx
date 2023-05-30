import PostAuthor from '@/components/PostAuthor';
import TimeAgo from '@/components/TimeAgo';

type Props = {
  post: Post;
};

function Post({ post }: Props) {
  return (
    <article className="bg-white my-4 mx-10 rounded-lg px-5 min-h-[120px] py-4">
      <h3 className="text-xl font-bold">{post.title}</h3>
      <p className="mt-2">{post.content.substring(0, 100)}</p>
      <PostAuthor userId={post.userId} />
      <TimeAgo timestamp={post.date} />
    </article>
  );
}

export default Post;
