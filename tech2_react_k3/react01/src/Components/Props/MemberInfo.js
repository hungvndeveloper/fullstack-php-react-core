import React from "react";

export default function MemberInfo({ name, email }) {
  return (
    <div className="members-info">
      <p>Tên: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}
