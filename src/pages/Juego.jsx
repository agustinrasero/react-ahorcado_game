import React,{useEffect, useState,useContext} from 'react'
import { palabras } from '../data/data';
import { Contexto } from '../context/Contexto';
import { useNavigate } from 'react-router-dom';
import ahorcado1 from '../img/el_ahorcado1.png'
import ahorcado2 from '../img/el_ahorcado2.png'
import ahorcado3 from '../img/el_ahorcado3.png'
import ahorcado4 from '../img/el_ahorcado4.png'
import ahorcado5 from '../img/el_ahorcado5.png'
import ahorcado6 from '../img/el_ahorcado6.png'



const Juego = () => {

    //Para acceder a cualquier componente
    const nav = useNavigate();

    //Para encontrar inice random
    const [index,setIndex] = useState(0)

    //Para ir encontrando las palabras
    const [letras,setLetras] = useState([])

    //Para llevar la palabra a otros componentes
    const {setPalabra,palabra} = useContext(Contexto)

    const letrasTeclado = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    const letrasTeclado_array = letrasTeclado.split("") // SPLIT te separa en cachitos y cada uno es un array

    const colores = [{backgroundColor:'white'},{backgroundColor:'green',color:'white'},{backgroundColor:'red',color:'white'}]

    //Para validar las teclas q tocamos
    const [correctas,setCorrectas] = useState([])
    const [incorrectas,setIncorrectas] = useState([])

    const [erronea,setErronea] = useState(0)

    useEffect(()=>{

      setIndex(Math.floor(Math.random()*palabras.length)) //Obtenemos un indice rando

    },[])

    useEffect(()=>{
      setPalabra(palabras[index].palabra.split(''))
    },[index])
  


    const click = (e) =>{
      const valorTecla = e.target.innerHTML //Obtenemos el contendio
      setLetras([...letras,valorTecla]) //Hacemos que se añada al array de letras, sino lo hacemos se van a pisar en todo momento
      if (palabra.indexOf(valorTecla)>= 0 ){
        setCorrectas([...correctas,valorTecla])
      }
      else{
        setIncorrectas([...incorrectas,valorTecla])
        setErronea(erronea + 1)
        if (erronea >= 5) {
          nav('/perdiste')
        }
      }
    }

    useEffect(() => {
      if (Array.isArray(palabra) && palabra.length > 0) {
          const noEncontrado = palabra.filter(p => !letras.includes(p)).length;

          if (noEncontrado === 0 && correctas.length > 0) {
              nav('/ganaste');
          }
      }
  }, [correctas, letras, nav, palabra]);
    
  return ( 
    <>
    <div className='pregunta'>
      <h4>{palabras[index].pregunta}</h4>
    </div>

    <div className='palabra'> 
      {
        (palabra) &&
        palabra.map((letra,i)=>(
          letras.indexOf(letra) === -1 //Recorre todo el array, si no encuentra devuelve -1
          ? <div className='palo' key={i}><h3>_</h3></div>
          : <div className='palo' key={i}><h3>{letra.toUpperCase()}</h3></div>
        ))
      }
    </div>

    <div className='teclado'>
      {
        letrasTeclado_array.map((letra)=>( //Recorre todo el array, no hace falta indice porque las letras son distintas
          (correctas.find(valor => valor === letra)) //Ternario con tres opciones
          ?
          <button  style={colores[1]} className='tecla' key={letra}>{letra}</button>
          :
          (incorrectas.find(valor => valor === letra))
          ?
          <button  style={colores[2]} className='tecla' key={letra}>{letra}</button>
          :
          <button onClick={click} style={colores[0]} className='tecla 'key={letra}>{letra}</button>
        ))
      }
    </div>

    <div className='imagen'>
      {(erronea === 0)&& <img className='ahorcado' src={ahorcado1} alt='ahorcado1'></img>}
      {(erronea === 1)&& <img className='ahorcado' src={ahorcado2} alt='ahorcado2'></img>}
      {(erronea === 2)&& <img className='ahorcado' src={ahorcado3} alt='ahorcado3'></img>}
      {(erronea === 3)&&<img className='ahorcado' src={ahorcado4} alt='ahorcado4'></img>}
      {(erronea === 4)&&<img className='ahorcado' src={ahorcado5} alt='ahorcado5'></img>}
      {(erronea === 5)&&<img className='ahorcado' src={ahorcado6} alt='ahorcado6'></img>}
      
      
    </div>
    </>
  )
}

export default Juego
