import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "../App";

describe("App", () => {
  it("renders app", () => {
    render(<App />);
    screen.getByText(/Welcome to my app/i);
    screen.getByPlaceholderText(/Paste/i);
    screen.getByRole("button");
  });
  it("Should show video", async () => {
    const mockSuccessResponse = {
      items: [{ id: { channelId: 1, videoId: 1 } }],
      pageInfo: { resultsPerPage: 1 },
    };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      ok: true,
      json: () => mockJsonPromise,
    });
    const globalRef: any = global;
    globalRef.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    render(<App />);

    const button = screen.getByRole("button");

    fireEvent.click(button);
    await screen.findByText(/loading/i);
    await screen.findByTitle(/Embedded youtube/i);
  });
  it("Should show error", async () => {
    const mockSuccessResponse = {
      items: [{ id: { channelId: 1, videoId: 1 } }],
      pageInfo: { resultsPerPage: 1 },
    };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      ok: false,
      json: () => mockJsonPromise,
    });
    const globalRef: any = global;
    globalRef.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    render(<App />);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    await screen.findByText(/Error/i);
  });
});
