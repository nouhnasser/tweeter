import React from "react";
import "./TweetBox.css";
import me from "../assets/meee.jpg";

import { Avatar, Button } from "@mui/material";
function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar>
            <img src={me} alt="" />
          </Avatar>
          <input placeholder="What's happening?" type="text" />
        </div>
        <input
          placeholder="Optional: Enter image URL"
          type="text"
          className="tweetBox__input--image"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
