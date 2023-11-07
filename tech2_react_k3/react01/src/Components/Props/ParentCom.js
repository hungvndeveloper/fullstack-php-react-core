import React from "react";
import ChildrenCom from "./ChildrenCom";

export default function ParentCom() {
  //Event Handler
  const handleReceiveData = (data, company) => {
    //console.log("Clicked: " + e.target.dataset.name);
    // console.log(e.target);
    // console.log("clicked");
    console.log(data, company);
  };
  return (
    <div>
      <h1>Render Props</h1>

      <ChildrenCom onReceiveData={handleReceiveData} />
    </div>
  );
}
