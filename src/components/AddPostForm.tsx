import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers } from '@/reducers/userSlice';

import { postAdded } from '@/reducers/postSlice';

function AddPostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  const dispatch = useDispatch();

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const onContentChanged = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);
  const onAuthorChanged = (e: ChangeEvent<HTMLSelectElement>) =>
    setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user: User) => (
    <option value={user.id} key={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section className="bg-gray-200 w-[40%] rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] flex flex-col items-center justify-center mx-4">
      <h2 className="text-2xl my-5">Add a new post</h2>
      <form className="flex items-center justify-center flex-col">
        <label htmlFor="postTitle">
          Post title:
          <input
            className="w-[70%] mx-4 my-4 rounded-lg px-2 border-black border-[1px]"
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
          />
        </label>
        <label
          htmlFor="userId"
          className="flex items-center justify-center flex-row"
        >
          Author:
          <select
            className="w-[70%] mx-4 my-4 rounded-lg px-2 border-black border-[1px]"
            name="user"
            id="user"
            onChange={onAuthorChanged}
          >
            <option value=""> </option>
            {usersOptions}
          </select>
        </label>
        <label htmlFor="postContent" className="flex items-center h-24">
          Content:
          <textarea
            className="w-[70%] mx-4 my-4 rounded-lg px-2 py-2 border-black border-[1px] resize-none"
            name="postContent"
            id="postContent"
            value={content}
            onChange={onContentChanged}
          />
        </label>
        <button
          className="disabled:bg-slate-300 disabled:text-black hover:cursor-default bg-gray-800 text-white px-10 py-2 my-5 rounded-md hover:bg-slate-600 transition-all duration-300"
          type="button"
          onClick={onSavePostClicked}
          disabled={!canSave}
        >
          Save Post
        </button>
      </form>
    </section>
  );
}

export default AddPostForm;
