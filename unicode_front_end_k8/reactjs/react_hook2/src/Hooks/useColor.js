import React, { useState } from "react";

const useColor = () => {
  const [state] = useState("");
  const color =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
  return color;
};

export default useColor;
