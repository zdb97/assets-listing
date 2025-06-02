import React from "react";
import { useCallback } from "react";
import ContentList from "../components/ContentList/ContentList";
import { ContentItem } from "../components/ContentList/ContentList";

const Series: React.FC = () => {
  const filterCondition = useCallback(
    (item: ContentItem) =>
      item.programType === "series" && item.releaseYear >= 2010,
    []
  );

  return (
    <ContentList
      title="Popular Series"
      jsonUrl="/feed/sample.json"
      entries={21}
      filterCondition={filterCondition}
    />
  );
};

export default Series;
