import React from "react";

interface DetailPostProps {
  id: number;
  title: string;
  content: string;
  author: string;
}

const DetailPost: React.FC<DetailPostProps> = ({ id, title, content, author }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "12px", marginBottom: "10px", borderRadius: "8px" }}>
      <h3>{title}</h3>
      <p>{content}</p>
      <p><strong>Tác giả:</strong> {author}</p>
      <small>ID: {id}</small>
    </div>
  );
};

export default DetailPost;
