import React from "react";
import { Avatar } from "@material-ui/core";
import "../styles/Post.css";
import {
  ChatBubbleOutline as ChatBubbleOutlineIcon,
  ExpandMoreOutlined as ExpandMoreOutlinedIcon,
  AccountCircle as AccountCircleIcon,
  NearMe as NearMeIcon,
  ThumbUp as ThumbUpIcon,
  Delete as DeleteIcon,
} from "@material-ui/icons";
import db from "../firebase/firebase.utils";

const Post = ({ id, profilePic, image, username, timestamp, message }) => {
  const deletePost = () => {
    const notif = window.confirm("Anda yakin untuk menghapus post ini?");
    if (notif) {
      db.collection("posts").doc(id).delete();
    }
    return;
  };
  return (
    <div className="post">
      <div className="post__top">
        <Avatar className="post__avatar" src={profilePic} />
        <div className="post_topInfo">
          <h3 className="post__username">{username}</h3>
          <p className="post__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      {!!image ? (
        <div className="post__image">
          <img src={image} alt={username} />
        </div>
      ) : (
        ""
      )}
      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreOutlinedIcon />
        </div>
        <div onClick={deletePost} className="post__option">
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
};

export default Post;
