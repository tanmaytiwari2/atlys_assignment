import React from "react";
import chatBubble from "../../../assets/icons/chatBubble.png";
import dotsHorizontal from "../../../assets/icons/dotsHorizontal.svg";
import emoji from "../../../assets/icons/emoji.png";
import { FEEDS_PAGE } from "../../../pages/Feeds/constants";
import Card from "../../atoms/Card";
import "./index.css";

function FeedCard({ userName, timeline, text, commentsCount }) {
  return (
    <Card>
      <div className="top-section">
        <div className="top-section">
          <img
            src="data:image/png;base64,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"
            className="profile-image"
          />
          <div className="name-section">
            <div className="name">{userName}</div>
            {timeline && (
              <div className="timeline">{`${timeline} ${FEEDS_PAGE.TIMELINE}`}</div>
            )}
          </div>
        </div>
        <img className="dots-icon" src={dotsHorizontal} />
      </div>
      <div className="middle-section">
        <div className="emoji">
          <img src={emoji} />
        </div>
        <div className="main-text">{text}</div>
      </div>
      {commentsCount && (
        <div className="lower-section">
          <img src={chatBubble} />
          <div className="comment-count">{`${commentsCount} ${FEEDS_PAGE.COMMENTS}`}</div>
        </div>
      )}
    </Card>
  );
}

export default FeedCard;
