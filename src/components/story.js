import React, { useState, useEffect } from "react";
import { getStory } from "../services/hnApi";
import {
  StoryWrapper,
  StoryTitle,
  StoryMeta,
  StoryMetaElement
} from "../styles/StoryStyles";

import { MapTime } from "../mappers/MapTime";

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <StoryWrapper data-testid="story">
      <StoryTitle>
        <a href={story.url}>{story.title}</a>
      </StoryTitle>
      <StoryMeta>
        <span className="story_by" data-testid="story-by">
          <StoryMetaElement color="#000">By:</StoryMetaElement>
          {story.by}
        </span>
        <span className="story_time" data-testid="story-time">
          <StoryMetaElement color="#000">Posted:</StoryMetaElement>
          {` `}
          {MapTime(story.time)}
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
};
