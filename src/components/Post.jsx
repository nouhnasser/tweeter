import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import me from "../assets/elon_1.jpg";
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUser } from "@mui/icons-material";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar>
          <img src={me} alt="" />
        </Avatar>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__header--text">
            <h3>
              Elon Musk{" "}
              <span className="post__header--special">
                <VerifiedUser className="post__badge" />
                 @elonmusk
              </span>
            </h3>
          </div>
          <div className="post__header--description">
            <p>Going to Mars!!</p>
          </div>
        </div>

        <img
          src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
          alt=""
        />
        <div className="post__footer">
            <ChatBubbleOutline fontSize="small"/>
            <Repeat fontSize="small"/>
            <FavoriteBorder fontSize="small"/>
            <Publish fontSize="small"/>
        </div>
      </div>
    </div>
  );
}

export default Post;
