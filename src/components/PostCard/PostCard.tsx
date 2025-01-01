const PostCard = () => {
  return (
    <div className="w-64 h-52 p-4 bg-white rounded-md shadow-md flex flex-col">
        <h1 className="text-lg font-semibold">タイトル</h1>
        <div className="mt-1 text-sm line-clamp-3">投稿本文</div>
    </div>
  )
}

export default PostCard