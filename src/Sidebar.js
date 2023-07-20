import React from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { Avatar } from "@mui/material";
import logo from "../src/images/banner.png";

export default function Sidebar() {
  const user = useSelector(selectUser);
  const recentItems = (topic) => (
    <div className="sidebar__recentItems">
      <p># {topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar___body">
        <div className="sidebar__top">
          <img src={logo} alt="" className="sidebar__img" />
          <Avatar src={user.photoUrl} className="sidebar__avatar">
            {user.email[0]}
          </Avatar>
          <h2>{user.displayName}</h2>
          <p>{user.email}</p>
        </div>
        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <h2>Analytics and tools</h2>
            <p>94 post impressions</p>
          </div>
        </div>
        <div className="sidebar__item">
          <h2>
            <BookmarkIcon className="bookmark" /> My items
          </h2>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        <br></br>
        {recentItems("React.js")}
        {recentItems("Next.js")}
        {recentItems("Web Developer")}
        {recentItems("Programming")}
        {recentItems("Full stack web developer")}
      </div>
    </div>
  );
}
