import PostsList from '@/components/PostsList';
import AddPostForm from '@/components/AddPostForm';

function App() {
  return (
    <div className="flex items-center w-full pt-12 flex-col bg-gray-600 h-full">
      <h1 className="text-[60px] font-bold">Posts</h1>
      <AddPostForm />
      <PostsList />
    </div>
  );
}

export default App;
