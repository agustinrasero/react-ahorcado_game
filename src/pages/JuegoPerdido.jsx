import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import ahorcado from '../img/el_ahorcado6.png'
import { Contexto } from '../context/Contexto'


const JuegoPerdido = () => {
    const {palabra} = useContext(Contexto)
    console.log(palabra)
  return (
    
    <div className='perdiste'>
        <h2>Vaya, respuesta incorrecta</h2>
        <h3>La respuesta correcta era: {palabra}</h3>
        <img src={ahorcado} alt='ahorcado'/>
        <br></br>
        <Link className='link' to='/'> Jugar de nuevo</Link>
    </div>
  
  )
}

export default JuegoPerdido
