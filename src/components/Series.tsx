import React from "react";
import ContentList from "./ContentList";

const Series: React.FC = () => {
  return (
    <ContentList
      title="Popular Series"
      jsonUrl="/feed/sample.json"
      entries={21}
      filterCondition={(item) =>
        item.programType === "series" && item.releaseYear >= 2010
      }
    />
  );
};

export default Series;
