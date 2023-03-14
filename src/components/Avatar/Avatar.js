import React from "react";
import './Avatar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";




function Avatar({variant, link}) {
  return (
   
      <div className={`avatar avatar-${variant}`} href={link}>
          {<FontAwesomeIcon className="avatar-user" icon={faUser} />}
      </div>

  );
}

export default Avatar;
