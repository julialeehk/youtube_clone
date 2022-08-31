import React, { useEffect, useState, useCallback } from "react";
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/searchheader/search_header";
import styles from "./app.module.css";
import VideoDetail from "./components/video_detail/video_detail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };
  const search = useCallback(
    (value) => {
      youtube.search(value).then((videos) => {
        setVideos(videos);

        setSelectedVideo(null);
      });
    },
    [youtube]
  );

  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.details}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.videos}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
