import React from 'react';
import './Tooltip.scss';

function Tooltip({title, desc, variant}) {
  return (
    <div className={`tooltip-container tooltip-${variant}`} >
        <div className={`tooltip-triangle triangle-${variant}`} ></div>
        <div className='tooltip-msg-container' >
            <div className='tooltip-msg-title' >{title}</div>
            <div className='tooltip-msg-desc' >{desc}</div>
        </div>
    </div>
  )
}

export default Tooltip