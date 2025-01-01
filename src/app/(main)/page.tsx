import PostCard from "@/components/PostCard/PostCard";

export default function MainPage() {
  return (
    <div className="container mx-auto px-4 text-gray-800 p-8 h-full overflow-auto pb-24">
      <header className="flex  justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">投稿一覧</h1>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        <PostCard />
      </div>
    </div>
    );
}