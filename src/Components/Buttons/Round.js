import React from 'react'
import './Button.scss'

const Round = ({id, isImage, image,number,css}) => {

  return (
    <li className={css? "card "+css:"card"}>
        {isImage? image:<h6>{number}</h6>}
    </li>
  )
}

export default Round