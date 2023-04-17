import React from 'react'
import './Players.scss';


const SinglePlayer = ({moves, _time, size}) => {

  return (
    <div className={"score-panel "+size}>
    <div className="counter">
      <button className="timing">
        <span className="clock">Time</span><span className="displayTime">{_time}</span>
      </button>
    </div>

    <div className="current-rate">
      <button><span className="moving">Move(s) </span><span className="moves">{moves}</span></button>
    </div>
  </div>
  )
}

export default SinglePlayer