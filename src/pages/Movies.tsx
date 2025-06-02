import React from "react";
import { useCallback, memo } from "react";
import ContentList from "../components/ContentList/ContentList";
import { ContentItem } from "../components/ContentList/ContentList";

const Movies: React.FC = () => {
  const filterCondition = useCallback(
    (item: ContentItem) =>
      item.programType === "movie" && item.releaseYear >= 2010,
    []
  );

  return (
    <ContentList
      title="Popular Movies"
      jsonUrl="/feed/sample.json"
      entries={21}
      filterCondition={filterCondition}
    />
  );
};

export default Movies;
