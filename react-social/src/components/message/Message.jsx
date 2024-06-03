import React from "react";
import "./Message.css";
import TimeAgo from "timeago-react";

export default function Message({ message, own }) {
  return (
    <div>
      <div className={own ? "message own" : "message"}>
        <div className="messageTop">
          <img src="/assets/person/10.jpeg" alt="" className="img" />
          <p className="messageText">{message.text}</p>
        </div>
        <div className="messageBottom">
          {" "}
          <TimeAgo datetime={message.createdAt} locale="zh_CN" />
        </div>
      </div>
    </div>
  );
}
