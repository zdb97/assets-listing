import React from "react";
import ContentList from "./ContentList";

const Movies: React.FC = () => {
  return (
    <ContentList
      title="Popular Movies"
      jsonUrl="/feed/sample.json"
      entries={21}
      filterCondition={(item) =>
            item.programType === "movie" && item.releaseYear >= 2010
      }
    />
  );
};  

export default Movies;
