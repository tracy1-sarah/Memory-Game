import React from 'react'

import './Button.scss'

const Cylinder = ({width, height, text, css, onClick}) => {
  return (
    <div className={'btn-cylinder '+css} style={{height:height+"px", width: width+"px"}} onClick={(e)=>{onClick(text)}} >
      <h6>
      {text}
      </h6>
    </div>
  )
}

export default Cylinder