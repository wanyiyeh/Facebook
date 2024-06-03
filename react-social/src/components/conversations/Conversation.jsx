import React, { useState, useEffect } from "react";
import "./Conversation.css";
import axios from "axios";

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);
    const getUser = async () => {
      try {
        const res = await axios("/users?userId=" + friendId);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [conversation, currentUser]);

  return (
    <div>
      <div className="Conversation">
        <img
          src={
            user?.profilePicture
              ? user.profilePicture
              : "assets/person/noAvatar.png"
          }
          alt=""
          className="img"
        />
        <span className="name">{user?.username}</span>
      </div>
    </div>
  );
}
