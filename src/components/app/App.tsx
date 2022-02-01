import styled from "styled-components";
import Header from "../header/Header";
import Main from "../main/Main";
import Form from "../form/Form";
import Button from "../button/Button";
import Input from "../input/Input";
import { GlobalStyle } from "../globalStyles/GlobalStyles";
import { FormEvent, useRef, useState } from "react";
import { app } from "../../config/colors";
import AppError from "../error/AppError";
import Loader from "../loader/Loader";

const StyledApp = styled.div`
  width: 100vw;
  height: 100%;
  background-color: ${app.background};
`;

const APIKey = process.env.REACT_APP_API_KEY;

function App() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [video, setVideo] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  // ? This function will fetch all videos and choose one of them
  const handleSumbit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    setVideo(null);
    setError(false);

    const encoded = encodeURIComponent(String(inputRef.current?.value));

    setLoading(true);

    try {
      const channelUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10000&q=${encoded}&safeSearch=none&key=${APIKey}`;
      const fetchedResults = await fetch(channelUrl);

      if (!fetchedResults.ok) throw new Error();

      const channelId = (await fetchedResults.json()).items[0].id.channelId;

      const videoUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&channelId=${channelId}&maxResults=10000&safeSearch=none&key=${APIKey}`;
      const fetchedVideos = await fetch(videoUrl);

      if (!fetchedVideos.ok) throw new Error();

      const videos = await fetchedVideos.json();

      const videoIndex = Math.floor(
        Math.random() * Number(videos.pageInfo.resultsPerPage)
      );

      const videoLink = `https://www.youtube.com/embed/${videos.items[videoIndex].id.videoId}`;

      setVideo(videoLink);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Header />
        <Main>
          <Form callback={handleSumbit}>
            <Input ref={inputRef} />
            <Button />
          </Form>
          <>
            {video && (
              <iframe
                style={{ width: "100vw", height: "100vh" }}
                src={video}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            )}
            {loading && <Loader />}
            {error && <AppError />}
          </>
        </Main>
      </StyledApp>
    </>
  );
}

export default App;
