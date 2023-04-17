import React from 'react'
import './Players.scss'
import Rectangle from '../Buttons/Rectangle'

const Players = ({Players, size}) => {
  return (
    <div id='players-main' className={size}>
        {Players.map((option) => (
        <div key={option.id}>
          <Rectangle text={option.text} score={option.score} active={option.active} />
        </div>
      ))}
    </div>
  )
}

export default Players