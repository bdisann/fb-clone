import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import {
  InsertEmoticon as InsertEmoticonIcon,
  PhotoLibrary as PhotoLibraryIcon,
  Videocam as VideocamIcon,
} from "@material-ui/icons";
import "../styles/MessageSender.css";
import { useStateValue } from "../contexts/StateProvider";
import db from "../firebase/firebase.utils";
import firebase from "firebase";

const MessageSender = () => {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();
  const [inputText, setInputText] = useState("");
  const [inputImageUrl, setInputImageUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // db coding
    db.collection("posts").add({
      message: inputText,
      image: inputImageUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
    });

    // reset state
    setInputText("");
    setInputImageUrl("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form action="" className="messageSender__inputForm">
          <input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={`What is your mind, ${user.displayName}?`}
            className="messageSender__inputText"
          />
          <input
            value={inputImageUrl}
            onChange={(e) => setInputImageUrl(e.target.value)}
            placeholder="Image URL (Optional)"
            className="messageSender__inputUrl"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__bottom__option">
          <VideocamIcon className="messageSender__bottom__option__videoCam" />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__bottom__option">
          <PhotoLibraryIcon className="messageSender__bottom__option__photoLibrary" />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__bottom__option">
          <InsertEmoticonIcon className="messageSender__bottom__option__insertEmoticon" />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
