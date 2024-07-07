import React, { useEffect, useState } from "react";
import CreatePost from "../../components/organisms/CreatePost";
import FeedCard from "../../components/organisms/FeedCard";
import { localStorage } from "../../utils/localStorageUtils";
import { FEEDS_PAGE } from "./constants";
import "./index.css";

function Feeds() {
  const [feeds, setfeeds] = useState([]);
  useEffect(() => {
    setfeeds(localStorage.get("posts") || []);
  }, []);

  return (
    <div className="feeds-container">
      <div className="title">{FEEDS_PAGE.TITLE}</div>
      <div className="sub-title">{FEEDS_PAGE.SUB_TITLE}</div>
      <CreatePost />
      {feeds.map((feed, index) => (
        <div className="feed-card-wrapper" key={feed.userName + index}>
          <FeedCard
            userName={feed.userName}
            text={feed.text}
            timeline={feed?.timeline}
            commentsCount={feed?.commentsCount}
          />
        </div>
      ))}
    </div>
  );
}

export default Feeds;
