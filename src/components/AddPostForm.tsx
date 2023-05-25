import { ChangeEvent, useState } from 'react';

function AddPostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const onContentChanged = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);

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
          className="bg-gray-800 text-white px-10 py-2 my-5 rounded-md hover:bg-slate-600 transition-all duration-300"
          type="button"
        >
          Save Post
        </button>
      </form>
    </section>
  );
}

export default AddPostForm;
