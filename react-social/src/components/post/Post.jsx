import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState, useEffect, useContext } from "react";
import { Users } from "../../dummyData";
import axios from "axios";
import TimeAgo from "timeago-react";
import { AuthContext } from "../../context/AuthContext";

export default function Post({ post }) {
  console.log(post);
  // const user = Users.find((u) => u.id === 1);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={user.profilePicture || "assets/person/noAvatar.png"}
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">{user.username}</span>
            <span className="postDate">
              <TimeAgo datetime={post.createdAt} locale="zh_CN" />
            </span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={`assets/${post.img}`} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="assets/like.png"
              alt=""
              className="likeIcon"
              onClick={likeHandler}
            />
            <img
              src="assets/heart.png"
              alt=""
              className="likeIcon"
              onClick={likeHandler}
            />
            <span className="postLikeCounter">{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
