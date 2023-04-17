import React from 'react'
import "./PlayGame.scss"
import Round from '../Buttons/Round'

const PlayGame = ({Deck, cardClickHandler,size}) => {
  return (
    <div>
      <ul className={"deck "+size} id="card-deck">
      {Deck.map((option) => (
        <div key={option.id} onClick={e=>cardClickHandler(option.id,option.number,option.isMatched)}>
          <Round id={option.id} isImage={option.isImage} image={option.image} css={option.css} number={option.number}/>
        </div>
      ))}
      </ul>
    </div>
  )
}

export default PlayGame