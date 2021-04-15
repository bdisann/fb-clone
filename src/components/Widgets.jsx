import React from "react";
import "../styles/Widgets.css";

const Widgets = () => {
  return (
    <div className="widgets">
      <iframe
        title="widgets-fb"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgeraisunnah.id&tabs=timeline&width=200&height=1500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="200"
        height="1500"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Widgets;
