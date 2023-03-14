import React from 'react'
import './TextField.scss'

function TextField({variant, rows, cols, placeholder, disabledprop, helperText}) {
  return (
    <div className='textfield-container' >
        <label className='textfield-label' for='textfield'>
         Title
        </label>
        
      <textarea className={`textfield ${variant}`} name='textfield' rows={rows} cols={cols} placeholder={placeholder} disabled={disabledprop} />
      <div className={`helper-text-${variant}`}>{helperText}</div>

    </div>
  )
}

export default TextField