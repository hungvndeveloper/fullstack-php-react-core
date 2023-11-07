import React from "react";
import Td from "./Td";

export default function Tr() {
  const tdList = (
    <>
      <Td />
      <Td />
    </>
  );
  return <tr>{tdList}</tr>;
}
