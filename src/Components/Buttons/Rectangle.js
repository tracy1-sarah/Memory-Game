import React from 'react'
import './Button.scss'

const Rectangle = ({text, score, active}) => {
  return (
    <div className='btn-rectangle'>
      <div className={active?'inner active':'inner inactive'}>
      <p>{text}</p>
      <h6>{score}</h6>
      </div>
    </div>
  )
}

export default Rectangle