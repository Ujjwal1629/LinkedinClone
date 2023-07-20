import React from "react";
import "./HeaderOption.css";

export default function HeaderOption({ Icon, title, onClick }) {
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon"></Icon>}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}
