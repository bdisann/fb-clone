import React, { useEffect, useState } from "react";
import StoryReel from "./StoryReel";
import "../styles/Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "../firebase/firebase.utils";

const Feed = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);
  return (
    <div className="feed">
      {/* Story Reel */}
      <StoryReel />
      {/* Message Sender */}
      <MessageSender />

      {/* Post Feed */}
      {posts?.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          username={post.data.username}
          image={post.data.image}
          timestamp={post.data.timestamp}
        />
      ))}
    </div>
  );
};

export default Feed;
