import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Juego from '../pages/Juego'
import JuegoGanado from '../pages/JuegoGanado'
import JuegoPerdido from '../pages/JuegoPerdido'

const Router1 = () => {
  return (
    <Routes>
        <Route path='/' element={<Juego/>}></Route>
        <Route path='ganaste' element={<JuegoGanado/>}></Route>
        <Route path='perdiste' element={<JuegoPerdido/>}></Route>
    </Routes>
  )
}

export default Router1
