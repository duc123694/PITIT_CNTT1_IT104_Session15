import React, { useState } from "react";
import DetailPost from "../EX6/ListPost";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

const ListPost: React.FC = () => {
  const [posts] = useState<Post[]>([
    { id: 1, title: "Bài viết 1", content: "Nội dung bài viết 1", author: "Nguyyen A" },
    { id: 2, title: "Bài viết 2", content: "Nội dung bài viết 2", author: "Tran thi B" },
    { id: 3, title: "Bài viết 3", content: "Nội dung bài viết 3", author: "Le Van C" },
  ]);

  return (
    <div>
      <h2>Danh sách bài viết</h2>
      {posts.map((post) => (
        <DetailPost
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          author={post.author}
        />
      ))}
    </div>
  );
};

export default ListPost;
