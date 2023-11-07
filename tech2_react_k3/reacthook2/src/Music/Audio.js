import React, { forwardRef, useImperativeHandle, useRef } from "react";
import music from "./yeu-voi-vang-remix.mp3";

const Audio = ({ onLoadedData }, ref) => {
  const audioRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      play: () => {
        audioRef.current.play();
      },

      pause: () => {
        audioRef.current.pause();
      },

      getDurations: () => {
        return audioRef.current.duration;
      },
    };
  });

  return (
    <audio
      onLoadedData={onLoadedData}
      src={music}
      controls
      ref={audioRef}
    ></audio>
  );
};

export default forwardRef(Audio);
