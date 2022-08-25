import { useEffect, useState } from "react";
import axios from "axios";
import Share from "../../share/Share";
import Post from "../../components/post/Post";
import "./feed.css";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  //provide an empty array to use effect if you want it to run once
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/62fcca04965456df1a8aed1b");
      console.log(res.data);
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);
  return (
    <div className="feed">
      <Share />
      {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}
    </div>
  );
}
