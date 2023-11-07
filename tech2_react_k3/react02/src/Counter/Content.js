import React, { memo } from "react";
import PreventRender from "./PreventRender";

function Content() {
  console.log("re-render");
  return <h2>Content</h2>;
}

export default memo(Content);

/*
Viết HOC PreventRender ngăn tình trạng re-render không cần thiết
- Nếu props thay đổi => Vẫn re-render bình thường
- Nếu props không thay đổi hoặc không có props => Không re-render
*/
