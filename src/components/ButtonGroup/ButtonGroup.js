import React from "react";
import "./ButtonGroup.scss";
import { Primary, Secondary } from "../Button/Button.stories";

function ButtonGroup({ title, description, direction }) {
  return (
    <div className="button-group-container">
      <div className="bgroup-dialog">
        <div className="bgroup-dialog-title">{title}</div>
        <div className="bgroup-dialog-desc">{description}</div>
      </div>

      <div className={`button-group ${direction}`}>
        <Primary label="Button" variant="primary" />
        <Secondary label="Button" variant="secondary" />
      </div>
    </div>
  );
}

export default ButtonGroup;
