import React, { useState } from "react";
import "./Input.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

function Input({ variant, placeholder, disabledProp, helperText, typePassword, title }) {

  const [showEye, setShowEye] = useState(true);
  const [hidePassword, setHidePassword] = useState(true);
 
  const showEyeIcon = ()=> {
    setShowEye(!showEye)
    setHidePassword(!hidePassword)
  }

  const passwordProps = showEye ? eye : eyeSlash

  return (
    <div className="input-wrapper">
      <div className="input-title">{title}</div>
      <div className="input-inner-container" >

        {
          typePassword ? (
            <input type={hidePassword ? 'password' : 'text'}
            className={`input ${variant} `}
            placeholder={placeholder}
            disabled={disabledProp}
          />
          ) : (
            <input type={'text'}
            className={`input ${variant} `}
            placeholder={placeholder}
            disabled={disabledProp}
          />
          )
        }
        
     
      
      <i onClick={showEyeIcon} >
        {typePassword ? passwordProps : null}

      </i>
      </div>
     
      <div className={`helper-text-${variant}`}>{helperText}</div>
    </div>
  );
}

export default Input;
