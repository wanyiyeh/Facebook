import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../dummyData";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
// import { use } from "../../../../NodeAPI/routes/posts";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = username
          ? await axios.get("/posts/profile/" + username)
          : await axios.get("posts/timeline/" + user._id);
        setPosts(
          res.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
          })
        );
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, [username, user._id]);

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="feed">
      <input onChange={changeHandler} />
      <div className="feedWrapper">
        {username === user.username && <Share />}
        {posts.map((p) => (
          <Post post={p} key={p._id} />
        ))}
      </div>
    </div>
  );
}
