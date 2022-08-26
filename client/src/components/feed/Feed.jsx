import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Share from "../../share/Share";
import Post from "../../components/post/Post";
import "./feed.css";
import { AuthContext } from "../../context/AuthContext";

export default function Feed({ username }) {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  //provide an empty array to use effect if you want it to run once
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/" + user._id);
      console.log(res.data);
      setPosts(res.data);
    };
    fetchPosts();
  }, [username, user._id]);
  return (
    <div className="feed">
      <Share />
      {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}
    </div>
  );
}
