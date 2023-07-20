import React, { useEffect, useState } from "react";
import "./Feed.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import UploadOptions from "./UploadOptions";
import Post from "./Post";
import { db } from "./Firebase";
import { serverTimestamp } from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

export default function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: document.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div>
      <div className="feed">
        <div className="feed__input">
          <AccountCircleIcon className="feed__inputIcon" />
          <form>
            <input
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              type="text"
              placeholder="Start a post"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed___upload">
          <UploadOptions Icon={InsertPhotoIcon} title="Photo" color="0A6EBD" />
          <UploadOptions
            Icon={VideoCameraBackIcon}
            title="Video"
            color="8EAC50"
          />
          <UploadOptions
            Icon={EventAvailableIcon}
            title="Event"
            color="FF8551"
          />
          <UploadOptions Icon={NewspaperIcon} title="Article" color="F24C3D" />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
          return (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
            />
          );
        })}
      </FlipMove>
    </div>
  );
}
