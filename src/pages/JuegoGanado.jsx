import React from 'react'
import win from '../img/win.png'
import { Link } from 'react-router-dom'

const JuegoGanado = () => {
  return (
    <>
      <div className='contenedor'>
        <h2>Felicitaciones!! ganaste el juego</h2>
        <img src={win}></img>
        <br></br>
        <br></br>
        <Link className='link' to='/'> Jugar de nuevo</Link>
      </div>
    </>
  )
}

export default JuegoGanado
