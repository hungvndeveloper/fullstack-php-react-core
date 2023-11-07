import React, { useEffect, useRef } from "react";
import Audio from "./Audio";

const Music = () => {
  const audioRef = useRef();

  useEffect(() => {
    console.log(audioRef.current);
  }, []);

  const handleLoadedData = () => {
    console.log(audioRef.current.getDurations());
  };

  const handlePlay = () => {
    audioRef.current.play();
    //audioRef.current.remove();
  };
  const handlePause = () => {
    audioRef.current.pause();
  };
  return (
    <div>
      <Audio onLoadedData={handleLoadedData} ref={audioRef} />
      <hr />
      <button type="button" onClick={handlePlay}>
        Play
      </button>
      <button type="button" onClick={handlePause}>
        Pause
      </button>
    </div>
  );
};

export default Music;
