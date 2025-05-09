import React, { useEffect, useState } from "react";
import { truncateText } from "../utils/utils";
import { ERR_TEXT, LOADING_TEXT } from "../constants/constants";

interface ContentItem {
  title: string;
  description: string;
  programType: string;
  images: {
    "Poster Art": {
      url: string;
      width: number;
      height: number;
    };
  };
  releaseYear: number;
}

interface ContentListProps {
  title: string;
  jsonUrl: string;
  entries: number;
  filterCondition: (item: ContentItem) => boolean;
}

const ContentList: React.FC<ContentListProps> = ({
  title,
  jsonUrl,
  entries,
  filterCondition,
}) => {
  const [items, setItems] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    fetch(jsonUrl)
      .then((response) => response.json())
      .then((data) => {
        // Filter and sort entries
        const filteredItems = data.entries.filter(filterCondition);
        const sortedItems = filteredItems.sort(
          (a: ContentItem, b: ContentItem) => a.title.localeCompare(b.title)
        );
        setItems(sortedItems.slice(0, entries));
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [jsonUrl, filterCondition, entries]);

  return (
    <main className="main" aria-labelledby="main-title">
      <section className="main__section">
        <div className="main__title">
          <h2>{title}</h2>
        </div>

        <ul className="main__content">
          {isLoading ? (
            <p role="status" aria-live="polite">
              {LOADING_TEXT}
            </p>
          ) : isError ? (
            <p role="alert" aria-live="assertive">
              {ERR_TEXT}
            </p>
          ) : (
            items.map((item) => (
              <li className="card__wrapper" key={item.title}>
                <a href="#" className="card">
                  <img
                    className="card__image"
                    src={item.images["Poster Art"].url}
                    alt={item.title}
                    title={item.title}
                    aria-label={`View details for ${item.title}`}
                  />
                </a>
                <p className="card__text">{truncateText(item.title, 15)}</p>
              </li>
            ))
          )}
        </ul>
      </section>
    </main>
  );
};

export default ContentList;
