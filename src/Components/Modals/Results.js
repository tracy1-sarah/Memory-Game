import React from 'react'
import './Modal.scss'
import Cylinder from '../Buttons/Cylinder'

const Results = ({players, message, buttonClickHandler, singlePlayer}) => {
  return (
    <>
    <div className="overlay hidden"></div>
    <div className="modal hidden">
      <div className="results">
        <h1>You did it!</h1>
        <h4>Game over! Here's the results</h4>
        <div className="endGame-btn">
          <div className="above">
              {players.length>1?players.map( player=>{
              return( 
              <div className="left scores">
                <h5>{player.text}</h5>
                <h3>{player.score}</h3>
              </div>
              )
              }
              ):
              <>
              <div className="left scores">
                <h5>Time</h5>
                <h3>{singlePlayer.time}</h3>
              </div>
              <div className="left scores">
                <h5>Moves</h5>
                <h3>{singlePlayer.moves}</h3>
              </div>
              </>
              }
          </div>
          <h4>{message}</h4>
          <div className="below">
          <Cylinder width='200' height='40' text='Restart' css='active' onClick={buttonClickHandler} />
          <Cylinder width='200' height='40' text='New Game' css='light' onClick={buttonClickHandler} />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Results