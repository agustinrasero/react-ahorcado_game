import React,{useState} from 'react'
import { Contexto } from './Contexto'

const Provider = ({children}) => {
  const [palabra,setPalabra] = useState('')
  return (
    <Contexto.Provider value={{palabra,setPalabra}}>
        {children}
    </Contexto.Provider>
  )
}

export default Provider
