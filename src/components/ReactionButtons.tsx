/* eslint-disable jsx-a11y/control-has-associated-label */
import { useDispatch } from 'react-redux';

import { reactionAdded } from '@/reducers/postSlice';

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕',
};

type Props = {
  post: Post;
};

function ReactionButtons({ post }: Props) {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="mx-2"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
}

export default ReactionButtons;
