import React from "react";

export default function ChildrenCom({ onReceiveData }) {
  console.log("re-render");
  return (
    <div>
      <h2>ChildrenCom</h2>
      <button
        type="button"
        data-name="Tech2"
        onClick={() => {
          onReceiveData("Khóa học React JS", "Tech2");
        }}
      >
        Button
      </button>
    </div>
  );
}
