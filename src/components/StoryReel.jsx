import React from "react";
import "../styles/StoryReel.css";
import Story from "./Story";
import Image1 from "../assets/images/image-1.jpg";
import Image2 from "../assets/images/image-2.jpg";
import Image3 from "../assets/images/image-3.jpg";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        displayName="Budi Santoso"
        profileSrc={Image1}
        imageUrl="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F765877054%2F960x0.jpg%3Ffit%3Dscale"
      />
      <Story
        displayName="Udin Kamukita"
        profileSrc={Image2}
        imageUrl={Image2}
      />
      <Story displayName="Budi Santoso" profileSrc={Image1} imageUrl={Image1} />
      <Story
        displayName="Udin Kamukita"
        profileSrc={Image2}
        imageUrl={Image2}
      />
      <Story displayName="Asep Stereo" profileSrc={Image3} imageUrl={Image3} />
    </div>
  );
};

export default StoryReel;
