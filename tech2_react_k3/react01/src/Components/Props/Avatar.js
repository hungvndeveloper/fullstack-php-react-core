import React from "react";

export default function Avatar(props) {
  //props.src = "a"; => Không cập nhật được
  console.log(props);
  return (
    <div className="avatar">
      <img {...props} />
    </div>
  );
}
