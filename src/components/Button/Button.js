import React from "react";
import "./Button.scss";

function TextButton({ label, variant }) {
  return (
    <div className="btn-container">
      <button className={`button ${variant}`}>{label}</button>
    </div>
  );
}

export default TextButton;
