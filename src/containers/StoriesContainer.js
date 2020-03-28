import React, { useEffect, useState, memo } from "react";
import { getStoryIds } from "../services/hnApi";
import { Story } from "../components/story";
import { StoryWrapper } from "../styles/StoriesContainerStyles";
import {
  GlobalStyle,
  StoriesContainerWrapper
} from "../styles/StoriesContainerStyles";
import { useInfiniteScroll } from "../hooks/UseInfiniteScroll";
// import "./App.css";

export const StoriesContainer = () => {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(items => setStoryIds(items));
  }, []);

  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper data-test-id="stories-container">
        <h1 className="nav" style={{ padding: 15, backgroundColor: "gold" }}>
          Hacker News With API
        </h1>
        {storyIds.slice(0, count).map(storyId => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </StoriesContainerWrapper>
    </>
  );
};
