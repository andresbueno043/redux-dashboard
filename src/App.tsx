import PostsList from '@/components/PostsList';

function App() {
  return (
    <div className="flex items-center w-screen pt-12 flex-col bg-gray-600 h-screen">
      <h1 className="text-[60px] font-bold">Posts</h1>
      <PostsList />
    </div>
  );
}

export default App;
