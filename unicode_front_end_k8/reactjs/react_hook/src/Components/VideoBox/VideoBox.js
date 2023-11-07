import React, { useEffect, useRef, useState } from "react";
import Video from "./Video";

const VideoBox = () => {
  const videoRef = useRef();
  const [isPlay, setIsPlay] = useState(false);
  const [duration, setDuration] = useState(0);

  const handleLoadedData = () => {
    setDuration(videoRef.current.getDuration());
  };

  useEffect(() => {
    console.log(videoRef);
  }, []);

  const handlePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.chay();
      setIsPlay(true);
    } else {
      videoRef.current.dung();
      setIsPlay(false);
    }
  };

  return (
    <div>
      <Video ref={videoRef} onLoadedData={handleLoadedData} />
      <button onClick={handlePlay}>{isPlay ? "Pause" : "Play"}</button>
      <h4>Duration: {duration}</h4>
    </div>
  );
};

export default VideoBox;
