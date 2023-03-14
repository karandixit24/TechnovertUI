import React from 'react'
import './RangeSlider.scss';

function RangeSlider({range_value}) {
  return (
    <div className='range-slider-container' >
   <input type='range' min='1' max='100' value={range_value} class='range-slider' id='myRange' />
    </div>
  )
}

export default RangeSlider