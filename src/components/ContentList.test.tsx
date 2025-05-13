import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ContentList from "./ContentList";

const mockData = {
  entries: [
    {
      title: "Test Series",
      description: "Description Series",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://via.placeholder.com/123",
          width: 150,
          height: 200,
        },
      },
      releaseYear: 2020,
    },
    {
      title: "Test Series 2",
      description: "Description Series 2",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://via.placeholder.com/456",
          width: 150,
          height: 200,
        },
      },
      releaseYear: 2015,
    },
    {
      title: "Test Movie",
      description: "Description Movie",
      programType: "movie",
      images: {
        "Poster Art": {
          url: "https://via.placeholder.com/789",
          width: 150,
          height: 200,
        },
      },
      releaseYear: 2020,
    },
  ],
};

beforeEach(() => {
  (global.fetch as jest.Mock) = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
    })
  );
});

describe("ContentList Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the initial loading state", () => {
    render(
      <ContentList
        title="Popular Series"
        jsonUrl="/feed/sample.json"
        entries={2}
        filterCondition={(item) => item.programType === "series"}
      />
    );

    expect(screen.getByRole("status")).toHaveTextContent("Loading...");
  });

  it("renders error state", async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.reject("API is down")
    );

    render(
      <ContentList
        title="Popular Series"
        jsonUrl="/feed/sample.json"
        entries={2}
        filterCondition={(item) => item.programType === "series"}
      />
    );

    await waitFor(() =>
      expect(screen.getByRole("alert")).toHaveTextContent(
        "Oops, something went wrong."
      )
    );
  });

  it("renders items correctly after successful fetch", async () => {
    render(
      <ContentList
        title="Popular Series"
        jsonUrl="/feed/sample.json"
        entries={2}
        filterCondition={(item) => item.programType === "series"}
      />
    );

    await waitFor(() => {
      expect(screen.getByText("Test Series")).toBeInTheDocument();
      expect(screen.getByText("Test Series 2")).toBeInTheDocument();
    });
  });

  it("renders movie items correctly after successful fetch", async () => {
    render(
      <ContentList
        title="Popular Movies"
        jsonUrl="/feed/sample.json"
        entries={2}
        filterCondition={(item) => item.programType === "movie"}
      />
    );

    await waitFor(() => {
      expect(screen.getByText("Test Movie")).toBeInTheDocument();
    });
  });

  it("limits the number of items rendered based on entries", async () => {
    render(
      <ContentList
        title="Popular Series"
        jsonUrl="/feed/sample.json"
        entries={1}
        filterCondition={(item) => item.programType === "series"}
      />
    );

    await waitFor(() => {
      expect(screen.getByText("Test Series")).toBeInTheDocument();
      expect(screen.queryByText("Test Series 2")).not.toBeInTheDocument();
    });
  });
});
