import { useState, useEffect } from "react";
import { getPosts } from "../api/posts";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(term.toLowerCase())
    );
    setPosts(filteredPosts);
  };

  const handleSelectPost = (post) => {
    setSelectedPost(post);
  };

  return {
    posts,
    searchTerm,
    selectedPost,
    handleSearch,
    handleSelectPost,
  };
};
