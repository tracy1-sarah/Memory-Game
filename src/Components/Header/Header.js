import React from 'react'
import './Header.scss'
import Cylinder from '../Buttons/Cylinder'

const Header = ({headerClickHandler,size}) => {
  return (
    <div id='header' className={size}>
        <h5>
        memory
        </h5>
        <div className='buttons'>
        <Cylinder width='90' height='40' text='Restart' css='active' onClick={headerClickHandler} />
        <Cylinder width='90' height='40' text='New Game' css='light' onClick={headerClickHandler} />
        </div>
    </div>
  )
}

export default Header