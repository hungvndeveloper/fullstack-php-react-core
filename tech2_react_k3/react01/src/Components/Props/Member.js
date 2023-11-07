import React from "react";
import Avatar from "./Avatar";
import MemberInfo from "./MemberInfo";
import Posts from "./Posts";

export default function Member({ info, avatar, posts }) {
  return (
    <div className="members">
      <MemberInfo {...info} />
      <Avatar {...avatar} />
      <Posts posts={posts} />
    </div>
  );
}

/*
Props => 
- Không thể thay đổi được trong nội bộ component
- Chỉ thay đổi ở component cha
*/
