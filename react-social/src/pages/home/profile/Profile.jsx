import "./profile.css";
import Topbar from "../../../components/Topbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import Feed from "../../../components/feed/Feed";
import Rightbar from "../../../components/rightbar/Rightbar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=hey`);
      setUser(res.data);
      console.log(res);
    };
    fetchUser();
  }, []);

  return (
    <div>
      <Topbar />
      <div className="profile ">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={
                  user.coverPicture
                    ? user.coverPicture
                    : "assets/person/noCover.png"
                }
                alt=""
              />
              <img
                className="profileUserImg"
                src={
                  user.profilePicture
                    ? user.profilePicture
                    : "assets/person/noAvatar.png"
                }
                alt=""
              />
            </div>
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">{user.username}</h4>
            <span className="profileInfoDesc">{user.desc}</span>
          </div>
          <div className="profileRightBottom">
            <Feed username="hey" />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}
