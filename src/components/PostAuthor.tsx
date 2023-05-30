import { useSelector } from 'react-redux';
import { selectAllUsers } from '@/reducers/userSlice';

type Props = {
  userId: string;
};

function PostAuthor({ userId }: Props) {
  const users = useSelector(selectAllUsers);

  const author = users.find((user) => user.id === userId);

  return <span> by {author ? author.name : 'Unknown author'}</span>;
}

export default PostAuthor;
