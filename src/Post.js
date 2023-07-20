import React, { forwardRef } from "react";
import "./Post.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import ReplyIcon from "@mui/icons-material/Reply";
import SendIcon from "@mui/icons-material/Send";
import UploadOptions from "./UploadOptions";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  const user = useSelector(selectUser);
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl} className="feed__inputIcon">
          {user.email[0]}
        </Avatar>
        <div className="post__info">
          <h2>{name} </h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <UploadOptions Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
        <UploadOptions Icon={CommentIcon} title="Comment" color="gray" />
        <UploadOptions Icon={ReplyIcon} title="Repost" color="gray" />
        <UploadOptions Icon={SendIcon} title="Share" color="gray" />
      </div>
    </div>
  );
});
export default Post;
