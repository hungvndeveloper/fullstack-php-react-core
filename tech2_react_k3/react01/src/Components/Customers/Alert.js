import React from "react";

export default function Alert({ content, cols, type = "success" }) {
  return (
    <tr>
      <td colSpan={cols} className="text-center">
        <div className={`alert alert-${type}`}>{content}</div>
      </td>
    </tr>
  );
}
