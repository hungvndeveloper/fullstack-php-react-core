import React, { forwardRef, useRef, useImperativeHandle } from "react";
import videoUrl from "./video.mp4";
const Video = ({ onLoadedData }, ref) => {
  const videoRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      chay: () => {
        videoRef.current.play();
      },
      dung: () => {
        videoRef.current.pause();
      },
      paused: videoRef.current.paused,
      getDuration: () => videoRef.current.duration,
    };
  });

  return (
    <video
      ref={videoRef}
      style={{ width: "400px", height: "300px" }}
      src={videoUrl}
      onLoadedData={onLoadedData}
    />
  );
};

export default forwardRef(Video);
