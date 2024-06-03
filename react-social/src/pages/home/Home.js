import React from "react";
import Topbar from "../../components/Topbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Rightbar from "../../components/rightbar/Rightbar.jsx";
import Feed from "../../components/feed/Feed.jsx";
import "./home.css";

export default function Home() {
  return (
    <div>
      <Topbar />
      <div className="homeContainer ">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
}
