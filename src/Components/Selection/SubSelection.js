import React from 'react'
import Cylinder from '../Buttons/Cylinder'
import './Selection.scss'


const SubSelection = ({header,buttons,clickHandler}) => {
  return (
    <div id='subselection-main'>
        <h3>{header}</h3>
        <div className='buttons-row'>
        {buttons.map((button,i)=>{
            return <Cylinder width={button.width} height={button.height} text={button.text} css={button.css} onClick={(str)=>clickHandler(i,str)}/>
        })}
        </div>
    </div>
  )
}

export default SubSelection