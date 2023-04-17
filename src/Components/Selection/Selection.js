import React from 'react'
import './Selection.scss'
import SubSelection from './SubSelection'
import Cylinder from '../Buttons/Cylinder'

const Selection = ({SubSelections, selectionHandler, startGame}) => {
  return (
    <div id="main">
    <h2>
      memory
    </h2>
    <div className='sub-main'>
    <SubSelection header={SubSelections[0].header} buttons={SubSelections[0].buttons} clickHandler={(i,str)=>selectionHandler(SubSelections[0].id,i,str)}/>
    <SubSelection header={SubSelections[1].header} buttons={SubSelections[1].buttons} clickHandler={(i,str)=>selectionHandler(SubSelections[1].id,i,str)}/>
    <SubSelection header={SubSelections[2].header} buttons={SubSelections[2].buttons} clickHandler={(i,str)=>selectionHandler(SubSelections[2].id,i,str)}/>
    <div style={{marginTop:"2rem"}}>
    <Cylinder width="500" height="80" css="active" text="Start Game" onClick={startGame}/>
    </div>
    </div>
  </div>
  )
}

export default Selection