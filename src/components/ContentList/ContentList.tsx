import React, { useEffect, useState, memo } from "react";
import { truncateText } from "../../utils/utils";
import {
  ERR_TEXT,
  LOADING_TEXT,
  NO_ITEMS_TEXT,
} from "../../constants/constants";

export interface ContentItem {
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

// type guard to ensure the data is an array of ContentItem
const isValidContentItem = (item: unknown): item is ContentItem => {
  const itemAsAny = item as any;
  return (
    typeof item === "object" &&
    item !== null &&
    typeof itemAsAny.title === "string" &&
    typeof itemAsAny.programType === "string" &&
    typeof itemAsAny.releaseYear === "number" &&
    itemAsAny.images &&
    typeof itemAsAny.images["Poster Art"]?.url === "string"
  );
};

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
    const abortController = new AbortController();

    fetch(jsonUrl, { signal: abortController.signal })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (!abortController.signal.aborted) {
          const validEntries = data.entries.filter(isValidContentItem);

          // Filter and sort entries
          const filteredItems: ContentItem[] =
            validEntries.filter(filterCondition);
          const sortedItems = filteredItems.sort(
            (a: ContentItem, b: ContentItem) => a.title.localeCompare(b.title)
          );
          setItems(sortedItems.slice(0, entries));
        }
      })
      .catch((err) => {
        if (!abortController.signal.aborted && err.name !== "AbortError") {
          setIsError(true);
        }
      })
      .finally(() => {
        if (!abortController.signal.aborted) {
          setIsLoading(false);
        }
      });

    return () => {
      abortController.abort();
    };
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
          ) : items.length === 0 ? (
            <>{NO_ITEMS_TEXT}</>
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

export default memo(ContentList);
