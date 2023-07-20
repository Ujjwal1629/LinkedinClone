import React from "react";
import "./UploadOption.css";
export default function UploadOptions({ Icon, title, color }) {
  return (
    <div className="uploadOptions">
      <Icon style={{ color: color }} />
      {<h3>{title}</h3>}
    </div>
  );
}
